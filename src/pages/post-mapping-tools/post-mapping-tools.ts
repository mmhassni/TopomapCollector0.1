import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import * as wellknow from 'wellknown';
import * as proj4 from 'proj4';



/**
 * Generated class for the PostMappingToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-mapping-tools',
  templateUrl: 'post-mapping-tools.html',
})
export class PostMappingToolsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {


    this.geojsonTojsmappingobject("MULTIPOLYGON(((-5.135822840350167 33.809652898797836,-5.13589123852563 33.80993469332251,-5.135766864363997 33.8099418257193,-5.1357298093939265 33.80979862265758,-5.135703261834404 33.80964633303581,-5.135822840350167 33.809652898797836,-5.135822840350167 33.809652898797836)))");


    let formData = new FormData();

    formData.append("fonction", "loadObjetsOrganisme");
    formData.append("id_metier", "8");
    formData.append("offset", "0");
    formData.append("cat", "DAR-BET");
    formData.append("geometry", "GEOM_POLYGON");
    formData.append("categorie_user", "DAR-BET");
    formData.append("approuve", "");
    formData.append("province", "");
    formData.append("filter", "false");
    formData.append("filterPartage", "0");

    formData.append("id_organisme", "54");






    this.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php",
      formData
    ).subscribe( data => {
      console.log(data);
      let nom;
      let idmapping;
      let numordre;



      for(let i = 0 ; i < (data as any).length; i++){

        nom = data[i][1];
        idmapping = data[i][0];
        numordre = data[i][28];

        //if(1230232 == idmapping){



        setTimeout(this.fonctionAuxiliaire(idmapping,numordre,i) , 1000);
        //}







      }





    });






  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostMappingToolsPage');
  }


  avancementSociete() {
    let formData = new FormData();

    formData.append("fonction", "loadObjetsOrganisme");
    formData.append("id_metier", "8");
    formData.append("offset", "0");
    formData.append("cat", "DAR-BET");
    formData.append("geometry", "GEOM_POLYGON");
    formData.append("categorie_user", "DAR-BET");
    formData.append("approuve", "");
    formData.append("province", "");
    formData.append("filter", "false");
    formData.append("filterPartage", "0");


    for (let i = 0; i < 200; i++) {

      formData.append("id_organisme", i.toString());


      this.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php",
        formData
      ).subscribe(data => {
        //console.log(data);
        let nom;
        let idmapping;
        let numordre;

        if (data && data[0]) {

          console.log("nom : " + data[0][9]);
          console.log("societe : " + data[0][10]);
          console.log("zone : " + data[0][2]);
          console.log("nombre de parcelle : " + (data as any).length);
          console.log("******************");
          console.log("******************");
          console.log("******************");
          console.log("******************");

        }


      });

    }


  }

  geojsonTojsmappingobject(geojson){


    let stringretour = "";

    let jsobject = wellknow.parse(geojson).coordinates[0];

    console.log(jsobject);


    for(let partie = 0 ;  partie < jsobject.length; partie++){

      for(let i = 0; i < jsobject[partie].length; i++){

        console.log(jsobject[partie][i]);

        let pointNordMaroc = proj4.default("+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=-5.4 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ",
          jsobject[partie][i]);

        console.log(pointNordMaroc);


        stringretour = stringretour + "B" + (i+1).toString();
        stringretour = stringretour + ";";
        stringretour = stringretour + pointNordMaroc[0];
        stringretour = stringretour + ";";
        stringretour = stringretour + pointNordMaroc[1];
        stringretour = stringretour + "*";

      }

      console.log(stringretour);
      return stringretour;

    }



  }

  fonctionAuxiliaire(idmapping,numordre,i){

    this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/SELECT * FROM public.parcellesuperficie where idparcelle = '" + numordre + "'")
      .subscribe( data0 => {

        let stringretour = "";

        let jsobject = wellknow.parse(data0["features"][0]["shape"]).coordinates;

        console.log(jsobject);


        for(let partie = 0 ;  partie < jsobject.length; partie++){

          for(let j = 0; j < jsobject[partie][0].length; j++){

            console.log(jsobject[partie][0][j]);

            let pointNordMaroc = proj4.default("+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=-5.4 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ",
              jsobject[partie][0][j]);

            console.log(pointNordMaroc);


            stringretour = stringretour + "B" + (j+1).toString();
            stringretour = stringretour + ";";
            stringretour = stringretour + pointNordMaroc[0];
            stringretour = stringretour + ";";
            stringretour = stringretour + pointNordMaroc[1];
            stringretour = stringretour + "*";

          }

          console.log(stringretour);

          let formData2 = new FormData();

          formData2.append("fonction", "updateObjetGeom");
          formData2.append("id_objet", idmapping.toString());
          formData2.append("wkt", data0["features"][0]["shape"]);
          formData2.append("id_organisme", "54");
          formData2.append("nom_objet", "nom");
          formData2.append("province", "");
          formData2.append("region", "FES - MEKNES");

          this.fonctionAuxiliaire2(idmapping,stringretour,formData2,partie)

        }

      });

  }

  fonctionAuxiliaire2(idmapping,stringretour,formData2,partie){
    this.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php",
      formData2
    ).subscribe( data2 => {

        console.log(data2);



      },
      err =>{

        let formData3 = new FormData();

        formData3.append("id_objet", idmapping.toString());
        formData3.append("nom", "P" + (partie+1).toString());
        formData3.append("chaine", stringretour );
        formData3.append("id_polygon", "-1");



        this.httpClient.post("http://mapping-cloud.com/basic/web/index.php?r=objet/polygonpost",
          formData3
        ).subscribe( data3 => {

          console.log(data3);
        },err => {

        });



      });
  }

}
