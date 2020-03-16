import { Injectable } from '@angular/core';
import {ActionSheetController, Events, Platform, ToastController} from "ionic-angular";
import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path/ngx";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {StockageProvider} from "../stockage/stockage";
import {last, map, tap, timeout} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {Base64ToGallery} from "@ionic-native/base64-to-gallery";

/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraProvider {

  public uploadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public downloadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  constructor(public actionSheetCtrl: ActionSheetController,
              public base64ToGallery: Base64ToGallery,
              public stockageProvider: StockageProvider,
              public httpClient : HttpClient,
              public toastCtrl : ToastController,
              private camera: Camera, public platform: Platform,
              private filePath: FilePath,
              public events: Events
              ) {
    console.log('Hello CameraProvider Provider');
  }

  photoChooser(objetActuel,photoAttributName,width,height,quality,objet) :void{


    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Charger à partir de la galerie',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY,objetActuel,photoAttributName,width,height,quality,objet);

          }
        },
        {
          text: 'Charger à partir de Caméra',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA,objetActuel,photoAttributName,width,height,quality,objet);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();



  }

  async takePicture(sourceType,objetActuel,photoAttributName,width,height,quality,objet) {

    /*
    const CameraOptions  = {
      quality: 100,
      destinationType: this.platform.is('ios') ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    */
    let CameraOptions  = {
      quality: quality,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: width,
      targetHeight: height,
      correctOrientation: true,
      sourceType: 0
    };

    if(sourceType == this.camera.PictureSourceType.CAMERA) {

      CameraOptions  = {
        quality: quality,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: width,
        targetHeight: height,
        correctOrientation: true,
        sourceType: 1
      };

    }




    //if(sourceType == this.camera.PictureSourceType.CAMERA) {
      // Get the data of an image

      this.camera.getPicture(CameraOptions).then((imageData) => {

        console.log("hello");

        // Special handling for Android library
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {

          objetActuel[photoAttributName] = 'data:image/jpeg;base64,' + imageData;
          this.filePath.resolveNativePath(imageData);

        } else {

          objetActuel[photoAttributName] = 'data:image/jpeg;base64,' + imageData;

        }
        console.log("a vos marques");



        if(sourceType == this.camera.PictureSourceType.CAMERA) {
          let prefix = "P_" + (objet as any).id.toString() + "_";
          try{
            this.base64ToGallery.base64ToGallery(imageData, { prefix: prefix , mediaScanner:true }).then(
              res => console.log('Saved image to gallery ', res.toString().substring(10) ),
              err => console.log('Error saving image to gallery ', err.toString().substring(10) )
            );
          }
          catch(err){
            console.log("erreur" + err);
          }

        }






        this.httpClient.post("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
          "insert into photoparcelles (photo,idparcelle,typephoto) " +
          "values (" +
          "" + "'postBody'" + "," +
          "" + this.adaptValueQuery((objet as any).id, "number") + "," +
          "" + this.adaptValueQuery(photoAttributName, "text") + "" +
          ")", 'data:image/jpeg;base64,' + imageData, {
            responseType: 'arraybuffer',
            reportProgress: true
          }
        )
          .pipe(
            timeout(10000),
            //map(event => this.getStatusMessage(event)),
            //tap(message => console.log(message)),
            //last()
          )
          .subscribe(data => {

          }, err => {

            let messageGetToast = "Informations attributaires enregistrées";

            console.log(JSON.stringify(err));


            if (err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")) {

              let toast = this.toastCtrl.create({
                message: messageGetToast,
                duration: 1000,
                position: 'top',
                cssClass: "toast-success"
              });

              toast.present();

              this.stockageProvider.updatePushValue(
                photoAttributName,
                (objet as any).id,
                {
                  sent: true
                }
              );


            } else {
              messageGetToast = "Informations attributaires non enregistrées";

              let toast = this.toastCtrl.create({
                message: messageGetToast,
                duration: 1000,
                position: 'top',
                cssClass: "toast-echec"
              });

              toast.present();


              this.stockageProvider.updatePushValue(
                photoAttributName,
                (objet as any).id,
                {
                  photo: 'data:image/jpeg;base64,' + imageData,
                  requete: "http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                    "insert into photoparcelles (photo,idparcelle,typephoto) " +
                    "values (" +
                    "" + "'postBody'" + "," +
                    "" + this.adaptValueQuery((objet as any).id, "number") + "," +
                    "" + this.adaptValueQuery(photoAttributName, "text") + "" +
                    ")",
                  sent: false
                }
              );


            }

          });


      }, (err) => {

        console.log(err.toString());
      });

      /*

    }

    if(sourceType == this.camera.PictureSourceType.PHOTOLIBRARY){

      // Get the data of an image
      this.camera.getPicture(0).then((imageData) => {

        console.log("hello");

        // Special handling for Android library
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {

          objetActuel[photoAttributName] = 'data:image/jpeg;base64,' + imageData;
          this.filePath.resolveNativePath(imageData);

        } else {

          objetActuel[photoAttributName] = 'data:image/jpeg;base64,' + imageData;

        }

        this.httpClient.post("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
          "insert into photoparcelles (photo,idparcelle,typephoto) " +
          "values ("+
          "" + "'postBody'"   + "," +
          "" + this.adaptValueQuery( (objet as any).id          , "number"  )   + "," +
          "" + this.adaptValueQuery( photoAttributName        , "text"  )   + "" +
          ")", 'data:image/jpeg;base64,' + imageData, {
            responseType: 'arraybuffer',
            reportProgress: true
          }
        )
          .pipe(
            timeout(6000),
            //map(event => this.getStatusMessage(event)),
            //tap(message => console.log(message)),
            //last()
          )
          .subscribe( data =>{

          },err => {

            let messageGetToast = "Informations attributaires enregistrées";

            console.log(JSON.stringify(err));


            if(err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")  ){

              let toast = this.toastCtrl.create({
                message: messageGetToast,
                duration: 1000,
                position: 'top',
                cssClass: "toast-success"
              });

              toast.present();

              this.stockageProvider.updatePushValue(
                photoAttributName,
                (objet as any).id,
                {
                  sent: true
                }

              );



            }
            else{
              messageGetToast = "Informations attributaires non enregistrées";

              let toast = this.toastCtrl.create({
                message: messageGetToast,
                duration: 1000,
                position: 'top',
                cssClass: "toast-echec"
              });

              toast.present();

              this.stockageProvider.updatePushValue(
                photoAttributName,
                (objet as any).id,
                {
                  photo : 'data:image/jpeg;base64,' + imageData,
                  requete: "http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                    "insert into photoparcelles (photo,idparcelle,typephoto) " +
                    "values ("+
                    "" + "'postBody'"   + "," +
                    "" + this.adaptValueQuery( (objet as any).id          , "number"  )   + "," +
                    "" + this.adaptValueQuery( photoAttributName        , "text"  )   + "" +
                    ")",
                  sent: false}

              );




            }

          });




      }, (err) => {

        console.log(err.toString());
      });


    }

    */






    }

  adaptValueQuery(value,type) {
    let retour = null;
    if (!value) {
      if (type == "text") {
        retour = "''";
      } else {
        retour = "";
      }
    }
    else {
      if (type == "text") {
        retour = "'" + value + "'";
      } else {
        retour = value;
      }

    }
    return retour;
  }

  getStatusMessage(event){

    let status;

    switch(event.type){
      case HttpEventType.Sent:
        return `Uploading Files`;

      case HttpEventType.UploadProgress:
        status = Math.round(100 * event.loaded / event.total);
        this.uploadProgress.next(status);
        return `Files are ${status}% uploaded`;

      case HttpEventType.DownloadProgress:
        status = Math.round(100 * event.loaded / event.total);
        this.downloadProgress.next(status); // NOTE: The Content-Length header must be set on the server to calculate this
        return `Files are ${status}% downloaded`;

      case HttpEventType.Response:
        return `Done`;

      default:
        return `Something went wrong`
    }
  }

  resetProgress(){

    this.uploadProgress.next(0);
    this.downloadProgress.next(0);

  }


}
