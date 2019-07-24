import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {CameraProvider} from "../../providers/camera/camera";
import {AjouterParcellePage} from "../ajouter-parcelle/ajouter-parcelle";

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

  public listeObjetActuelle = [];
  private listeObjetActuelleFiltre: any[];
  public listeValeurFiltre = ["douar","id","adresse","nom_douar"];
  private chargement = false;




  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public navParams: NavParams, public httpClient : HttpClient,public toastCtrl : ToastController,  public cameraProvider : CameraProvider) {

    this.refresh();


  }

  refresh(){


    this.chargement = true;
    this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select parcelles.id  , " +
      "parcelles.consistance  , " +
      "parcelles.plusvalues  , " +
      "parcelles.constructions  , " +
      "parcelles.adresse  , " +
      "parcelles.coldenaib  , " +
      "substring(photocinrecto.photo for 2) as presencephotocin, " +
      "substring(photoparcelle.photo for 2) as presencephotoparcelle," +
      "centroide.shape as presenceshape " +
      "" +
      "from parcelles " +
      "left join (select *, photo as photocinrecto " +
      "   from photoparcelles as PP1 " +
      "   where typephoto = 'photocinrecto' " +
      "   and id = (select max(id) from photoparcelles " +
      "   where idparcelle = PP1.idparcelle and typephoto = 'photocinrecto' ) " +
      "  )" +
      "as photocinrecto on photocinrecto.idparcelle = parcelles.id " +
      "left join (select *, photo as photoparcelle " +
      "   from photoparcelles as PP2 " +
      "   where typephoto = 'photoparcelle' " +
      "   and id = (select max(id) from photoparcelles " +
      "   where idparcelle = PP2.idparcelle and typephoto = 'photoparcelle' ) " +
      "  ) " +
      "as photoparcelle on photoparcelle.idparcelle = parcelles.id " +
      "left join (select * " +
      "   from centroides as CO " +
      "   where id = (select max(id) from centroides " +
      "   where idparcelle = CO.idparcelle ) " +
      "  )" +
      "as centroide on centroide.idparcelle = parcelles.id " +
      "order by id desc " +
      "" +
      "")
      .subscribe( data =>{


        this.listeObjetActuelle = (data as any).features;
        this.listeObjetActuelleFiltre = this.listeObjetActuelle;

        this.chargement = false;



      });

  }

  ionViewDidEnter() {
    this.refresh();
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



  itemTapped($event: MouseEvent, item: any) {

    this.navCtrl.push(AjouterParcellePage, {
      informationsActuelles: item,
      action:"modifier"
    });

  }

  ajouterItem() {

    this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "insert into parcelles(consistance,plusvalues,constructions,adresse,coldenaib) " +
      "values ("+
      "" + this.adaptValueQuery( null    , "text"  )   + "," +
      "" + this.adaptValueQuery( null    , "text"  )  + "," +
      "" + this.adaptValueQuery( null    , "text"  )    + "," +
      "" + this.adaptValueQuery( null    , "text"  )   + "," +
      "" + this.adaptValueQuery( null    , "text"  )   + "" +
      ")"
    )
      .subscribe( data =>{

      },err => {

        let messageGetToast = "Informations attributaires enregistrées";

        if(err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")  ){

          this.refresh();
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

  detailItemTapped($event, item) {

    event.stopPropagation();

    // @ts-ignore
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      buttons: [{
        text: "Supprimer",
        role: 'destructive',
        icon: 'trash',
        handler: () => {


          console.log('Delete clicked');

          this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "DELETE FROM public.parcelles WHERE id = " + item.id)
            .subscribe(data => {

            },error1 => {

              this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                "DELETE FROM public.centroides WHERE idparcelle = " + item.id)
                .subscribe(data => {

                },error1 => {

                  this.refresh();

                });

            });


        }
      }]
    });
    actionSheet.present();



  }

  getItems(ev) {
    // Reset items back to all of the items
    this.listeObjetActuelleFiltre = this.listeObjetActuelle;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listeObjetActuelleFiltre = this.listeObjetActuelleFiltre.filter((item) => {
        let requeteFiltre = "";
        for(let i = 0 ; i < this.listeValeurFiltre.length ; i++){
          if(item[this.listeValeurFiltre[i]] != undefined){
            requeteFiltre = requeteFiltre + " " + item[this.listeValeurFiltre[i]];
          }
        }
        console.log(requeteFiltre);
        return ( requeteFiltre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  total(tableau){

    if(tableau){
      return tableau.length;

    }


  }

}
