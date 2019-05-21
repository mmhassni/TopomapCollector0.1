import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {CameraProvider} from "../../providers/camera/camera";
import {AjouterParcellePage} from "../ajouter-parcelle/ajouter-parcelle";

/**
 * Generated class for the ListeParcellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-parcelle',
  templateUrl: 'liste-parcelle.html',
})
export class ListeParcellePage {

  public objetActuel = {};

  public listeObjetActuelle = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient : HttpClient,public toastCtrl : ToastController,  public cameraProvider : CameraProvider) {

    this.refresh();


  }

  refresh(){

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select * from parcelles order by id desc")
      .subscribe( data =>{


        this.listeObjetActuelle = (data as any).features;


      });

  }

  ionViewDidEnter() {
    this.refresh();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeParcellePage');
  }

  onConstructionsSelectChange($event) {

    if($event) {
      let value = "";
      if (typeof $event == "object") {
        for (let i = 0; i < $event.length; i++) {
          if (i == 0) {
            value = value + $event[i];
          } else {
            value = value + "+" + $event[i];
          }
        }
      } else {
        value = $event;
      }

      this.objetActuel["constructions"] = value;
    }


  }

  onConstructionsInuptChange($event) {

    this.objetActuel["constructionsionselect"] = "";

  }

  onPlusvaluesSelectChange($event) {

    if($event) {
      let value = "";
      if (typeof $event == "object") {
        for (let i = 0; i < $event.length; i++) {
          if (i == 0) {
            value = value + $event[i];
          } else {
            value = value + "+" + $event[i];
          }
        }
      } else {
        value = $event;
      }

      this.objetActuel["plusvalues"] = value;
    }




  }



  itemTapped($event: MouseEvent, item: any) {

    this.navCtrl.push(AjouterParcellePage, {
      informationsActuelles: item,
      action:"modifier"
    });

  }

  ajouterItem() {

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "insert into parcelles(consistance,plusvalues,constructions,adresse,coldenaib) " +
      "values ("+
      "" + this.adaptValueQuery( null    , "text"  )   + "," +
      "" + this.adaptValueQuery( null    , "text"  )  + "," +
      "" + this.adaptValueQuery( null    , "text"  )    + "," +
      "" + this.adaptValueQuery( null    , "text"  )   + "," +
      "" + this.adaptValueQuery( null    , "text"  )   + "" +
      ")"
    )
      .subscribe( data =>{

      },err => {

        let messageGetToast = "Informations attributaires enregistrées";

        if(err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")  ){

          this.refresh();
          let toast = this.toastCtrl.create({
            message: messageGetToast,
            duration: 1000,
            position: 'top',
            cssClass: "toast-success"
          });

          toast.present();



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

        }

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
