import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the AjouterAppareilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-appareil',
  templateUrl: 'ajouter-appareil.html',
})
export class AjouterAppareilPage {

  public nomAppareil = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterAppareilPage');
  }

  seConnecter(){

    if(this.nomAppareil != ""){
      this.storage.set("appareilId",this.nomAppareil);

      this.navCtrl.push(TabsPage);
    }


  }

}
