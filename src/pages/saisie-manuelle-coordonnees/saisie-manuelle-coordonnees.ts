import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the SaisieManuelleCoordonneesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saisie-manuelle-coordonnees',
  templateUrl: 'saisie-manuelle-coordonnees.html',
})
export class SaisieManuelleCoordonneesPage {

  public objetActuel = {};
  public idparcelle = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient:HttpClient) {



    this.idparcelle = this.navParams.data.idparcelle;
    console.log(navParams);



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaisieManuelleCoordonneesPage');
  }

  ajouterCentroide() {

    this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "INSERT INTO public.centroides( " +
      "shape,idparcelle) " +
      "VALUES (" +
      "ST_Multi(    ST_Transform( ST_SetSRID(ST_MakePoint( " + this.objetActuel["X"] + " , " + this.objetActuel["Y"] + "), 26191)  ,  4326)   )," +
      "" + this.navParams.data.idparcelle + ");")
      .subscribe(data => {

      },error1 => {

        this.navCtrl.pop();

      });

  }
}
