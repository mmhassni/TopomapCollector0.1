import { Component } from '@angular/core';
import {ListeParcellePage} from "../liste-parcelle/liste-parcelle";
import {MapLocationPage} from "../map-location/map-location";
import {PostMappingToolsPage} from "../post-mapping-tools/post-mapping-tools";
import {SaisieManuelleCoordonneesPage} from "../saisie-manuelle-coordonnees/saisie-manuelle-coordonnees";
//import {PostgisScriptPage} from "../postgis-script/postgis-script";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = PostgisScriptPage;
  tab1Root = ListeParcellePage;
  tab2Root = MapLocationPage;
  tab3Root = PostMappingToolsPage;

  constructor() {

  }
}
