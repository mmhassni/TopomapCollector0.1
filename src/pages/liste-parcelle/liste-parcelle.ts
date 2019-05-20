import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the ListeParcellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-parcelle',
  templateUrl: 'liste-parcelle.html',
})
export class ListeParcellePage {

  public objetActuel = {};

  public listeChoixPlusvalues = [];
  public listeChoixConstructions = [];
  public listeChoixConsistance = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient : HttpClient) {

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select consistance from parcelles")
      .subscribe( data =>{



        let tableStatistiques = {};
        data = (data as any).features;
        for(let i=0; i < (data as any).length ; i++){

          try{
            let itemTemp = (data as any)[i]["consistance"].split("+");

            for(let j=0; j < itemTemp.length ; j++){
              if(tableStatistiques[itemTemp[j]] == undefined){
                tableStatistiques[itemTemp[j]] = 1;
              }else{
                tableStatistiques[itemTemp[j]] = tableStatistiques[itemTemp[j]]+1;

              }
            }
          }
          catch(e){
          }

        }

        let tableIndexStatSorted = [];
        for(let pp in tableStatistiques) {
          tableIndexStatSorted.push([pp,tableStatistiques[pp]]);
        }

        tableIndexStatSorted.sort(function(obj){
          return obj[1];
        });

        this.listeChoixConsistance = tableIndexStatSorted;

        console.log(tableIndexStatSorted);

      });

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select plusvalues from parcelles")
      .subscribe( data =>{

        let tableStatistiques = {};
        data = (data as any).features;
        for(let i=0; i < (data as any).length ; i++){
          try {
            let itemTemp = (data as any)[i]["plusvalues"].split("+");

            for (let j = 0; j < itemTemp.length; j++) {
              if (tableStatistiques[itemTemp[j]] == undefined) {
                tableStatistiques[itemTemp[j]] = 1;
              } else {
                tableStatistiques[itemTemp[j]] = tableStatistiques[itemTemp[j]] + 1;

              }
            }
          }
          catch(e){

          }

        }

        let tableIndexStatSorted = [];
        for(let pp in tableStatistiques) {
          tableIndexStatSorted.push([pp,tableStatistiques[pp]]);
        }

        tableIndexStatSorted.sort(function(obj){
          return obj[1];
        });

        this.listeChoixPlusvalues = tableIndexStatSorted;

        console.log(tableIndexStatSorted);

      });

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select constructions from parcelles")
      .subscribe( data =>{

        let tableStatistiques = {};
        data = (data as any).features;
        for(let i=0; i < (data as any).length ; i++){

          try{
            let itemTemp = (data as any)[i]["constructions"].split("+");

            for(let j=0; j < itemTemp.length ; j++){
              if(tableStatistiques[itemTemp[j]] == undefined){
                tableStatistiques[itemTemp[j]] = 1;
              }else{
                tableStatistiques[itemTemp[j]] = tableStatistiques[itemTemp[j]]+1;

              }
            }

          }catch(e){

          }


        }

        let tableIndexStatSorted = [];
        for(let pp in tableStatistiques) {
          tableIndexStatSorted.push([pp,tableStatistiques[pp]]);
        }

        tableIndexStatSorted.sort(function(obj){
          return obj[1];
        });

        this.listeChoixConstructions = tableIndexStatSorted;

        console.log(tableIndexStatSorted);

      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeParcellePage');
  }

  onConstructionsSelectChange($event) {

    if($event) {
      let value = "";
      if (typeof $event == "object") {
        for (let i = 0; i < $event.length; i++) {
          if (i == 0) {
            value = value + $event[i];
          } else {
            value = value + "+" + $event[i];
          }
        }
      } else {
        value = $event;
      }

      this.objetActuel["constructions"] = value;
    }


  }

  onConstructionsInuptChange($event) {

    this.objetActuel["constructionsionselect"] = "";

  }

  onPlusvaluesSelectChange($event) {

    if($event) {
      let value = "";
      if (typeof $event == "object") {
        for (let i = 0; i < $event.length; i++) {
          if (i == 0) {
            value = value + $event[i];
          } else {
            value = value + "+" + $event[i];
          }
        }
      } else {
        value = $event;
      }

      this.objetActuel["plusvalues"] = value;
    }




  }

  onPlusvaluesInuptChange($event) {

    this.objetActuel["plusvaluesionselect"] = "";

  }

  onConsistanceSelectChange($event) {

    if($event){
      let value = "";
      if(typeof $event == "object"){
        for(let i = 0; i < $event.length ; i++){
          if(i == 0){
            value = value + $event[i];
          }
          else{
            value = value + "+" + $event[i];
          }
        }
      }else{
        value = $event;
      }

      this.objetActuel["consistance"] = value;


    }
    
  }

  onConsistanceInuptChange($event: {}) {

    this.objetActuel["consistanceionselect"] = "";


  }
}
