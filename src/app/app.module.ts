import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StockageProvider } from '../providers/stockage/stockage';
import { CameraProvider } from '../providers/camera/camera';
import {FilePath} from "@ionic-native/file-path/ngx";
import {Device} from "@ionic-native/device";
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import {MapLocationPage} from "../pages/map-location/map-location";
import {AjouterParcellePage} from "../pages/ajouter-parcelle/ajouter-parcelle";
import {ListeParcellePage} from "../pages/liste-parcelle/liste-parcelle";






// @ts-ignore
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ListeParcellePage,
    AjouterParcellePage,
    MapLocationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListeParcellePage,
    AjouterParcellePage,
    MapLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Device,
    Geolocation,
    StockageProvider,
    CameraProvider,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
