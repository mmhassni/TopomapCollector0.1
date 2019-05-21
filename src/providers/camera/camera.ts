import { Injectable } from '@angular/core';
import {ActionSheetController, Platform} from "ionic-angular";
import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path/ngx";

/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraProvider {

  constructor(public actionSheetCtrl: ActionSheetController, private camera: Camera, public platform: Platform, private filePath: FilePath) {
    console.log('Hello CameraProvider Provider');
  }

  photoChooser(objetActuel,photoAttributName,width,height,quality) :void{


    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Charger à partir de la galerie',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY,objetActuel,photoAttributName,width,height,quality);

          }
        },
        {
          text: 'Charger à partir de Caméra',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA,objetActuel,photoAttributName,width,height,quality);
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

  takePicture(sourceType,objetActuel,photoAttributName,width,height,quality) {

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
      targetHeight: height
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
    }, (err) => {

      console.log(err.toString());
    });



  }


}
