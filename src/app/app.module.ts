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

import { IonicStorageModule } from '@ionic/storage';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import {PostMappingToolsPage} from "../pages/post-mapping-tools/post-mapping-tools";





// @ts-ignore
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ListeParcellePage,
    AjouterParcellePage,
    MapLocationPage,
    PostMappingToolsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListeParcellePage,
    AjouterParcellePage,
    MapLocationPage,
    PostMappingToolsPage
  ],
  providers: [
    Base64ToGallery,
    StatusBar,
    SplashScreen,
    Camera,
    Device,
    Geolocation,
    StockageProvider,
    CameraProvider,
    FilePath,
    PhotoViewer,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
