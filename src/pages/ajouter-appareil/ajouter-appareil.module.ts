import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterAppareilPage } from './ajouter-appareil';

@NgModule({
  declarations: [
    AjouterAppareilPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterAppareilPage),
  ],
})
export class AjouterAppareilPageModule {}
