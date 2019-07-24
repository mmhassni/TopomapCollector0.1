import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {Pro} from "@ionic/pro";
import {ListeParcellePage} from "../pages/liste-parcelle/liste-parcelle";
import {timeout} from "rxjs/operators";
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";
import {StockageProvider} from "../providers/stockage/stockage";
import {PostMappingToolsPage} from "../pages/post-mapping-tools/post-mapping-tools";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  @ViewChild(Nav) nav: Nav;

  public progressBar = 0;

  public listePhoto = {
    "photocinrecto":"photocinrecto",
    "photocinverso":"photocinverso",
    "photoparcelle":"photoparcelle",
    "photocroquis":"photocroquis"
  };

  constructor(platform: Platform,
              statusBar: StatusBar,
              public storage: Storage,
              public httpClient : HttpClient,
              public toastCtrl : ToastController,
              public stockageProvider: StockageProvider,


              splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      try{

        Pro.deploy.configure({channel: 'Production',updateMethod:"auto"}).then( onsucces => {

          this.getVersionInfo();

          this.checkChannel();

          this.performManualUpdate();

        });

      }
      catch (err) {
        console.log(err);
      }

      for(let key in this.listePhoto){

        console.log(key);

        //if(key == "photoparcelle"){




          this.storage.get(key).then( (val) => {




            for(let itemid in val ){





              if( val[itemid]["sent"].toString() ) {

                console.log(val[itemid]["sent"]);



                this.httpClient.post(val[itemid]["requete"], val[itemid]["photo"]).pipe(
                  timeout(100000)
                )

                  .subscribe(data => {


                    }
                    , err => {

                      console.log("eee");

                      let messageGetToast = "Parcelle : " + itemid + " Informations attributaires enregistrées";

                      console.log(JSON.stringify(err));


                      if (err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")) {

                        let toast = this.toastCtrl.create({
                          message: messageGetToast,
                          duration: 1000,
                          position: 'top',
                          cssClass: "toast-success"
                        });

                        toast.present();


                        this.stockageProvider.updatePushValue(key, itemid, {sent: true});

                      }


                    });



              }





            }



          }, (reason => {
            console.log(reason);
          }));

        //}






      }


    });


  }

  async getVersionInfo(){
    const versionInfo = await Pro.deploy.getCurrentVersion();
    console.log(versionInfo);
  }

  async checkChannel() {
    try {
      const res = await Pro.deploy.getConfiguration();
      console.log(res);

    } catch (err) {

    }
  }

  async performManualUpdate() {

    /*
      Here we are going through each manual step of the update process:
      Check, Download, Extract, and Redirect.

      Ex: Check, Download, Extract when a user logs into your app,
        but Redirect when they logout for an app that is always running
        but used with multiple users (like at a doctors office).
    */

    try {
      const update = await Pro.deploy.checkForUpdate();

      await Pro.deploy.downloadUpdate((progress) => {this.progressBar = progress;});
      await Pro.deploy.extractUpdate();
      await Pro.deploy.reloadApp();

      if (update.available){
        alert("MAJ Effectué");
      }
      else{
      }




    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:
      alert(JSON.stringify(err));

      // Pro.monitoring.exception(err);
    }

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page == "enquetePoi"){
      this.nav.setRoot(ListeParcellePage);

    }

  }

}
