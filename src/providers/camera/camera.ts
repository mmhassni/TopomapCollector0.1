import { Injectable } from '@angular/core';
import {ActionSheetController, Events, Platform, ToastController} from "ionic-angular";
import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path/ngx";
import {HttpClient} from "@angular/common/http";
import {StockageProvider} from "../stockage/stockage";
import {timeout} from "rxjs/operators";

/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraProvider {

  constructor(public actionSheetCtrl: ActionSheetController, public stockageProvider: StockageProvider, public httpClient : HttpClient,public toastCtrl : ToastController, private camera: Camera, public platform: Platform, private filePath: FilePath,public events: Events) {
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
    const CameraOptions  = {
      quality: quality,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: width,
      targetHeight: height,
      correctOrientation: true
    };




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

      this.httpClient.post("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
        "insert into photoparcelles (photo,idparcelle,typephoto) " +
        "values ("+
        "" + "'postBody'"   + "," +
        "" + this.adaptValueQuery( (objet as any).id          , "number"  )   + "," +
        "" + this.adaptValueQuery( photoAttributName        , "text"  )   + "" +
        ")", 'data:image/jpeg;base64,' + imageData
      )
        .pipe(
          timeout(6000)
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
                requete: "http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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


}
