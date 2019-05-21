import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {Pro} from "@ionic/pro";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  public progressBar = 0;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
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
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
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

}
