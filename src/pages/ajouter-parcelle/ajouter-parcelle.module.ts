import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterParcellePage } from './ajouter-parcelle';

@NgModule({
  declarations: [
    AjouterParcellePage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterParcellePage),
  ],
})
export class AjouterParcellePageModule {}
