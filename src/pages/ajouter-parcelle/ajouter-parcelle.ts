import { Component } from '@angular/core';
import {ActionSheetController, Events, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {CameraProvider} from "../../providers/camera/camera";
import {MapLocationPage} from "../map-location/map-location";
import * as wellknow from 'wellknown';
import * as proj4 from 'proj4';


/**
 * Generated class for the AjouterParcellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-parcelle',
  templateUrl: 'ajouter-parcelle.html',
})
export class AjouterParcellePage {

  public objetActuel = {};

  public listeChoixPlusvalues = [];
  public listeChoixConstructions = [];
  public listeChoixConsistance = [];

  public listeCentroides = [];
  public x ;
  public y ;


  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public httpClient : HttpClient,public toastCtrl : ToastController,  public cameraProvider : CameraProvider,public events: Events) {


    this.objetActuel =  this.navParams.data.informationsActuelles;

    this.refreshCentroides();


    this.events.subscribe('graphicActuel', graphicActuel => {
      console.log(graphicActuel);

      if (graphicActuel) {
        this.x = (graphicActuel as any).geometry.longitude;
        this.y = (graphicActuel as any).geometry.latitude;
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
          "INSERT INTO public.centroides( " +
          "id,shape,idparcelle) " +
          "VALUES ((select max(id) from centroides)+1," +
          "ST_Multi( ST_GeomFromText('POINT(" + this.x + " " + this.y + ")', 4326))," +
          "" + this.navParams.data.informationsActuelles.id + ");")
          .subscribe(data => {

          },error1 => {
            this.refreshCentroides();

          });
      }
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

        delete tableStatistiques[""];


        let tableIndexStatSorted = [];
        for(let pp in tableStatistiques) {
          tableIndexStatSorted.push([pp,tableStatistiques[pp]]);
        }

        tableIndexStatSorted.sort(function(a,b){
          return -a[1] + b[1];;
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

        delete tableStatistiques[""];


        let tableIndexStatSorted = [];
        for(let pp in tableStatistiques) {
          tableIndexStatSorted.push([pp,tableStatistiques[pp]]);
        }

        tableIndexStatSorted.sort(function(a,b){
          return -a[1] + b[1];
        });

        this.listeChoixConstructions = tableIndexStatSorted;

        console.log(tableIndexStatSorted);

      });

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

        delete tableStatistiques[""];

        let tableIndexStatSorted = [];
        for(let pp in tableStatistiques) {
          tableIndexStatSorted.push([pp,tableStatistiques[pp]]);
        }

        tableIndexStatSorted.sort(function(a,b){
          return -a[1] + b[1];
        });

        this.listeChoixConsistance = tableIndexStatSorted;

        console.log(tableIndexStatSorted);

      });

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select photo from photoparcelles " +
      "where idparcelle = " + this.navParams.data.informationsActuelles.id + " " +
      "and typephoto = 'photocinrecto' " +
      "order by id desc " +
      "limit 1"
    )
      .subscribe( data =>{

        try{
          (this.objetActuel as any).photocinrecto = (data as any).features[0].photo;
        }catch(e){
          console.log(e);
        }

      });

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select photo from photoparcelles " +
      "where idparcelle = " + this.navParams.data.informationsActuelles.id + " " +
      "and typephoto = 'photocinverso' " +
      "order by id desc " +
      "limit 1"
    )
      .subscribe( data =>{

        try{
          (this.objetActuel as any).photocinverso = (data as any).features[0].photo;
        }catch(e){
          console.log(e);
        }

      });

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select photo from photoparcelles " +
      "where idparcelle = " + this.navParams.data.informationsActuelles.id + " " +
      "and typephoto = 'photoparcelle' " +
      "order by id desc " +
      "limit 1"
    )
      .subscribe( data =>{

        try{
          (this.objetActuel as any).photoparcelle = (data as any).features[0].photo;
        }catch(e){
          console.log(e);
        }


      });

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select photo from photoparcelles " +
      "where idparcelle = " + this.navParams.data.informationsActuelles.id + " " +
      "and typephoto = 'photocroquis' " +
      "order by id desc " +
      "limit 1"
    )
      .subscribe( data =>{

        try{
          (this.objetActuel as any).photocroquis = (data as any).features[0].photo;
        }catch(e){
          console.log(e);
        }

      });




    //ajout de la couche des titres DA








  }

  refreshCentroides(){

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select id, St_astext(shape) as shape " +
      "from centroides " +
      "where idparcelle = " + this.navParams.data.informationsActuelles.id + " "
    )
      .subscribe( data => {

        let coucheActuel = (data as any).features;
        this.listeCentroides = [];

        for(let i = 0; i< coucheActuel.length;i++) {


          let jsontext = wellknow.parse(coucheActuel[i].shape).coordinates[0];

          console.log(proj4);
          let pointNordMaroc = proj4.default("+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=-5.4 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ",
            jsontext);


          this.listeCentroides.push({
            id: (coucheActuel[i] as any).id,
            x:jsontext[0],
            y:jsontext[1],
            xnordmaroc:pointNordMaroc[0],
            ynordmaroc:pointNordMaroc[1]
          })


        }

      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeParcellePage');
    this.refreshCentroides();

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

  enregistrerInformationsAttributaires() {

    if((this.objetActuel as any).consistance == undefined){

    }

    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "update parcelles set " +
      " consistance = " + this.adaptValueQuery( (this.objetActuel as any).consistance       , "text"  )  +
      ", plusvalues = " + this.adaptValueQuery( (this.objetActuel as any).plusvalues       , "text"  )  +
      ", constructions = " + this.adaptValueQuery( (this.objetActuel as any).constructions          , "text"  )   +
      ", adresse = " + this.adaptValueQuery( (this.objetActuel as any).adresse          , "text"  )   +
      ", coldenaib =  " + this.adaptValueQuery( (this.objetActuel as any).coldenaib        , "text"  )   +
      " where id = " + (this.objetActuel as any).id
    )
      .subscribe( data =>{

      },err => {

        let messageGetToast = "Informations attributaires enregistrées";

        if(err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")  ){

          let toast = this.toastCtrl.create({
            message: messageGetToast,
            duration: 1000,
            position: 'top',
            cssClass: "toast-success"
          });

          toast.present();



        }
        else{
          messageGetToast = "Informations attributaires non enregistrées";

          let toast = this.toastCtrl.create({
            message: messageGetToast,
            duration: 1000,
            position: 'top',
            cssClass: "toast-echec"
          });

          toast.present();

        }

      });

  }


  adaptValueQuery(value,type) {
    let retour = null;
    if (!value) {
      if (type == "text") {
        retour = "''";
      } else {
        retour = "";
      }
    }
    else {
      if (type == "text") {
        retour = "'" + value + "'";
      } else {
        retour = value;
      }

    }
    return retour;
  }

  async photoChooser(objetActuel , photoActuelle, width,heigth,quality ) {



    try{
      await this.cameraProvider.photoChooser(objetActuel,photoActuelle,width,heigth,quality,this.objetActuel);

    }
    catch(e){
      console.log(e);
    }

  }

  recupererGraphic() {

    this.navCtrl.push(MapLocationPage,{
      action: "getLocation",
      x: (this.objetActuel as any).x,
      y: (this.objetActuel as any).y});
  }




  detailItemTapped($event, item) {

    event.stopPropagation();

    // @ts-ignore
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      buttons: [{
        text: "Supprimer",
        role: 'destructive',
        icon: 'trash',
        mode:"ios",
        translucent:true,
        handler: () => {


          console.log('Delete clicked');

          this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "DELETE FROM public.centroides WHERE id=" + item.id)
            .subscribe(data => {

            },error1 => {

              this.refreshCentroides();

            });


        }
      }]
    });
    actionSheet.present();



  }
}
