import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Events} from "ionic-angular";
/*
  Generated class for the StockageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StockageProvider {

  public data: any;

  constructor(public storage: Storage,public events: Events) {


  }


  // on suppose que la valeur du key est de type Objet....
  // ici on ajoute un attribut nomé "id" contenant la valeur "value"
  updatePushValue(key: string, id:any, value: any) {



    this.storage.get(key).then((val) => {


      console.log(1);
      if(!this.data){

        this.data = {};
      }

      console.log(1);

      this.data[key] = val;

      console.log(1);


      if(this.data[key] == undefined || this.data[key] == null){
        this.data[key] = {};
      }

      console.log(1);



      console.log("typeof", typeof this.data[key]);

      console.log(7);


      if(typeof this.data[key] == "object"){

        console.log(8);


        this.data[key][id] = value;


        console.log(9);

        this.setValue(key,this.data[key]);
        console.log(10);



      }else{
        console.log("Il ne sagit pas d'une valeur de type Object");
      }

    }).catch((error) => {
      console.log('get error for ' + key + '', JSON.stringify(error));
    });




  }

  // set a key/value
  setValue(key: string, value: any) {

    console.log(11);
    this.storage.set(key, value).then((response) => {

      console.log(12);


      this.events.publish('refreshphotos', {});


      //get Value Saved in key
      this.getValue(key);

    }).catch((error) => {
      console.log('set error for ' + key + ' ', error);
    });

  }

  // get a key/value pair
  getValue(key: string) {
    this.storage.get(key).then((val) => {
      this.data[key] = "";
      this.data[key] = val;
    }).catch((error) => {
      console.log('get error for ' + key + '', error);
    });
  }

  // Remove a key/value pair
  removeKey(key: string) {
    this.storage.remove(key).then(() => {
      console.log('removed ' + key);
      this.data[key] = "";
    }).catch((error) => {
      console.log('removed error for ' + key + '', error);
    });
  }

  traverseKeys() {
    this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
      console.log("key " + key);
      console.log("iterationNumber " + iterationNumber);
      console.log("value " + JSON.stringify(value));
    });
  }

  // Traverse key/value pairs
  listKeys() {
    this.storage.keys().then((k) => {
      console.table(k)
    });
  }




}
