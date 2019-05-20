import {Component, ElementRef, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { loadModules } from 'esri-loader';
import { Geolocation } from '@ionic-native/geolocation';
import {HttpClient} from "@angular/common/http";


/**
 * Generated class for the MapLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-location',
  templateUrl: 'map-location.html',
})
export class MapLocationPage {

  @ViewChild('map') mapEl: ElementRef;
  public currentLong = 0;
  public currentLat = 0;
  public erreur = 0;

  public static graphicActuel = null;
  public static popedGraphicActuel = null;

  public listeCoucheTitreDA = [];


  constructor(public navCtrl: NavController,public events: Events, public httpClient: HttpClient, public navParams: NavParams,public platform: Platform, private geolocation: Geolocation) {
    this.getGeo();


    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      try{

        this.erreur = data.coords.accuracy;
        this.currentLong=data.coords.longitude;
        this.currentLat=data.coords.latitude;

      }
      catch (exception)
      {

      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapLocationPage');
  }

  async  getGeo() {

    // Reference: https://ionicframework.com/docs/api/platform/Platform/#ready
    await this.platform.ready();


    // Load the ArcGIS API for JavaScript modules
    const [ WMSLayer, Color, geometryJsonUtils, Map, MapView,Locate, Graphic,SimpleFillSymbol,SimpleLineSymbol
    ]:any = await loadModules([
      'esri/layers/WMSLayer',
      'esri/Color',
      'esri/geometry/support/jsonUtils',
      'esri/Map',
      'esri/views/MapView',
      'esri/widgets/Locate',
      "esri/Graphic",

      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol"
    ])
      .catch(err => {
        console.error("ArcGIS: ", err);
      });

    console.log("Starting up ArcGIS map");

    let map = new Map({
      basemap: 'hybrid'
    });

    let mapView = new MapView({
      // create the map view at the DOM element in this component
      container: this.mapEl.nativeElement,
      //center: [this.currentLong, this.currentLat],
      //center: [-6.866699159143479, 33.96367577334164],
      center: [-5.14814459079014, 33.8096224158927],
      zoom: 15
    });

    let wmsLayer = new WMSLayer('https://mapping-cloud.com/geoserver/DAR/wms',{
      visibleLayers: ['RA_Ayants droits']
  });

    map.layers.add(wmsLayer);

    mapView.map = map;


    //ajout de la couche des titres DA
    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select%20%20id,collectivi,ordre," + '"vocation p"' + ",superficie,%20St_astext(shape)%20as%20shape%20" +
      "from%20occupirr").subscribe( data => {

        let coucheActuel = (data as any).features;

        let symobologiePolygon =  new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
          new Color([255,255,255]),0.5), new Color([155,255,100,0.10]));

        for(let i = 0; i< coucheActuel.length;i++){

          let jsontext = this.polygonJsonToTerraformer(coucheActuel[i].shape);
          /*

          let graphicTemp = new Graphic(
            geometryJsonUtils.fromJSON( {"rings":jsontext} )


            ,   symobologiePolygon  );

          graphicTemp.attributes = {
            Nom: "ffrg",
            Prenom: "ffwwwwr",

          };

          graphicTemp.popupTemplate = {
            title: "{Nom} ",
            content: "<p>As of 2015, <b>{Nom}%</b> of the" +
              " population in this zip code is married.</p>" +
              "<ul><li>{Nom} people are married</li>" +
              "<li>{Nom} have never married</li>" +
              "<li>{Prenom} are divorced</li><ul>"

          };

          */


          let pointGraphic = new Graphic({
            geometry: geometryJsonUtils.fromJSON( {"rings":jsontext} ),
            symbol: symobologiePolygon
            ,
            attributes: {
              Proprietaire: (coucheActuel[i] as any).collectivi,
              Superficie: (coucheActuel[i] as any).superficie,
              Ordre: (coucheActuel[i] as any).ordre,
              Contenance: (coucheActuel[i] as any)["vocation p"]
            },
            popupTemplate: {
              title: "<h3>{Proprietaire}</h3>" +
                "<p>Superficie : {Superficie}</p>" +
                "<p>Ordre : {Ordre}</p>" +
                "<p>Contenance : {Contenance}</p>"
              /*
              ,
              content:
                "<p>Superficie : {Superficie}</p>" +
                "<p>Contenance : {Contenance}</p>"

              */

            }


          });




          mapView.graphics.add( pointGraphic );


          /*
          console.log((Terraformer as any).WKT.parse('LINESTRING (30 10, 10 30, 40 40)'));
          console.log((Terraformer as any).WKT.parse(this.listeCoucheTitreDA[i].shape));

          (Terraformer as any).ArcGIS.convert({
            type:"polygon",


          })
          */
        }

    });

    //ajout de la couche des titres DA
    this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
      "select%20%20id,%20St_astext(shape)%20as%20shape%20" +
      "from%20titredademo").subscribe( data => {

      let coucheActuel = (data as any).features;

      let symobologiePolygon =  new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255,255,0]),1),
        new Color([155,255,100,0]));

      for(let i = 0; i< coucheActuel.length;i++){

        let jsontext = this.polygonJsonToTerraformer(coucheActuel[i].shape);



        let pointGraphic = new Graphic({
          geometry: geometryJsonUtils.fromJSON( {"rings":jsontext} ),
          symbol: symobologiePolygon



        });




        mapView.graphics.add( pointGraphic );


        /*
        console.log((Terraformer as any).WKT.parse('LINESTRING (30 10, 10 30, 40 40)'));
        console.log((Terraformer as any).WKT.parse(this.listeCoucheTitreDA[i].shape));

        (Terraformer as any).ArcGIS.convert({
          type:"polygon",


        })
        */
      }

    });







    /*
    if(this.laureatsList && this.laureatsList.length){

      for(let i=0;i<this.laureatsList.length;i++) {


        if (this.laureatsList[i] && this.laureatsList[i].long && this.laureatsList[i].lat) {


          let pointGraphic = new Graphic({
            geometry: {
              type: "point", // autocasts as new Point()
              longitude: Number(this.laureatsList[i].long),
              latitude: Number(this.laureatsList[i].lat)
            },
            symbol: {
              type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
              color: [255, 0, 255],
              outline: { // autocasts as new SimpleLineSymbol()
                color: [255, 255, 255],
                width: 1
              }
            },
            attributes: {
              Nom: this.laureatsList[i].nom,
              Prenom: this.laureatsList[i].prenom,
              Organisme: this.laureatsList[i].nomorganisme,
              Filiere: this.laureatsList[i].filiere,
            },
            popupTemplate: {  // autocasts as new PopupTemplate()
              title: "{Nom} {Prenom}",
              content: [{
                type: "fields",
                fieldInfos: [{
                  fieldName: "Nom"
                }, {
                  fieldName: "Prenom"
                }, {
                  fieldName: "Organisme"
                }, {
                  fieldName: "Filiere"
                }]
              }]
            }


          });

          mapView.graphics.add(pointGraphic);


        }//fin if
      }

    }

    */


    let symbol = {
      type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
      color: [255, 0, 255],
      outline: { // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 1
      }
    };


    mapView.on("click", function addElementToGraphic(evt){
      console.log(evt);
      console.log(mapView.graphics);

      if(MapLocationPage.graphicActuel){
        mapView.graphics.remove(MapLocationPage.graphicActuel);
      }

      let graphicActuel = new Graphic(evt.mapPoint, symbol);

      MapLocationPage.graphicActuel = graphicActuel;
      mapView.graphics.add(graphicActuel);
      console.log("X: " + evt.mapPoint.longitude.toString() + ", <br>Y: " + evt.mapPoint.latitude.toString());
    });

    /*
    function addToMap(evt) {
      var symbol;
      mapView.showZoomSlider();
      switch (evt.geometry.type) {
        case "point":
        case "multipoint":
          symbol = new SimpleMarkerSymbol();
          break;
        case "polyline":
          symbol = new SimpleLineSymbol();
          break;
        default:
          symbol = new SimpleFillSymbol();
          break;
      }

      var graphic = new Graphic(evt.geometry, symbol);
      map.graphics.add(graphic);

    }
    */


    let locateBtn = new Locate({
      view: mapView
    });

    // Add the locate widget to the top left corner of the view
    mapView.ui.add(locateBtn, {
      position: "top-left"
    });




  }


  popPosition() {
    MapLocationPage.popedGraphicActuel = MapLocationPage.graphicActuel;
    this.events.publish('graphicActuel', MapLocationPage.popedGraphicActuel);
    this.navCtrl.pop();
  }

  polygonJsonToTerraformer(geoJsonPolygon){


    let polygonAdapte = geoJsonPolygon.substring(15,geoJsonPolygon.length-3);



    let polygonAdapteTableOutput = [];

    if(polygonAdapte.indexOf("),(") < 0 ){

      for(let k= 0 ; k < polygonAdapte.split(")),((").length;k++){

        let polygonAdapteTable = polygonAdapte.split(")),((")[k].split(",");
        for(let i= 0 ; i<polygonAdapteTable.length;i++){
          polygonAdapteTable[i]=polygonAdapteTable[i].split(" ");

          for(let j= 0 ; j<polygonAdapteTable[i].length;j++){
            polygonAdapteTable[i][j]=Number(polygonAdapteTable[i][j]);
          }

        }

        polygonAdapteTableOutput.push(polygonAdapteTable);




      }

    }









    console.log(polygonAdapteTableOutput);
    return polygonAdapteTableOutput;

  }

}
