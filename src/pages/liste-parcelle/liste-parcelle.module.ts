import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeParcellePage } from './liste-parcelle';

@NgModule({
  declarations: [
    ListeParcellePage,
  ],
  imports: [
    IonicPageModule.forChild(ListeParcellePage),
  ],
})
export class ListeParcellePageModule {}
