webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_esri_loader__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_esri_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_wellknown__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_wellknown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_wellknown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the MapLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapLocationPage = /** @class */ (function () {
    function MapLocationPage(navCtrl, events, httpClient, navParams, platform, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.httpClient = httpClient;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        this.currentLong = 0;
        this.currentLat = 0;
        this.erreur = 0;
        this.listeCoucheTitreDA = [];
        this.action = "";
        if (this.navParams.data && this.navParams.data.action == "getLocation") {
            this.action = "getLocation";
            this.idparcelleactuelle = this.navParams.data.idparcelle;
        }
        this.getGeo();
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            try {
                _this.erreur = data.coords.accuracy;
                _this.currentLong = data.coords.longitude;
                _this.currentLat = data.coords.latitude;
            }
            catch (exception) {
            }
        });
    }
    MapLocationPage_1 = MapLocationPage;
    MapLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapLocationPage');
    };
    MapLocationPage.prototype.getGeo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Point, Color, geometryJsonUtils, Map, MapView, Locate, Graphic, SimpleFillSymbol, SimpleLineSymbol, WMSLayer, WMTSLayer, map, layerWMS, symbol, mapView, point, graphicActuel, locateBtn;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    // Reference: https://ionicframework.com/docs/api/platform/Platform/#ready
                    return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        // Reference: https://ionicframework.com/docs/api/platform/Platform/#ready
                        _b.sent();
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_2_esri_loader__["loadModules"])([
                                "esri/geometry/Point",
                                'esri/Color',
                                'esri/geometry/support/jsonUtils',
                                'esri/Map',
                                'esri/views/MapView',
                                'esri/widgets/Locate',
                                "esri/Graphic",
                                "esri/symbols/SimpleFillSymbol",
                                "esri/symbols/SimpleLineSymbol",
                                "esri/layers/WMSLayer",
                                "esri/layers/WMTSLayer"
                            ])
                                .catch(function (err) {
                                console.error("ArcGIS: ", err);
                            })];
                    case 2:
                        _a = _b.sent(), Point = _a[0], Color = _a[1], geometryJsonUtils = _a[2], Map = _a[3], MapView = _a[4], Locate = _a[5], Graphic = _a[6], SimpleFillSymbol = _a[7], SimpleLineSymbol = _a[8], WMSLayer = _a[9], WMTSLayer = _a[10];
                        map = new Map({
                            basemap: 'hybrid'
                        });
                        layerWMS = new WMSLayer({
                            url: "http://15.188.8.84:8080/geoserver/ows",
                            sublayers: [
                                {
                                    //title:"premerge1-low-quality",
                                    name: "cite:premerge12-low-quality"
                                }
                            ],
                            imageTransparency: true,
                            //spatialReferences:4326,
                            imageFormat: "image/jpeg",
                            imageMaxHeight: 256,
                            imageMaxWidth: 256,
                            minScale: 20000
                        });
                        map.layers.add(layerWMS);
                        symbol = {
                            type: "simple-marker",
                            color: [255, 0, 255],
                            outline: {
                                color: [255, 255, 255],
                                width: 1
                            }
                        };
                        if (this.navParams.data.x && this.navParams.data.y) {
                            mapView = new MapView({
                                // create the map view at the DOM element in this component
                                container: this.mapEl.nativeElement,
                                center: [this.navParams.data.x, this.navParams.data.y],
                                zoom: 16
                            });
                            mapView.map = map;
                            point = new Point({
                                longitude: this.navParams.data.x,
                                latitude: this.navParams.data.y
                            });
                            graphicActuel = new Graphic(point, symbol);
                            MapLocationPage_1.graphicActuel = graphicActuel;
                            mapView.graphics.add(graphicActuel);
                            mapView.goTo(point);
                        }
                        else {
                            mapView = new MapView({
                                // create the map view at the DOM element in this component
                                container: this.mapEl.nativeElement,
                                //center: [this.currentLong, this.currentLat],
                                center: [this.currentLong, this.currentLat],
                                zoom: 21
                            });
                            mapView.map = map;
                        }
                        //ajout de la couche des titres DA
                        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "select id, St_astext(shape) as shape " +
                            "from centroides " +
                            "where not shape is null and idparcelle >= 3000").subscribe(function (data) {
                            var coucheActuel = data.features;
                            var symbolPointCentroides = {
                                type: 'simple-marker',
                                size: 12,
                                color: [255, 255, 0],
                                outline: {
                                    color: [255, 255, 255],
                                    width: 0
                                }
                            };
                            for (var i = 0; i < coucheActuel.length; i++) {
                                var jsontext = __WEBPACK_IMPORTED_MODULE_5_wellknown__["parse"](coucheActuel[i].shape).coordinates[0];
                                var pointGraphic = new Graphic({
                                    geometry: {
                                        type: 'point',
                                        longitude: jsontext[0],
                                        latitude: jsontext[1]
                                    },
                                    symbol: symbolPointCentroides,
                                    attributes: {
                                        Proprietaire: coucheActuel[i].collectivi,
                                        Superficie: coucheActuel[i].superficie,
                                        Ordre: coucheActuel[i].ordre,
                                        Contenance: coucheActuel[i]["vocation p"]
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
                                mapView.graphics.add(pointGraphic);
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
                        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "select%20%20id,collectivi,ordre," + '"vocation p"' + ",superficie,%20St_astext(shape)%20as%20shape%20" +
                            "from%20occupirr  where id >= 1000").subscribe(function (data) {
                            var coucheActuel = data.features;
                            var symobologiePolygon = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255]), 0.5), new Color([155, 255, 100, 0.10]));
                            for (var i = 0; i < coucheActuel.length; i++) {
                                //let jsontext = this.polygonJsonToTerraformer(coucheActuel[i].shape);
                                var jsontext = __WEBPACK_IMPORTED_MODULE_5_wellknown__["parse"](coucheActuel[i].shape).coordinates[0];
                                var pointGraphic = new Graphic({
                                    geometry: geometryJsonUtils.fromJSON({ "rings": jsontext }),
                                    symbol: symobologiePolygon,
                                    attributes: {
                                        Proprietaire: coucheActuel[i].collectivi,
                                        Superficie: coucheActuel[i].superficie,
                                        Ordre: coucheActuel[i].ordre,
                                        Contenance: coucheActuel[i]["vocation p"]
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
                                mapView.graphics.add(pointGraphic);
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
                        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "select%20%20id,%20St_astext(shape)%20as%20shape%20" +
                            "from%20titredademo").subscribe(function (data) {
                            var coucheActuel = data.features;
                            var symobologiePolygon = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 0]), 1), new Color([155, 255, 100, 0]));
                            for (var i = 0; i < coucheActuel.length; i++) {
                                //let jsontext = this.polygonJsonToTerraformer(coucheActuel[i].shape);
                                var jsontext = __WEBPACK_IMPORTED_MODULE_5_wellknown__["parse"](coucheActuel[i].shape).coordinates[0];
                                console.log(JSON.stringify(__WEBPACK_IMPORTED_MODULE_5_wellknown__["parse"](coucheActuel[i].shape).coordinates));
                                console.log(__WEBPACK_IMPORTED_MODULE_5_wellknown__["parse"](coucheActuel[i].shape));
                                var pointGraphic = new Graphic({
                                    geometry: geometryJsonUtils.fromJSON({ "rings": jsontext }),
                                    symbol: symobologiePolygon
                                });
                                mapView.graphics.add(pointGraphic);
                            }
                        });
                        mapView.on("click", function addElementToGraphic(evt) {
                            console.log(evt);
                            console.log(mapView.graphics);
                            if (MapLocationPage_1.graphicActuel) {
                                mapView.graphics.remove(MapLocationPage_1.graphicActuel);
                            }
                            var graphicActuel = new Graphic(evt.mapPoint, symbol);
                            MapLocationPage_1.graphicActuel = graphicActuel;
                            mapView.graphics.add(graphicActuel);
                            console.log("X: " + evt.mapPoint.longitude.toString() + ", <br>Y: " + evt.mapPoint.latitude.toString());
                        });
                        locateBtn = new Locate({
                            view: mapView
                        });
                        // Add the locate widget to the top left corner of the view
                        mapView.ui.add(locateBtn, {
                            position: "top-left"
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MapLocationPage.prototype.popPosition = function () {
        MapLocationPage_1.graphicActuel["idparcelle"] = this.idparcelleactuelle;
        MapLocationPage_1.popedGraphicActuel = MapLocationPage_1.graphicActuel;
        this.events.publish('graphicActuel', MapLocationPage_1.popedGraphicActuel);
        this.navCtrl.pop();
    };
    MapLocationPage.graphicActuel = null;
    MapLocationPage.popedGraphicActuel = null;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapLocationPage.prototype, "mapEl", void 0);
    MapLocationPage = MapLocationPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-location',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/map-location/map-location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Précision : {{erreur.toFixed(2)}} m\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button color="secondary" (click)="getGeo()">\n        Rafraichir\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content height="100%" width="100%">\n  <!--\n   Add our map div here\n   -->\n  <div id="map" #map  >\n    <button [hidden]="action != \'getLocation\'" ion-fab large class="my_button" (click)="popPosition()"><ion-icon name="add"></ion-icon></button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/map-location/map-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapLocationPage);
    return MapLocationPage;
    var MapLocationPage_1;
}());

//# sourceMappingURL=map-location.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liste_parcelle_liste_parcelle__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_location_map_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_mapping_tools_post_mapping_tools__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {SaisieManuelleCoordonneesPage} from "../saisie-manuelle-coordonnees/saisie-manuelle-coordonnees";
//import {PostgisScriptPage} from "../postgis-script/postgis-script";
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        //tab1Root = PostgisScriptPage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__liste_parcelle_liste_parcelle__["a" /* ListeParcellePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__map_location_map_location__["a" /* MapLocationPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__post_mapping_tools_post_mapping_tools__["a" /* PostMappingToolsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Parcelles" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="map"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjouterAppareilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AjouterAppareilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjouterAppareilPage = /** @class */ (function () {
    function AjouterAppareilPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.nomAppareil = "";
    }
    AjouterAppareilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjouterAppareilPage');
    };
    AjouterAppareilPage.prototype.seConnecter = function () {
        if (this.nomAppareil != "") {
            this.storage.set("appareilId", this.nomAppareil);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    AjouterAppareilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajouter-appareil',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/ajouter-appareil/ajouter-appareil.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Authentification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <h1 align="center">Authentification</h1>\n  <br>\n\n  <ion-list >\n\n\n    <ion-item >\n      <ion-label style="color: #000;">\n        Nom Appareil:\n      </ion-label>\n      <ion-input type="text"  name="login" placeholder="Imad"  [(ngModel)]="nomAppareil"  ></ion-input>\n    </ion-item>\n\n    <br>\n\n\n\n  </ion-list>\n  <br>\n\n  <button ion-button color="stable" (click)="seConnecter()" block> Ajouter Appareil </button>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/ajouter-appareil/ajouter-appareil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AjouterAppareilPage);
    return AjouterAppareilPage;
}());

//# sourceMappingURL=ajouter-appareil.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeParcellePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajouter_parcelle_ajouter_parcelle__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListeParcellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListeParcellePage = /** @class */ (function () {
    //public uid = "";
    function ListeParcellePage(navCtrl, actionSheetCtrl, navParams, httpClient, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.objetActuel = {};
        this.listeObjetActuelle = [];
        this.listeValeurFiltre = ["id", "nom_douar", "naiib", "mokadem", "nom_provisoire", "uid"];
        this.chargement = false;
        this.storage.get("appareilId").then(function (val) {
            _this.objetActuel["uid"] = val;
        }, (function (reason) {
            console.log(reason);
        }));
    }
    ListeParcellePage.prototype.refresh = function () {
        var _this = this;
        var startId = 3700;
        this.chargement = true;
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select parcelles.id  , " +
            "parcelles.nom_douar  , " +
            "parcelles.consistance  , " +
            "parcelles.naiib  , " +
            "parcelles.mokadem  , " +
            "parcelles.uid  , " +
            "parcelles.nom_provisoire  , " +
            "parcelles.plusvalues  , " +
            "parcelles.constructions  , " +
            "parcelles.adresse  , " +
            "parcelles.coldenaib  , " +
            "parcelles.adtiers as qualite  , " +
            "substring(photocinrecto.photo for 2) as presencephotocin, " +
            "substring(photocroquis.photo for 2) as presencephotocroquis," +
            "substring(photoparcelle.photo for 2) as presencephotoparcelle," +
            "centroide.shape as presenceshape " +
            "" +
            "from parcelles " +
            "left join (select *, photo as photocinrecto " +
            "   from photoparcelles as PP1 " +
            "   where typephoto = 'photocinrecto'  and idparcelle >= " + startId +
            "   and id = (select max(id) from photoparcelles " +
            "   where idparcelle = PP1.idparcelle and typephoto = 'photocinrecto' ) " +
            "  )" +
            "as photocinrecto on photocinrecto.idparcelle = parcelles.id " +
            "left join (select *, photo as photocroquis " +
            "   from photoparcelles as PP3 " +
            "   where typephoto = 'photocroquis'  and idparcelle >=  " + startId +
            "   and id = (select max(id) from photoparcelles " +
            "   where idparcelle = PP3.idparcelle and typephoto = 'photocroquis' ) " +
            "  )" +
            "as photocroquis on photocroquis.idparcelle = parcelles.id " +
            "left join (select *, photo as photoparcelle " +
            "   from photoparcelles as PP2 " +
            "   where typephoto = 'photoparcelle' and idparcelle >= " + startId +
            "   and id = (select max(id) from photoparcelles " +
            "   where idparcelle = PP2.idparcelle and typephoto = 'photoparcelle' ) " +
            "  ) " +
            "as photoparcelle on photoparcelle.idparcelle = parcelles.id " +
            "left join (select * " +
            "   from centroides as CO " +
            "   where id = (select max(id) from centroides " +
            "   where idparcelle = CO.idparcelle )  and idparcelle >= " + startId +
            "  )" +
            "as centroide on centroide.idparcelle = parcelles.id " +
            "where parcelles.id >= " + startId +
            "order by id desc " +
            "" +
            "")
            .subscribe(function (data) {
            _this.listeObjetActuelle = data.features;
            _this.listeObjetActuelleFiltre = _this.listeObjetActuelle;
            _this.chargement = false;
            console.log(data);
        });
    };
    ListeParcellePage.prototype.ionViewDidEnter = function () {
        this.refresh();
    };
    ListeParcellePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListeParcellePage');
    };
    ListeParcellePage.prototype.onConstructionsSelectChange = function ($event) {
        if ($event) {
            var value = "";
            if (typeof $event == "object") {
                for (var i = 0; i < $event.length; i++) {
                    if (i == 0) {
                        value = value + $event[i];
                    }
                    else {
                        value = value + "+" + $event[i];
                    }
                }
            }
            else {
                value = $event;
            }
            this.objetActuel["constructions"] = value;
        }
    };
    ListeParcellePage.prototype.onConstructionsInuptChange = function ($event) {
        this.objetActuel["constructionsionselect"] = "";
    };
    ListeParcellePage.prototype.onPlusvaluesSelectChange = function ($event) {
        if ($event) {
            var value = "";
            if (typeof $event == "object") {
                for (var i = 0; i < $event.length; i++) {
                    if (i == 0) {
                        value = value + $event[i];
                    }
                    else {
                        value = value + "+" + $event[i];
                    }
                }
            }
            else {
                value = $event;
            }
            this.objetActuel["plusvalues"] = value;
        }
    };
    ListeParcellePage.prototype.itemTapped = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ajouter_parcelle_ajouter_parcelle__["a" /* AjouterParcellePage */], {
            informationsActuelles: item,
            action: "modifier"
        });
    };
    ListeParcellePage.prototype.ajouterItem = function () {
        var _this = this;
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "insert into parcelles(consistance,plusvalues,constructions,adresse,uid,nom_douar,naiib,mokadem,coldenaib) " +
            "values (" +
            "" + this.adaptValueQuery(null, "text") + "," +
            "" + this.adaptValueQuery(null, "text") + "," +
            "" + this.adaptValueQuery(null, "text") + "," +
            "" + this.adaptValueQuery(null, "text") + "," +
            //"" + this.adaptValueQuery( "Ayant Droit"    , "text"  )   + "," +
            "" + this.adaptValueQuery(this.objetActuel["uid"], "text") + "," +
            "" + "(select nom_douar from parcelles where uid = '" + this.objetActuel["uid"] + "' order by id desc limit 1)" + "," +
            "" + "(select naiib from parcelles where uid = '" + this.objetActuel["uid"] + "' order by id desc limit 1)" + "," +
            "" + "(select mokadem from parcelles where uid = '" + this.objetActuel["uid"] + "' order by id desc limit 1)" + "," +
            "" + this.adaptValueQuery(null, "text") + "" +
            ")")
            .subscribe(function (data) {
        }, function (err) {
            var messageGetToast = "Informations attributaires enregistrées";
            if (err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")) {
                _this.refresh();
                var toast = _this.toastCtrl.create({
                    message: messageGetToast,
                    duration: 1000,
                    position: 'top',
                    cssClass: "toast-success"
                });
                toast.present();
            }
            else {
                messageGetToast = "Informations attributaires non enregistrées";
                var toast = _this.toastCtrl.create({
                    message: messageGetToast,
                    duration: 1000,
                    position: 'top',
                    cssClass: "toast-echec"
                });
                toast.present();
            }
        });
    };
    ListeParcellePage.prototype.adaptValueQuery = function (value, type) {
        var retour = null;
        if (!value) {
            if (type == "text") {
                retour = "''";
            }
            else {
                retour = "";
            }
        }
        else {
            if (type == "text") {
                retour = "'" + value + "'";
            }
            else {
                retour = value;
            }
        }
        return retour;
    };
    ListeParcellePage.prototype.detailItemTapped = function ($event, item) {
        var _this = this;
        event.stopPropagation();
        // @ts-ignore
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: [{
                    text: "Supprimer",
                    role: 'destructive',
                    icon: 'trash',
                    handler: function () {
                        console.log('Delete clicked');
                        _this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "DELETE FROM public.parcelles WHERE id = " + item.id)
                            .subscribe(function (data) {
                        }, function (error1) {
                            _this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                                "DELETE FROM public.centroides WHERE idparcelle = " + item.id)
                                .subscribe(function (data) {
                            }, function (error1) {
                                _this.refresh();
                            });
                        });
                    }
                }]
        });
        actionSheet.present();
    };
    ListeParcellePage.prototype.getItems = function (ev) {
        var _this = this;
        // Reset items back to all of the items
        this.listeObjetActuelleFiltre = this.listeObjetActuelle;
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.listeObjetActuelleFiltre = this.listeObjetActuelleFiltre.filter(function (item) {
                var requeteFiltre = "";
                for (var i = 0; i < _this.listeValeurFiltre.length; i++) {
                    if (item[_this.listeValeurFiltre[i]] != undefined) {
                        requeteFiltre = requeteFiltre + " " + item[_this.listeValeurFiltre[i]];
                    }
                }
                console.log(requeteFiltre);
                return (requeteFiltre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListeParcellePage.prototype.total = function (tableau) {
        if (tableau) {
            return tableau.length;
        }
    };
    ListeParcellePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-liste-parcelle',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/liste-parcelle/liste-parcelle.html"*/'\n\n<!--\n  Generated template for the ListeFournisseurPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Total {{uid}} : {{total(listeObjetActuelleFiltre)}}\n      <br>\n      <span *ngIf="chargement" style="color:red">Chargement ... </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item padding="0">\n    <h1 >Liste Parcelle ({{total(listeObjetActuelleFiltre)}}) </h1>\n    <ion-icon name="add-circle" (click)="ajouterItem()" item-end></ion-icon>\n  </ion-item>\n\n  <ion-item style="padding-right: 5px" >\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  </ion-item>\n\n\n\n  <ion-list >\n    <button mode="md" ion-item *ngFor="let item of listeObjetActuelleFiltre"   (click)="itemTapped($event, item)">\n      Parcelle P{{item?.id}}\n      <p>Utilisateur : {{item?.uid}}</p>\n      <p>Douar : {{item?.nom_douar}}</p>\n      <p>Naib : {{item?.naiib}}</p>\n      <p>Moqadem : {{item?.mokadem}}</p>\n      <p>Plus values : {{item?.plusvalues}}</p>\n      <p>Qualité : {{item?.qualite}}</p>\n      <p>Constructions : {{item?.constructions}}</p>\n      <!--p>Adresse : {{item?.adresse}}</p-->\n      <p>Consistance : {{item?.consistance}}</p>\n      <p>Nom : {{item?.nom_provisoire}}</p>\n      <!--p>Col Naïb : {{item?.coldenaib}}</p-->\n\n      <p *ngIf="item?.presencephotocin" style="font-weight: bold;color:green">Photo CIN Enregistrée </p>\n      <p *ngIf="!item?.presencephotocin" style="font-weight: bold;color:red">Photo CIN Manquante</p>\n\n      <p *ngIf="item?.presencephotoparcelle" style="font-weight: bold;color:green">Photo Parcelle Enregistrée </p>\n      <p *ngIf="!item?.presencephotoparcelle" style="font-weight: bold;color:red">Photo Parcelle Manquante</p>\n\n      <p *ngIf="item?.presencephotocroquis" style="font-weight: bold;color:green">Photo Croquis Enregistrée </p>\n      <p *ngIf="!item?.presencephotocroquis" style="font-weight: bold;color:red">Photo Croquis Manquante</p>\n\n      <p *ngIf="item?.presenceshape" style="font-weight: bold;color:green">Centroide Enregistré </p>\n      <p *ngIf="!item?.presenceshape" style="font-weight: bold;color:red">Centroide Manquant</p>\n\n      \n      <ion-icon  style="zoom:1; /*background-color: #32db64;*/padding-right: 10px;padding-left: 30px;padding-top: 10px;padding-bottom: 10px;" name="md-more" (click)="detailItemTapped($event, item)" item-end></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/liste-parcelle/liste-parcelle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ListeParcellePage);
    return ListeParcellePage;
}());

//# sourceMappingURL=liste-parcelle.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjouterParcellePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_location_map_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_wellknown__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_wellknown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_wellknown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_proj4__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stockage_stockage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__saisie_manuelle_coordonnees_saisie_manuelle_coordonnees__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Generated class for the AjouterParcellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjouterParcellePage = /** @class */ (function () {
    function AjouterParcellePage(navCtrl, storage, navParams, stockageProvider, actionSheetCtrl, httpClient, toastCtrl, cameraProvider, photoViewer, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.stockageProvider = stockageProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.cameraProvider = cameraProvider;
        this.photoViewer = photoViewer;
        this.events = events;
        this.objetActuel = {};
        this.listeChoixPlusvalues = [];
        this.listeChoixConstructions = [];
        this.listeChoixConsistance = [];
        this.listeChoixDouar = [];
        this.listeChoixNaiib = [];
        this.listeChoixMokadem = [];
        this.listeCentroides = [];
        this.photoSent = {};
        this.bddPhoto = {};
        this.listePhoto = {
            "photocinrecto": "photocinrecto",
            "photocinverso": "photocinverso",
            "photoparcelle": "photoparcelle",
            "photocroquis": "photocroquis"
        };
        this.uploadProgress = 0;
        this.cameraProvider.resetProgress();
        this.cameraProvider.uploadProgress.subscribe(function (progress) {
            _this.uploadProgress = progress;
        });
        this.events.subscribe('refreshphotos', function (graphicActuel) {
            _this.refreshPhoto();
            console.log("bien recu");
        });
        this.objetActuel = this.navParams.data.informationsActuelles;
        this.refreshPhoto();
        this.refreshCentroides();
        this.events.subscribe('graphicActuel', function (graphicActuel) {
            console.log(graphicActuel);
            if (graphicActuel && graphicActuel.idparcelle == _this.objetActuel.id) {
                _this.x = graphicActuel.geometry.longitude;
                _this.y = graphicActuel.geometry.latitude;
                _this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                    "INSERT INTO public.centroides( " +
                    "shape,idparcelle) " +
                    "VALUES (" +
                    "ST_Multi( ST_GeomFromText('POINT(" + _this.x + " " + _this.y + ")', 4326))," +
                    "" + _this.navParams.data.informationsActuelles.id + ");")
                    .subscribe(function (data) {
                }, function (error1) {
                    _this.refreshCentroides();
                });
            }
        });
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select plusvalues from parcelles")
            .subscribe(function (data) {
            var tableStatistiques = {};
            data = data.features;
            for (var i = 0; i < data.length; i++) {
                try {
                    var itemTemp = data[i]["plusvalues"].split("+");
                    for (var j = 0; j < itemTemp.length; j++) {
                        if (tableStatistiques[itemTemp[j]] == undefined) {
                            tableStatistiques[itemTemp[j]] = 1;
                        }
                        else {
                            tableStatistiques[itemTemp[j]] = tableStatistiques[itemTemp[j]] + 1;
                        }
                    }
                }
                catch (e) {
                }
            }
            delete tableStatistiques[""];
            var tableIndexStatSorted = [];
            for (var pp in tableStatistiques) {
                tableIndexStatSorted.push([pp, tableStatistiques[pp]]);
            }
            tableIndexStatSorted.sort(function (a, b) {
                return -a[1] + b[1];
                ;
            });
            _this.listeChoixPlusvalues = tableIndexStatSorted;
            console.log(tableIndexStatSorted);
        });
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select constructions from parcelles")
            .subscribe(function (data) {
            var tableStatistiques = {};
            data = data.features;
            for (var i = 0; i < data.length; i++) {
                try {
                    var itemTemp = data[i]["constructions"].split("+");
                    for (var j = 0; j < itemTemp.length; j++) {
                        if (tableStatistiques[itemTemp[j]] == undefined) {
                            tableStatistiques[itemTemp[j]] = 1;
                        }
                        else {
                            tableStatistiques[itemTemp[j]] = tableStatistiques[itemTemp[j]] + 1;
                        }
                    }
                }
                catch (e) {
                }
            }
            delete tableStatistiques[""];
            var tableIndexStatSorted = [];
            for (var pp in tableStatistiques) {
                tableIndexStatSorted.push([pp, tableStatistiques[pp]]);
            }
            tableIndexStatSorted.sort(function (a, b) {
                return -a[1] + b[1];
            });
            _this.listeChoixConstructions = tableIndexStatSorted;
            console.log(tableIndexStatSorted);
        });
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select consistance from parcelles")
            .subscribe(function (data) {
            var tableStatistiques = {};
            data = data.features;
            for (var i = 0; i < data.length; i++) {
                try {
                    var itemTemp = data[i]["consistance"].split("+");
                    for (var j = 0; j < itemTemp.length; j++) {
                        if (tableStatistiques[itemTemp[j]] == undefined) {
                            tableStatistiques[itemTemp[j]] = 1;
                        }
                        else {
                            tableStatistiques[itemTemp[j]] = tableStatistiques[itemTemp[j]] + 1;
                        }
                    }
                }
                catch (e) {
                }
            }
            delete tableStatistiques[""];
            var tableIndexStatSorted = [];
            for (var pp in tableStatistiques) {
                tableIndexStatSorted.push([pp, tableStatistiques[pp]]);
            }
            tableIndexStatSorted.sort(function (a, b) {
                return -a[1] + b[1];
            });
            _this.listeChoixConsistance = tableIndexStatSorted;
            console.log(tableIndexStatSorted);
        });
        //remplir douar
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select max(date),nom_douar from parcelles where not nom_douar is null and id>=3000 group by nom_douar order by max(date) desc")
            .subscribe(function (data) {
            /*
    
            this.listeChoixDouar = [];
    
    
            data = (data as any).features;
            for(let i=0; i < (data as any).length ; i++){
    
              if((data as any)[i]["nom_douar"]){this.listeChoixDouar.push( [(data as any)[i]["nom_douar"]] );}
    
            }
    
            console.log(this.listeChoixDouar);
            */
            var tableStatistiques = {};
            data = data.features;
            for (var i = 0; i < data.length; i++) {
                try {
                    var itemTemp = data[i]["nom_douar"].split("+");
                    for (var j = 0; j < itemTemp.length; j++) {
                        if (tableStatistiques[itemTemp[j]] == undefined) {
                            tableStatistiques[itemTemp[j]] = 1;
                        }
                        else {
                            tableStatistiques[itemTemp[j]] = tableStatistiques[itemTemp[j]] + 1;
                        }
                    }
                }
                catch (e) {
                }
            }
            delete tableStatistiques[""];
            var tableIndexStatSorted = [];
            for (var pp in tableStatistiques) {
                tableIndexStatSorted.push([pp, tableStatistiques[pp]]);
            }
            tableIndexStatSorted.sort(function (a, b) {
                return -a[1] + b[1];
            });
            _this.listeChoixDouar = tableIndexStatSorted;
            console.log(tableIndexStatSorted);
        });
        //remplir douar
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select max(date),naiib from parcelles where not naiib is null and id>=3000 group by naiib order by max(date) desc")
            .subscribe(function (data) {
            var tableStatistiques = {};
            data = data.features;
            for (var i = 0; i < data.length; i++) {
                try {
                    var itemTemp = data[i]["naiib"].split("+");
                    for (var j = 0; j < itemTemp.length; j++) {
                        if (tableStatistiques[itemTemp[j]] == undefined) {
                            tableStatistiques[itemTemp[j]] = 1;
                        }
                        else {
                            tableStatistiques[itemTemp[j]] = tableStatistiques[itemTemp[j]] + 1;
                        }
                    }
                }
                catch (e) {
                }
            }
            delete tableStatistiques[""];
            var tableIndexStatSorted = [];
            for (var pp in tableStatistiques) {
                tableIndexStatSorted.push([pp, tableStatistiques[pp]]);
            }
            tableIndexStatSorted.sort(function (a, b) {
                return -a[1] + b[1];
            });
            _this.listeChoixNaiib = tableIndexStatSorted;
            console.log(tableIndexStatSorted);
        });
        //remplir douar
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select max(date),mokadem from parcelles where not mokadem is null and id>=3000 group by mokadem order by max(date) desc")
            .subscribe(function (data) {
            _this.listeChoixMokadem = [];
            data = data.features;
            for (var i = 0; i < data.length; i++) {
                if (data[i]["mokadem"]) {
                    _this.listeChoixMokadem.push([data[i]["mokadem"]]);
                }
            }
            console.log(_this.listeChoixMokadem);
        });
        //this.stockageProvider.traverseKeys();
        //ajout de la couche des titres DA
    }
    AjouterParcellePage.prototype.refreshCentroides = function () {
        var _this = this;
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select id, St_astext(shape) as shape " +
            "from centroides " +
            "where idparcelle = " + this.navParams.data.informationsActuelles.id + " ")
            .subscribe(function (data) {
            var coucheActuel = data.features;
            _this.listeCentroides = [];
            for (var i = 0; i < coucheActuel.length; i++) {
                var jsontext = __WEBPACK_IMPORTED_MODULE_5_wellknown__["parse"](coucheActuel[i].shape).coordinates[0];
                console.log(__WEBPACK_IMPORTED_MODULE_6_proj4__);
                var pointNordMaroc = __WEBPACK_IMPORTED_MODULE_6_proj4__["default"]("+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=-5.4 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ", jsontext);
                _this.listeCentroides.push({
                    id: coucheActuel[i].id,
                    x: jsontext[0],
                    y: jsontext[1],
                    xnordmaroc: pointNordMaroc[0],
                    ynordmaroc: pointNordMaroc[1]
                });
            }
        });
    };
    AjouterParcellePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListeParcellePage');
        this.refreshCentroides();
    };
    AjouterParcellePage.prototype.ionViewDidEnter = function () {
        this.refreshCentroides();
    };
    AjouterParcellePage.prototype.onQualiteSelectChange = function ($event) {
        console.log($event);
        this.objetActuel["qualite"] = $event;
    };
    AjouterParcellePage.prototype.onConstructionsSelectChange = function ($event) {
        if ($event) {
            var value = "";
            if (typeof $event == "object") {
                for (var i = 0; i < $event.length; i++) {
                    if (i == 0) {
                        value = value + $event[i];
                    }
                    else {
                        value = value + "+" + $event[i];
                    }
                }
            }
            else {
                value = $event;
            }
            this.objetActuel["constructions"] = value;
        }
    };
    AjouterParcellePage.prototype.onConstructionsInuptChange = function ($event) {
        this.objetActuel["constructionsionselect"] = "";
    };
    AjouterParcellePage.prototype.onPlusvaluesSelectChange = function ($event) {
        if ($event) {
            var value = "";
            if (typeof $event == "object") {
                for (var i = 0; i < $event.length; i++) {
                    if (i == 0) {
                        value = value + $event[i];
                    }
                    else {
                        value = value + "+" + $event[i];
                    }
                }
            }
            else {
                value = $event;
            }
            this.objetActuel["plusvalues"] = value;
        }
    };
    AjouterParcellePage.prototype.onPlusvaluesInuptChange = function ($event) {
        this.objetActuel["plusvaluesionselect"] = "";
    };
    AjouterParcellePage.prototype.onDouarSelectChange = function ($event) {
        if ($event) {
            var value = "";
            if (typeof $event == "object") {
                for (var i = 0; i < $event.length; i++) {
                    if (i == 0) {
                        value = value + $event[i];
                    }
                    else {
                        value = value + "+" + $event[i];
                    }
                }
            }
            else {
                value = $event;
            }
            this.objetActuel["nom_douar"] = value;
        }
    };
    AjouterParcellePage.prototype.onDouarInuptChange = function ($event) {
        this.objetActuel["nom_douarionselect"] = "";
    };
    AjouterParcellePage.prototype.onNaiibSelectChange = function ($event) {
        if ($event) {
            var value = "";
            if (typeof $event == "object") {
                for (var i = 0; i < $event.length; i++) {
                    if (i == 0) {
                        value = value + $event[i];
                    }
                    else {
                        value = value + "+" + $event[i];
                    }
                }
            }
            else {
                value = $event;
            }
            this.objetActuel["naiib"] = value;
        }
    };
    AjouterParcellePage.prototype.onNaiibInuptChange = function ($event) {
        this.objetActuel["naiibionselect"] = "";
    };
    AjouterParcellePage.prototype.onMokademSelectChange = function ($event) {
        if ($event) {
            var value = "";
            if (typeof $event == "object") {
                for (var i = 0; i < $event.length; i++) {
                    if (i == 0) {
                        value = value + $event[i];
                    }
                    else {
                        value = value + "+" + $event[i];
                    }
                }
            }
            else {
                value = $event;
            }
            this.objetActuel["mokadem"] = value;
        }
    };
    AjouterParcellePage.prototype.onMokademInuptChange = function ($event) {
        this.objetActuel["mokademionselect"] = "";
    };
    AjouterParcellePage.prototype.onConsistanceSelectChange = function ($event) {
        if ($event) {
            var value = "";
            if (typeof $event == "object") {
                for (var i = 0; i < $event.length; i++) {
                    if (i == 0) {
                        value = value + $event[i];
                    }
                    else {
                        value = value + "+" + $event[i];
                    }
                }
            }
            else {
                value = $event;
            }
            this.objetActuel["consistance"] = value;
        }
    };
    AjouterParcellePage.prototype.onConsistanceInuptChange = function ($event) {
        this.objetActuel["consistanceionselect"] = "";
    };
    AjouterParcellePage.prototype.enregistrerInformationsAttributaires = function () {
        var _this = this;
        if (this.objetActuel.consistance == undefined) {
        }
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "update parcelles set " +
            " consistance = " + this.adaptValueQuery(this.objetActuel.consistance, "text") +
            ", plusvalues = " + this.adaptValueQuery(this.objetActuel.plusvalues, "text") +
            ", constructions = " + this.adaptValueQuery(this.objetActuel.constructions, "text") +
            ", adresse = " + this.adaptValueQuery(this.objetActuel.adresse, "text") +
            ", uid = " + this.adaptValueQuery(this.objetActuel.uid, "text") +
            ", nom_douar = " + this.adaptValueQuery(this.objetActuel.nom_douar, "text") +
            ", mokadem = " + this.adaptValueQuery(this.objetActuel.mokadem, "text") +
            ", naiib = " + this.adaptValueQuery(this.objetActuel.naiib, "text") +
            ", nom_provisoire = " + this.adaptValueQuery(this.objetActuel.nom_provisoire, "text") +
            ", adtiers = " + this.adaptValueQuery(this.objetActuel.qualite, "text") +
            ", coldenaib =  " + this.adaptValueQuery(this.objetActuel.coldenaib, "text") +
            " where id = " + this.objetActuel.id)
            .subscribe(function (data) {
        }, function (err) {
            var messageGetToast = "Informations attributaires enregistrées";
            if (err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")) {
                var toast = _this.toastCtrl.create({
                    message: messageGetToast,
                    duration: 1000,
                    position: 'top',
                    cssClass: "toast-success"
                });
                toast.present();
            }
            else {
                messageGetToast = "Informations attributaires non enregistrées";
                var toast = _this.toastCtrl.create({
                    message: messageGetToast,
                    duration: 1000,
                    position: 'top',
                    cssClass: "toast-echec"
                });
                toast.present();
            }
        });
    };
    AjouterParcellePage.prototype.adaptValueQuery = function (value, type) {
        var retour = null;
        if (!value) {
            if (type == "text") {
                retour = "''";
            }
            else {
                retour = "";
            }
        }
        else {
            if (type == "text") {
                retour = "'" + value + "'";
            }
            else {
                retour = value;
            }
        }
        return retour;
    };
    AjouterParcellePage.prototype.photoChooser = function (objetActuel, photoActuelle, width, heigth, quality) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cameraProvider.photoChooser(objetActuel, photoActuelle, width, heigth, quality, this.objetActuel)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AjouterParcellePage.prototype.recupererGraphic = function () {
        var _this = this;
        // @ts-ignore
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: [
                {
                    text: "Carte",
                    role: 'destructive',
                    icon: 'locate',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_location_map_location__["a" /* MapLocationPage */], {
                            action: "getLocation",
                            idparcelle: _this.objetActuel.id,
                            x: _this.objetActuel.x,
                            y: _this.objetActuel.y
                        });
                    }
                },
                {
                    text: "Manuelle",
                    role: 'destructive',
                    icon: 'brush',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__saisie_manuelle_coordonnees_saisie_manuelle_coordonnees__["a" /* SaisieManuelleCoordonneesPage */], {
                            idparcelle: _this.objetActuel.id
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AjouterParcellePage.prototype.detailActionMenu = function () {
        var _this = this;
        // @ts-ignore
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: [
                {
                    text: "Synchroniser",
                    role: 'destructive',
                    icon: 'md-sync',
                    handler: function () {
                        _this.synchroniserPhoto();
                    }
                },
                {
                    text: "Rafraichir",
                    role: 'destructive',
                    icon: 'md-refresh',
                    handler: function () {
                        _this.refreshPhoto();
                        _this.refreshCentroides();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AjouterParcellePage.prototype.detailItemTapped = function ($event, item) {
        var _this = this;
        event.stopPropagation();
        // @ts-ignore
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: [{
                    text: "Supprimer",
                    role: 'destructive',
                    icon: 'trash',
                    handler: function () {
                        console.log('Delete clicked');
                        _this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "DELETE FROM public.centroides WHERE id=" + item.id)
                            .subscribe(function (data) {
                        }, function (error1) {
                            _this.refreshCentroides();
                        });
                    }
                }]
        });
        actionSheet.present();
    };
    AjouterParcellePage.prototype.reenvoyerPhoto = function (libellephoto) {
        var _this = this;
        console.log("click");
        this.httpClient.post("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "insert into photoparcelles (photo,idparcelle,typephoto) " +
            "values (" +
            "" + "'postBody'" + "," +
            "" + this.adaptValueQuery(this.objetActuel.id, "number") + "," +
            "" + this.adaptValueQuery(libellephoto, "text") + "" +
            ")", this.objetActuel[libellephoto])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["timeout"])(10000))
            .subscribe(function (data) {
            console.log("wwwwqqqq");
        }, function (err) {
            console.log("eee");
            var messageGetToast = "Informations attributaires enregistrées";
            console.log(JSON.stringify(err));
            if (err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")) {
                var toast = _this.toastCtrl.create({
                    message: messageGetToast,
                    duration: 1000,
                    position: 'top',
                    cssClass: "toast-success"
                });
                toast.present();
                _this.stockageProvider.updatePushValue(libellephoto, _this.objetActuel.id, { sent: true });
            }
            else {
                messageGetToast = "Informations attributaires non enregistrées";
                var toast = _this.toastCtrl.create({
                    message: messageGetToast,
                    duration: 1000,
                    position: 'top',
                    cssClass: "toast-echec"
                });
                toast.present();
                _this.stockageProvider.updatePushValue(libellephoto, _this.objetActuel.id, {
                    photo: _this.objetActuel[libellephoto],
                    requete: "http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                        "insert into photoparcelles (photo,idparcelle,typephoto) " +
                        "values (" +
                        "" + "'postBody'" + "," +
                        "" + _this.adaptValueQuery(_this.objetActuel.id, "number") + "," +
                        "" + _this.adaptValueQuery(libellephoto, "text") + "" +
                        ")",
                    sent: false
                });
            }
        });
        console.log("eee");
    };
    AjouterParcellePage.prototype.synchroniserPhoto = function () {
        var _this = this;
        var _loop_1 = function (key) {
            this_1.httpClient.post("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                "insert into photoparcelles (photo,idparcelle,typephoto) " +
                "values (" +
                "" + "'postBody'" + "," +
                "" + this_1.adaptValueQuery(this_1.objetActuel.id, "number") + "," +
                "" + this_1.adaptValueQuery(key, "text") + "" +
                ")", this_1.objetActuel[key])
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["timeout"])(10000))
                .subscribe(function (data) {
                console.log("wwwwqqqq");
            }, function (err) {
                console.log("eee");
                var messageGetToast = "Informations attributaires enregistrées";
                console.log(JSON.stringify(err));
                if (err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")) {
                    var toast = _this.toastCtrl.create({
                        message: messageGetToast,
                        duration: 1000,
                        position: 'top',
                        cssClass: "toast-success"
                    });
                    toast.present();
                    _this.stockageProvider.updatePushValue(key, _this.objetActuel.id, { sent: true });
                }
                else {
                    messageGetToast = "Informations attributaires non enregistrées";
                    var toast = _this.toastCtrl.create({
                        message: messageGetToast,
                        duration: 1000,
                        position: 'top',
                        cssClass: "toast-echec"
                    });
                    toast.present();
                    _this.stockageProvider.updatePushValue(key, _this.objetActuel.id, {
                        photo: _this.objetActuel[key],
                        requete: "http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "insert into photoparcelles (photo,idparcelle,typephoto) " +
                            "values (" +
                            "" + "'postBody'" + "," +
                            "" + _this.adaptValueQuery(_this.objetActuel.id, "number") + "," +
                            "" + _this.adaptValueQuery(key, "text") + "" +
                            ")",
                        sent: false
                    });
                }
            });
        };
        var this_1 = this;
        for (var key in this.listePhoto) {
            _loop_1(key);
        }
    };
    AjouterParcellePage.prototype.refreshPhoto = function () {
        var _this = this;
        var _loop_2 = function (key) {
            this_2.storage.get(key).then(function (val) {
                console.log(1);
                _this.bddPhoto[key] = val;
                _this.photoSent[key] = true;
                if (val[_this.objetActuel.id] && val[_this.objetActuel.id]["sent"] === false) {
                    _this.objetActuel[key] = val[_this.objetActuel.id]["photo"];
                }
                console.log("eeeeee", _this.objetActuel[key].substring(0, 14));
                if (!_this.objetActuel[key]) {
                    _this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                        "select photo from photoparcelles " +
                        "where idparcelle = " + _this.navParams.data.informationsActuelles.id + " " +
                        "and typephoto = '" + key + "' " +
                        "order by id desc " +
                        "limit 1")
                        .subscribe(function (data) {
                        try {
                            _this.objetActuel[key] = data.features[0].photo;
                        }
                        catch (e) {
                            console.log(e);
                        }
                    });
                }
            }).catch(function (error) {
                console.log('get error for ' + key + '', error);
                if (!_this.objetActuel[key]) {
                    _this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                        "select photo from photoparcelles " +
                        "where idparcelle = " + _this.navParams.data.informationsActuelles.id + " " +
                        "and typephoto = '" + key + "' " +
                        "order by id desc " +
                        "limit 1")
                        .subscribe(function (data) {
                        try {
                            _this.objetActuel[key] = data.features[0].photo;
                        }
                        catch (e) {
                        }
                    });
                }
            });
        };
        var this_2 = this;
        for (var key in this.listePhoto) {
            _loop_2(key);
        }
    };
    AjouterParcellePage.prototype.actualiser = function () {
        this.refreshPhoto();
    };
    AjouterParcellePage.prototype.afficherPhotoCinRecto = function () {
        this.photoViewer.show(this.objetActuel.photocinrecto);
    };
    AjouterParcellePage.prototype.afficherPhotoCinVerso = function () {
        this.photoViewer.show(this.objetActuel.photocinverso);
    };
    AjouterParcellePage.prototype.afficherPhotoParcelle = function () {
        this.photoViewer.show(this.objetActuel.photoparcelle);
    };
    AjouterParcellePage.prototype.afficherPhotoCroquis = function () {
        this.photoViewer.show(this.objetActuel.photocroquis);
    };
    AjouterParcellePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajouter-parcelle',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/ajouter-parcelle/ajouter-parcelle.html"*/'<!--\n  Generated template for the AjouterProjetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n    <ion-title>Parcelle : {{objetActuel.id}} </ion-title>\n\n    <ion-buttons end>\n\n\n      <div (click)="detailActionMenu()">\n        <ion-icon  style="zoom:1.5; /*background-color: #32db64;*/padding-right: 10px;padding-left: 30px;padding-top: 0px;padding-bottom: 0px;" name="md-more"  item-end></ion-icon>\n\n      </div>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n    <h1 >Informations :</h1>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Parcelle : </ion-label>\n    <ion-input text-center type="text" readonly="true" [(ngModel)]="objetActuel.id"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Consistance:</ion-label>\n    <ion-select (ionChange) = "onConsistanceSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.consistanceionselect"  >\n      <ion-option *ngFor="let item of listeChoixConsistance" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.consistanceionselect || objetActuel.consistance">\n    <ion-input  (ngModelChange)="onConsistanceInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.consistance"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Plus Values:</ion-label>\n    <ion-select (ionChange) = "onPlusvaluesSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.plusvaluesionselect"  >\n      <ion-option *ngFor="let item of listeChoixPlusvalues" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.plusvaluesionselect || objetActuel.plusvalues">\n    <ion-input (ngModelChange)="onPlusvaluesInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.plusvalues"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Douar:</ion-label>\n    <ion-select (ionChange) = "onDouarSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.douarionselect"  >\n      <ion-option *ngFor="let item of listeChoixDouar" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.nom_douarionselect || objetActuel.nom_douar">\n    <ion-input (ngModelChange)="onDouarInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.nom_douar"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Naiib:</ion-label>\n    <ion-select (ionChange) = "onNaiibSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.naiibionselect"  >\n      <ion-option *ngFor="let item of listeChoixNaiib" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.naiibionselect || objetActuel.naiib">\n    <ion-input (ngModelChange)="onNaiibInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.naiib"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Moqadem:</ion-label>\n    <ion-select (ionChange) = "onMokademSelectChange($event)"   multiple="false" name = "Type vehicule" [(ngModel)]="objetActuel.mokademionselect"  >\n      <ion-option *ngFor="let item of listeChoixMokadem" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.mokademionselect || objetActuel.mokadem">\n    <ion-input (ngModelChange)="onMokademInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.mokadem"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Qualité: </ion-label>\n    <ion-select (ionChange) = "onQualiteSelectChange($event)"   multiple="false" [(ngModel)]="objetActuel.qualite"  >\n      <ion-option *ngFor="let item of [\'Ayant Droit\',\'Tiers\']" [value]="item">{{item}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Constructions: </ion-label>\n    <ion-select (ionChange) = "onConstructionsSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.constructionsionselect"  >\n      <ion-option *ngFor="let item of listeChoixConstructions" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.constructionsionselect || objetActuel.constructions">\n    <ion-input (ngModelChange)="onConstructionsInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.constructions"  ></ion-input>\n  </ion-item>\n\n\n\n  <ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      Adresse :\n    </ion-label>\n    <ion-input text-center type="text" [(ngModel)]="objetActuel.adresse"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      Nom :\n    </ion-label>\n    <ion-input text-center type="text" [(ngModel)]="objetActuel.nom_provisoire"  ></ion-input>\n  </ion-item>\n\n  <!--ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      Coll selon Naïb :\n    </ion-label>\n    <ion-input text-center type="text" [(ngModel)]="objetActuel.coldenaib"  ></ion-input>\n  </ion-item-->\n\n\n\n\n\n  <button type="submit" color="tertiary" ion-button (click)="enregistrerInformationsAttributaires()" block >\n    Enregistrer modifications\n  </button>\n\n  <br><br>\n\n  <ion-item  [id]="id"  style="padding:4" >\n\n    <ion-label style="color: #000;">\n      <h1 >Bornes Centroïdes :</h1>\n\n\n\n\n    </ion-label>\n\n\n\n    <ion-icon name="add-circle" (click)="recupererGraphic()" item-end></ion-icon>\n\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <div *ngFor="let item of listeCentroides;let index = index;">\n\n      <button   mode="md" ion-item    (click)="itemTapped($event, item)">\n        Borne {{index+1}}\n        <p>X = {{item.xnordmaroc.toFixed(2)}} </p>\n        <p>Y = {{item.ynordmaroc.toFixed(2)}} </p>\n\n        <ion-icon  style="zoom:1; /*background-color: #32db64;*/padding-right: 10px;padding-left: 30px;padding-top: 10px;padding-bottom: 10px;" name="md-more" (click)="detailItemTapped($event, item)" item-end></ion-icon>\n      </button>\n\n    </div>\n\n\n  </ion-list>\n\n\n\n\n  <ion-item  *ngIf="bddPhoto[\'photocinrecto\'] && bddPhoto[\'photocinrecto\'][objetActuel.id] &&  bddPhoto[\'photocinrecto\'][objetActuel.id][\'sent\'].toString() === \'false\' " padding="0" style="border-bottom: 0px;background-color: #f53d3d">\n    <h1 >Photo CIN Recto:</h1>\n  </ion-item>\n  <ion-item  *ngIf="bddPhoto[\'photocinrecto\'] && bddPhoto[\'photocinrecto\'][objetActuel.id] &&  bddPhoto[\'photocinrecto\'][objetActuel.id][\'sent\'].toString() === \'true\'"  padding="0" style="border-bottom: 0px;background-color: #32db64">\n    <h1 >Photo CIN Recto:</h1>\n  </ion-item>\n  <ion-item *ngIf="!bddPhoto[\'photocinrecto\'] || !bddPhoto[\'photocinrecto\'][objetActuel.id]" padding="0" style="border-bottom: 0px;">\n    <h1 >Photo CIN Recto :</h1>\n  </ion-item>\n\n\n  <img (click)="afficherPhotoCinRecto()" style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocinrecto" *ngIf="objetActuel.photocinrecto"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocinrecto\',1200,2000,100)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n  <div *ngIf="objetActuel.photocinrecto" text-center>\n    <button ion-button round  (click)="reenvoyerPhoto(\'photocinrecto\')">\n      Réenvoyer  <ion-icon padding name="refresh"></ion-icon>\n    </button>\n  </div>\n\n\n  <ion-item  *ngIf="bddPhoto[\'photocinverso\'] && bddPhoto[\'photocinverso\'][objetActuel.id] &&  bddPhoto[\'photocinverso\'][objetActuel.id][\'sent\'].toString() === \'false\' " padding="0" style="border-bottom: 0px;background-color: #f53d3d">\n    <h1 >Photo CIN Verso:</h1>\n  </ion-item>\n  <ion-item  *ngIf="bddPhoto[\'photocinverso\'] && bddPhoto[\'photocinverso\'][objetActuel.id] &&  bddPhoto[\'photocinverso\'][objetActuel.id][\'sent\'].toString() === \'true\'"  padding="0" style="border-bottom: 0px;background-color: #32db64">\n    <h1 >Photo CIN Verso:</h1>\n  </ion-item>\n  <ion-item *ngIf="!bddPhoto[\'photocinverso\'] || !bddPhoto[\'photocinverso\'][objetActuel.id]" padding="0" style="border-bottom: 0px;">\n    <h1 >Photo CIN Verso :</h1>\n  </ion-item>\n\n  <img (click)="afficherPhotoCinVerso()" style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocinverso" *ngIf="objetActuel.photocinverso"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocinverso\',1200,2000,100)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n  <div *ngIf="objetActuel.photocinverso" text-center>\n    <button ion-button round  (click)="reenvoyerPhoto(\'photocinverso\')">\n      Réenvoyer  <ion-icon padding name="refresh"></ion-icon>\n    </button>\n  </div>\n\n  <ion-item  *ngIf="bddPhoto[\'photoparcelle\'] && bddPhoto[\'photoparcelle\'][objetActuel.id] &&  bddPhoto[\'photoparcelle\'][objetActuel.id][\'sent\'].toString() === \'false\' " padding="0" style="border-bottom: 0px;background-color: #f53d3d">\n    <h1 >Photo Parcelle:</h1>\n  </ion-item>\n  <ion-item  *ngIf="bddPhoto[\'photoparcelle\'] && bddPhoto[\'photoparcelle\'][objetActuel.id] &&  bddPhoto[\'photoparcelle\'][objetActuel.id][\'sent\'].toString() === \'true\'"  padding="0" style="border-bottom: 0px;background-color: #32db64">\n    <h1 >Photo Parcelle:</h1>\n  </ion-item>\n  <ion-item *ngIf="!bddPhoto[\'photoparcelle\'] || !bddPhoto[\'photoparcelle\'][objetActuel.id]" padding="0" style="border-bottom: 0px;">\n    <h1 >Photo Parcelle:</h1>\n  </ion-item>\n\n\n  <img (click)="afficherPhotoParcelle()" style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photoparcelle" *ngIf="objetActuel.photoparcelle"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photoparcelle\',1200,2000,100)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n  <div *ngIf="objetActuel.photoparcelle" text-center>\n    <button ion-button round  (click)="reenvoyerPhoto(\'photoparcelle\')">\n      Réenvoyer  <ion-icon padding name="refresh"></ion-icon>\n    </button>\n  </div>\n\n  <ion-item  *ngIf="bddPhoto[\'photocroquis\'] && bddPhoto[\'photocroquis\'][objetActuel.id] &&  bddPhoto[\'photocroquis\'][objetActuel.id][\'sent\'].toString() === \'false\' " padding="0" style="border-bottom: 0px;background-color: #f53d3d">\n    <h1 >Photo Croquis:</h1>\n  </ion-item>\n  <ion-item  *ngIf="bddPhoto[\'photocroquis\'] && bddPhoto[\'photocroquis\'][objetActuel.id] &&  bddPhoto[\'photocroquis\'][objetActuel.id][\'sent\'].toString() === \'true\'"  padding="0" style="border-bottom: 0px;background-color: #32db64">\n    <h1 >Photo Croquis:</h1>\n  </ion-item>\n  <ion-item *ngIf="!bddPhoto[\'photocroquis\'] || !bddPhoto[\'photocroquis\'][objetActuel.id]" padding="0" style="border-bottom: 0px;">\n    <h1 >Photo Croquis:</h1>\n  </ion-item>\n\n  <img  (click)="afficherPhotoCroquis()"  style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocroquis" *ngIf="objetActuel.photocroquis"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocroquis\',1200,2000,100)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n  <div *ngIf="objetActuel.photocroquis" text-center>\n    <button ion-button round  (click)="reenvoyerPhoto(\'photocroquis\')">\n      Réenvoyer  <ion-icon padding name="refresh"></ion-icon>\n    </button>\n  </div>\n\n\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n  </ion-item>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/ajouter-parcelle/ajouter-parcelle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_stockage_stockage__["a" /* StockageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AjouterParcellePage);
    return AjouterParcellePage;
}());

//# sourceMappingURL=ajouter-parcelle.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaisieManuelleCoordonneesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SaisieManuelleCoordonneesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SaisieManuelleCoordonneesPage = /** @class */ (function () {
    function SaisieManuelleCoordonneesPage(navCtrl, navParams, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.objetActuel = {};
        this.idparcelle = null;
        this.idparcelle = this.navParams.data.idparcelle;
        console.log(navParams);
    }
    SaisieManuelleCoordonneesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaisieManuelleCoordonneesPage');
    };
    SaisieManuelleCoordonneesPage.prototype.ajouterCentroide = function () {
        var _this = this;
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "INSERT INTO public.centroides( " +
            "shape,idparcelle) " +
            "VALUES (" +
            "ST_Multi(    ST_Transform( ST_SetSRID(ST_MakePoint( " + this.objetActuel["X"] + " , " + this.objetActuel["Y"] + "), 26191)  ,  4326)   )," +
            "" + this.navParams.data.idparcelle + ");")
            .subscribe(function (data) {
        }, function (error1) {
            _this.navCtrl.pop();
        });
    };
    SaisieManuelleCoordonneesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saisie-manuelle-coordonnees',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/saisie-manuelle-coordonnees/saisie-manuelle-coordonnees.html"*/'<!--\n  Generated template for the SaisieManuelleCoordonneesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n    <ion-title>Parcelle : {{idparcelle}} </ion-title>\n\n    <ion-buttons end>\n\n\n      <div (click)="detailActionMenu()">\n        <ion-icon  style="zoom:1.5; /*background-color: #32db64;*/padding-right: 10px;padding-left: 30px;padding-top: 0px;padding-bottom: 0px;" name="md-more"  item-end></ion-icon>\n\n      </div>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <br>\n  <br>\n  <br>\n\n  <ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      X :\n    </ion-label>\n    <ion-input text-center type="tel" [(ngModel)]="objetActuel[\'X\']"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      Y :\n    </ion-label>\n    <ion-input text-center type="tel" [(ngModel)]="objetActuel[\'Y\']"  ></ion-input>\n  </ion-item>\n\n  <br>\n\n  <button type="submit" color="tertiary" ion-button (click)="ajouterCentroide()" block >\n    Ajouter Centroide\n  </button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/saisie-manuelle-coordonnees/saisie-manuelle-coordonnees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SaisieManuelleCoordonneesPage);
    return SaisieManuelleCoordonneesPage;
}());

//# sourceMappingURL=saisie-manuelle-coordonnees.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajouter-appareil/ajouter-appareil.module": [
		781,
		5
	],
	"../pages/ajouter-parcelle/ajouter-parcelle.module": [
		782,
		4
	],
	"../pages/liste-parcelle/liste-parcelle.module": [
		783,
		3
	],
	"../pages/map-location/map-location.module": [
		784,
		2
	],
	"../pages/post-mapping-tools/post-mapping-tools.module": [
		785,
		1
	],
	"../pages/saisie-manuelle-coordonnees/saisie-manuelle-coordonnees.module": [
		786,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path_ngx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stockage_stockage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64_to_gallery__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CameraProvider = /** @class */ (function () {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    function CameraProvider(actionSheetCtrl, base64ToGallery, stockageProvider, httpClient, toastCtrl, camera, platform, filePath, events) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.base64ToGallery = base64ToGallery;
        this.stockageProvider = stockageProvider;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.platform = platform;
        this.filePath = filePath;
        this.events = events;
        this.uploadProgress = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"](0);
        this.downloadProgress = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"](0);
        console.log('Hello CameraProvider Provider');
    }
    CameraProvider.prototype.photoChooser = function (objetActuel, photoAttributName, width, height, quality, objet) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Charger à partir de la galerie',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, objetActuel, photoAttributName, width, height, quality, objet);
                    }
                },
                {
                    text: 'Charger à partir de Caméra',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, objetActuel, photoAttributName, width, height, quality, objet);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    CameraProvider.prototype.takePicture = function (sourceType, objetActuel, photoAttributName, width, height, quality, objet) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var CameraOptions;
            return __generator(this, function (_a) {
                CameraOptions = {
                    quality: quality,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE,
                    targetWidth: width,
                    targetHeight: height,
                    correctOrientation: true,
                    sourceType: 0
                };
                if (sourceType == this.camera.PictureSourceType.CAMERA) {
                    CameraOptions = {
                        quality: quality,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        targetWidth: width,
                        targetHeight: height,
                        correctOrientation: true,
                        sourceType: 1
                    };
                }
                //if(sourceType == this.camera.PictureSourceType.CAMERA) {
                // Get the data of an image
                this.camera.getPicture(CameraOptions).then(function (imageData) {
                    console.log("hello");
                    // Special handling for Android library
                    if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                        objetActuel[photoAttributName] = 'data:image/jpeg;base64,' + imageData;
                        _this.filePath.resolveNativePath(imageData);
                    }
                    else {
                        objetActuel[photoAttributName] = 'data:image/jpeg;base64,' + imageData;
                    }
                    console.log("a vos marques");
                    if (sourceType == _this.camera.PictureSourceType.CAMERA) {
                        var prefix = "P_" + objet.id.toString() + "_";
                        try {
                            _this.base64ToGallery.base64ToGallery(imageData, { prefix: prefix, mediaScanner: true }).then(function (res) { return console.log('Saved image to gallery ', res.toString().substring(10)); }, function (err) { return console.log('Error saving image to gallery ', err.toString().substring(10)); });
                        }
                        catch (err) {
                            console.log("erreur" + err);
                        }
                    }
                    _this.httpClient.post("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                        "insert into photoparcelles (photo,idparcelle,typephoto) " +
                        "values (" +
                        "" + "'postBody'" + "," +
                        "" + _this.adaptValueQuery(objet.id, "number") + "," +
                        "" + _this.adaptValueQuery(photoAttributName, "text") + "" +
                        ")", 'data:image/jpeg;base64,' + imageData, {
                        responseType: 'arraybuffer',
                        reportProgress: true
                    })
                        .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["timeout"])(10000))
                        .subscribe(function (data) {
                    }, function (err) {
                        var messageGetToast = "Informations attributaires enregistrées";
                        console.log(JSON.stringify(err));
                        if (err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")) {
                            var toast = _this.toastCtrl.create({
                                message: messageGetToast,
                                duration: 1000,
                                position: 'top',
                                cssClass: "toast-success"
                            });
                            toast.present();
                            _this.stockageProvider.updatePushValue(photoAttributName, objet.id, {
                                sent: true
                            });
                        }
                        else {
                            messageGetToast = "Informations attributaires non enregistrées";
                            var toast = _this.toastCtrl.create({
                                message: messageGetToast,
                                duration: 1000,
                                position: 'top',
                                cssClass: "toast-echec"
                            });
                            toast.present();
                            _this.stockageProvider.updatePushValue(photoAttributName, objet.id, {
                                photo: 'data:image/jpeg;base64,' + imageData,
                                requete: "http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                                    "insert into photoparcelles (photo,idparcelle,typephoto) " +
                                    "values (" +
                                    "" + "'postBody'" + "," +
                                    "" + _this.adaptValueQuery(objet.id, "number") + "," +
                                    "" + _this.adaptValueQuery(photoAttributName, "text") + "" +
                                    ")",
                                sent: false
                            });
                        }
                    });
                }, function (err) {
                    console.log(err.toString());
                });
                return [2 /*return*/];
            });
        });
    };
    CameraProvider.prototype.adaptValueQuery = function (value, type) {
        var retour = null;
        if (!value) {
            if (type == "text") {
                retour = "''";
            }
            else {
                retour = "";
            }
        }
        else {
            if (type == "text") {
                retour = "'" + value + "'";
            }
            else {
                retour = value;
            }
        }
        return retour;
    };
    CameraProvider.prototype.getStatusMessage = function (event) {
        var status;
        switch (event.type) {
            case __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].Sent:
                return "Uploading Files";
            case __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].UploadProgress:
                status = Math.round(100 * event.loaded / event.total);
                this.uploadProgress.next(status);
                return "Files are " + status + "% uploaded";
            case __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].DownloadProgress:
                status = Math.round(100 * event.loaded / event.total);
                this.downloadProgress.next(status); // NOTE: The Content-Length header must be set on the server to calculate this
                return "Files are " + status + "% downloaded";
            case __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].Response:
                return "Done";
            default:
                return "Something went wrong";
        }
    };
    CameraProvider.prototype.resetProgress = function () {
        this.uploadProgress.next(0);
        this.downloadProgress.next(0);
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
            __WEBPACK_IMPORTED_MODULE_5__stockage_stockage__["a" /* StockageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path_ngx__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostMappingToolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wellknown__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wellknown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_wellknown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_proj4__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PostMappingToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostMappingToolsPage = /** @class */ (function () {
    function PostMappingToolsPage(navCtrl, navParams, httpClient) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.a = document.createElement('a');
        this.a.href = "data:application/octet-stream,";
        this.a.download = 'updateComp3.command';
        this.b = document.createElement('a');
        this.b.href = "data:application/octet-stream,";
        this.b.download = 'updatePrincipal3.command';
        this.c = document.createElement('a');
        //let data = JSON.parse('').data;
        var data;
        this.c.href = "data:application/octet-stream,";
        //this.avancementSociete();
        var formData = new FormData();
        formData.append("fonction", "loadObjetsOrganisme");
        formData.append("id_metier", "9");
        formData.append("offset", "0");
        formData.append("cat", "DAR-BET");
        formData.append("geometry", "GEOM_POLYGON");
        formData.append("categorie_user", "DAR-BET");
        formData.append("approuve", "");
        formData.append("province", "");
        formData.append("filter", "false");
        formData.append("filterPartage", "0");
        formData.append("id_organisme", "54");
        this.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php", formData).subscribe(function (data) {
            data = JSON.parse('[["1443643","","F\u00e8s","1327257.8051",null,"156","1353","54","CONTROLE","Mhassni Mohammed","MHASSNI","2019-11-20 15:23:22","MULTIPOLYGON(((-1.99564931528638 33.9991082688164,-1.99573035693684 33.9991293019457,-1.99574948885218 33.9990690086523,-1.99566964990359 33.9990424411905,-1.99564931528638 33.9991082688164)))","0","0","539",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","0",null,null,"","","QR176627","","ii","","","","","","","","","","","","","","","","","","","","","","","","",""],["1443644","","F\u00e8s","155211.6581",null,"156","1353","54","CONTROLE","Mhassni Mohammed","MHASSNI","2019-11-07 19:47:04","MULTIPOLYGON(((-1.99564931528638 33.9991082688164,-1.99573035693684 33.9991293019457,-1.99574948885218 33.9990690086523,-1.99566964990359 33.9990424411905,-1.99564931528638 33.9991082688164)))","0","0","539",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","0",null,null,"","","QR176628","","","iuhi","","h","","","","","","","","","","","","","","","","","","","","","",""],["1448986","","F\u00e8s","497435.4498",null,"156","1353","54","CONTROLE","Mhassni Mohammed","MHASSNI","2019-11-07 19:47:06","MULTIPOLYGON(((-1.99564931528638 33.9991082688164,-1.99573035693684 33.9991293019457,-1.99574948885218 33.9990690086523,-1.99566964990359 33.9990424411905,-1.99564931528638 33.9991082688164)))","0","0","539",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","0",null,null,"","","QR181263","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["1448992","","F\u00e8s",null,null,"156","1353","54","CONTROLE","Mhassni Mohammed","MHASSNI","2019-11-07 19:47:08","MULTIPOLYGON(((-2.00779637577921 33.9982315690322,-2.00743225203984 33.9984303932359,-2.00668753116764 33.9974333843935,-2.00696824950692 33.9973516554205,-2.00779637577921 33.9982315690322)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-3","3","QR71255","Ayant droit","\u0639\u0627\u0645\u0631\u0629 \u0627\u0644\u0643\u064a\u062d\u0644","AMRA EL KIHAL","FD9757","Femme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","MSAKHSKHA","T.C","0.4214","Non","N\u00e9ant","N\u00e9ant","","","","","",""],["1448993","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:10","MULTIPOLYGON(((-2.00695897892835 33.9973543544902,-2.00679861365898 33.9974010436793,-2.00669896391569 33.9972873727291,-2.00681765308702 33.997206817547,-2.00695897892835 33.9973543544902)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-4","4","QR71256","Ayant droit","\u0627\u062d\u0645\u062f \u0628\u0646\u0633\u0639\u062f\u0648\u0646","","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","MSAKHSKHA","T.N","0.0267","Non","N\u00e9ant","N\u00e9ant","manque CIN","","",null,null,null],["1448994","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:12","MULTIPOLYGON(((-1.99536303448701 33.9988291735476,-1.99530043908564 33.998981553451,-1.99539080886058 33.999020254263,-1.99544220169882 33.9988607125332,-1.99536303448701 33.9988291735476)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-5","5","QR71257","Ayant droit","\u0631\u0634\u064a\u062f \u0628\u0646\u0633\u0639\u062f\u0648\u0646","RACHID BENSAADOUN","FD22129","Homme","JERADA","BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","BNI MATHAR","","0.0162","Non","N\u00e9ant","N\u00e9ant","manque CIN","","",null,null,null],["1448995","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:14","MULTIPOLYGON(((-2.00848345522932 33.9988915545072,-2.00825246350356 33.9986334397937,-2.00844135444097 33.9985050456619,-2.00851140177452 33.9985849436768,-2.00867767670704 33.9984742168248,-2.00874639820581 33.9985431252394,-2.00878807857089 33.9985152186697,-2.00888906708295 33.998621993723,-2.00848345522932 33.9988915545072)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-7","7","QR71259","Ayant droit","\u0639\u0627\u0634\u0648\u0631\u064a \u0627\u0646\u0639\u064a\u0645\u064a","ACHOURI NAIMI","FD6531","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","OUI","975787","AIN BENI MATHAR","T.N","0.1456","Non","N\u00e9ant","N\u00e9ant","","","",null,null,null],["1448996","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:16","MULTIPOLYGON(((-1.9955752743477 33.9988717913855,-1.9955948393668 33.9987816445999,-1.99551619775204 33.9987643398398,-1.995433910778 33.9990145234475,-1.99552068662557 33.999052052768,-1.9955752743477 33.9988717913855)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-9","9","QR71261","Ayant droit","\u0639\u0627\u0634\u0648\u0631\u064a \u0627\u0646\u0639\u064a\u0645\u064a","ACHOURI NAIMI","FD6531","Homme","JERADA","BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","OUI","975787","AIN BENI MATHAR","T.N","0.0245","Non","N\u00e9ant","N\u00e9ant","","","",null,null,null],["1448997","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:18","MULTIPOLYGON(((-1.99596461401884 33.9992625283638,-1.99604348926538 33.9992910273721,-1.99612337044914 33.9990811999304,-1.99604174608715 33.9990625963831,-1.99596461401884 33.9992625283638)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-162","12","QR71227","Tiers","\u0645\u062d\u0645\u062f \u0628\u0627\u062f\u0629","MOHAMED BADA","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H+T.N","0.0189","Non","N\u00e9ant","Logement","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 1188254","","",null,null,null],["1448998","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:19","MULTIPOLYGON(((-1.99536303448701 33.9988291735476,-1.99530043908564 33.998981553451,-1.99539080886058 33.999020254263,-1.99544220169882 33.9988607125332,-1.99536303448701 33.9988291735476)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-163","13","QR71228","Tiers","\u0628\u0648\u062c\u0645\u0639\u0629 \u062d\u0645\u064a\u062f\u0627\u062a","BOUJEMAA HMIDAT","F710728","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H","0.0157","Non","N\u00e9ant","Logement","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 1188254","","",null,null,null],["1448999","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:22","MULTIPOLYGON(((-1.99167451672919 33.9970599900471,-1.99145072216803 33.997054982639,-1.99144677285971 33.9967947309059,-1.9916696244402 33.9967986299478,-1.99167451672919 33.9970599900471)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-164","14","QR71229","Tiers","\u062d\u0633\u0646 \u0628\u0646\u0633\u0639\u062f","HASSAN BENSAAD","FD2567","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","T.N","0.0597","Non","N\u00e9ant","Logement","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 1188254","","",null,null,null],["1449000","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:24","MULTIPOLYGON(((-2.00642852080772 33.9967850953069,-2.00631993675349 33.9968570385112,-2.00626657218336 33.9967728575355,-2.00635816629814 33.9967109901463,-2.00642852080772 33.9967850953069)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-165","15","QR71230","Tiers","\u0628\u062d\u0648\u0635 \u0628\u0646\u0633\u0639\u062f","BAHOUS BENSAAD","FD12236","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H","0.0118","Non","N\u00e9ant","Logement","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 1188254","","",null,null,null],["1449001","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:25","MULTIPOLYGON(((-2.00848345522932 33.9988915545072,-2.00825246350356 33.9986334397937,-2.00844135444097 33.9985050456619,-2.00851140177452 33.9985849436768,-2.00867767670704 33.9984742168248,-2.00874639820581 33.9985431252394,-2.00878807857089 33.9985152186697,-2.00888906708295 33.998621993723,-2.00848345522932 33.9988915545072)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-166","16","QR71231","Tiers","\u0639\u0628\u062f \u0627\u0644\u0646\u0628\u064a \u0628\u0648\u062e\u0644\u062e\u0627\u0644","ABDENBI BOUKHALKHAL","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H+T.C","0.1377","Non","Puit","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 1188254","","",null,null,null],["1449002","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:27","MULTIPOLYGON(((-2.00794836422612 33.9991058894386,-2.00743225203984 33.9984303932359,-2.00779637577921 33.9982315690322,-2.00839670116877 33.9989277143246,-2.00794836422612 33.9991058894386)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-167","17","QR71232","Tiers","\u0628\u062d\u0648\u0635 \u0628\u0646\u0633\u0639\u062f","BAHOUS BENSAAD","F55615","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H+T.C","0.3944","Non","Puit","N\u00e9ant","","","",null,null,null],["1449003","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:30","MULTIPOLYGON(((-2.00848345522932 33.9988915545072,-2.00825246350356 33.9986334397937,-2.00844135444097 33.9985050456619,-2.00851140177452 33.9985849436768,-2.00867767670704 33.9984742168248,-2.00874639820581 33.9985431252394,-2.00878807857089 33.9985152186697,-2.00888906708295 33.998621993723,-2.00848345522932 33.9988915545072)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-170","20","QR71235","Tiers","\u0639\u0634\u0648\u0631 \u0628\u0627\u062f\u0629","ACHOUR BADDA","FL47268","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H","0.1331","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 1650432","","",null,null,null],["1449004","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:32","MULTIPOLYGON(((-1.99590223375103 33.9990259169343,-1.99584498727708 33.9991991225713,-1.99596461401884 33.9992625283638,-1.99604174608715 33.9990625963831,-1.99590223375103 33.9990259169343)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-171","21","QR71236","Tiers","\u0639\u0643\u0634\u0629 \u0644\u0643\u0631\u064a\u0639\u064a","OUKACHA LAGRAI","FL5715","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","TENDRARA","T.N","0.0297","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 1650432","","",null,null,null],["1449005","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:34","MULTIPOLYGON(((-1.99536303448701 33.9988291735476,-1.99530043908564 33.998981553451,-1.99539080886058 33.999020254263,-1.99544220169882 33.9988607125332,-1.99536303448701 33.9988291735476)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-172","22","QR71237","Tiers","\u0627\u062d\u0645\u062f \u0628\u0648\u062f\u0627\u0648\u062f","AHMED BOUDAOUD","FD30492","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H","0.0157","Non","N\u00e9ant","N\u00e9ant","","","",null,null,null],["1449006","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:35","MULTIPOLYGON(((-1.9968575783181 33.999004435861,-1.99681399619969 33.9991004266205,-1.99672882206298 33.9993110129149,-1.99664842849128 33.9996238393651,-1.99688313696957 33.9997320561837,-1.99693649792599 33.9997365646816,-1.99706828767547 33.9993301250208,-1.99715806195358 33.9990994254932,-1.9968575783181 33.999004435861)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-184","34","QR71249","Tiers","\u0627\u0644\u0645\u062c\u062f\u0648\u0628 \u0627\u0628\u0647\u0627\u0644\u064a\u0644","EL-MAJDOUB BHALIL","F176697","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H+T.N","0.2151","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449007","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:36","MULTIPOLYGON(((-1.99521954457676 33.9986391248572,-1.99532154587377 33.9986723673613,-1.99524962274509 33.9989234551531,-1.99522038463067 33.9990439801823,-1.99512624325476 33.9990047706958,-1.99519925757149 33.9987393935375,-1.99521954457676 33.9986391248572)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-185","35","QR71250","Tiers","\u0628\u0646 \u0639\u0637\u0627\u0634 \u0645\u062d\u0645\u062f\u064a\u0646","BEN-ATTACH MOHAMMADINE","FH1162","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H+T.N","0.0372","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449008","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:39","MULTIPOLYGON(((-1.99612337044914 33.9990811999304,-1.99622165585885 33.9988365485404,-1.99599509102913 33.9987782579673,-1.99590223375103 33.9990259169343,-1.99604174608715 33.9990625963831,-1.99612337044914 33.9990811999304)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-186","36","QR71251","Tiers","\u0627\u0644\u063a\u0631\u0627\u0633 \u0628\u0627\u062f\u0627 \u0648\u0645\u0646 \u0645\u0639\u0647","EL GHARAS BADA ET Cts","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0616","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449009","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:41","MULTIPOLYGON(((-1.99458770979351 33.9983126300494,-1.99452501578011 33.998484360734,-1.99461691542739 33.9985268481704,-1.99468261098275 33.9983545403913,-1.99458770979351 33.9983126300494)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-187","37","QR71252","Tiers","\u0646\u0639\u064a\u0645\u0629 \u062d\u0645\u0648","NAIMA HAMOU","Manque CIN","Femme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.019","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449010","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:44","MULTIPOLYGON(((-1.9955752743477 33.9988717913855,-1.99566437676243 33.9989008122421,-1.99563287950164 33.9990021477358,-1.9955444809703 33.9989734783917,-1.9955752743477 33.9988717913855)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-188","38","QR71253","Tiers","\u0645\u0627\u0645\u0629 \u062d\u0645\u0648","MAMA HAMOU","Manque CIN","Femme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0102","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449011","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:47","MULTIPOLYGON(((-1.9951336529081 33.9986105608837,-1.99511126400143 33.998713046147,-1.99519925757149 33.9987393935375,-1.99521954457676 33.9986391248572,-1.9951336529081 33.9986105608837)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-189","39","QR71254","Tiers","\u0627\u0644\u0646\u0627\u0635\u0631 \u062d\u0645\u0648","ENASER HAMOU","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0096","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787. 1669465","","",null,null,null],["1449012","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:50","MULTIPOLYGON(((-1.99551619775204 33.9987643398398,-1.9955948393668 33.9987816445999,-1.99563842611641 33.9986725713684,-1.9955552861451 33.9986509126973,-1.99551619775204 33.9987643398398)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-190","40","QR71255","Tiers","\u062d\u0645\u0648 \u064a\u0627\u0645\u0646\u0629","HAMOU YAMNA","Manque CIN","Femme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.01","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449013","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:52","MULTIPOLYGON(((-1.99521954457676 33.9986391248572,-1.99532154587377 33.9986723673613,-1.99524962274509 33.9989234551531,-1.99522038463067 33.9990439801823,-1.99512624325476 33.9990047706958,-1.99519925757149 33.9987393935375,-1.99521954457676 33.9986391248572)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-191","41","QR71256","Tiers","\u0639\u0628\u062f \u0627\u0644\u0642\u0627\u062f\u0631 \u0627\u0644\u062f\u0647\u0628\u064a","ABDELKADER EDAHBI","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0385","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449014","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:54","MULTIPOLYGON(((-1.99521954457676 33.9986391248572,-1.99532154587377 33.9986723673613,-1.99524962274509 33.9989234551531,-1.99522038463067 33.9990439801823,-1.99512624325476 33.9990047706958,-1.99519925757149 33.9987393935375,-1.99521954457676 33.9986391248572)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-192","42","QR71257","Tiers","\u0627\u0644\u0645\u064a\u0644\u0648\u062f \u062d\u0645\u0648","EL-MILOUD HAMMOU","F191036","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","H+T.N","0.0376","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787. 1669465","","",null,null,null],["1449015","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:56","MULTIPOLYGON(((-1.9955752743477 33.9988717913855,-1.99566437676243 33.9989008122421,-1.99572612450051 33.9987012021397,-1.99563842611641 33.9986725713684,-1.9955948393668 33.9987816445999,-1.9955752743477 33.9988717913855)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-193","43","QR71258","Tiers","\u0645\u062d\u0645\u062f \u062d\u0645\u0648","MOHAMED HAMOU","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0208","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787. 1669465","","",null,null,null],["1449016","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:57","MULTIPOLYGON(((-1.99168179089571 33.9974141779232,-1.99167960863628 33.9973278609613,-1.9914574049039 33.9973234292169,-1.99146543040667 33.9974107352995,-1.99168179089571 33.9974141779232)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-194","44","QR71259","Tiers","\u0625\u0628\u0631\u0627\u0647\u064a\u0645 \u0633\u0631\u0641\u0627\u0642\u0629","BRAHIM SERFAKA","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0195","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449017","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:47:59","MULTIPOLYGON(((-2.00899311110124 33.9981491785799,-2.00914374884584 33.9980418804723,-2.00921353861705 33.9981106190621,-2.00905819062711 33.9982156423273,-2.00899311110124 33.9981491785799)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-195","45","QR71260","Tiers","\u0641\u0627\u0637\u0646\u0629 \u0633\u0631\u0641\u0627\u0642\u0629","FATNA SERFAKA","Manque CIN","Femme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0179","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449018","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:01","MULTIPOLYGON(((-2.00886342756469 33.998230291509,-2.00892984015904 33.998303955444,-2.00905819062711 33.9982156423273,-2.00899311110124 33.9981491785799,-2.00886342756469 33.998230291509)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-196","46","QR71261","Tiers","\u0645\u062d\u0645\u062f \u0646\u0627\u062c\u0645\u064a","MOHAMED NAJMI","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0148","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449019","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:03","MULTIPOLYGON(((-1.99671813671329 33.9989714766173,-1.9968575783181 33.999004435861,-1.99681399619969 33.9991004266205,-1.99672882206298 33.9993110129149,-1.99656880947399 33.999282439044,-1.99671813671329 33.9989714766173)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-197","47","QR71262","Tiers","\u0627\u0644\u0639\u0631\u0628\u064a \u0642\u0627\u0638\u0641\u064a","LARBI KADFI","FD14063","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","T.N","0.0506","Non","Ecurie","Constructions","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449020","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:05","MULTIPOLYGON(((-1.9916696244402 33.9967986299478,-1.99144677285971 33.9967947309059,-1.99144307112656 33.9967073890808,-1.99166665897347 33.9967121202196,-1.9916696244402 33.9967986299478)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-198","48","QR71263","Tiers","\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0627\u0646 \u0627\u0639\u0632\u064a\u0632\u064a","ABDERRAHMANE AZIZI","FD19581","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","T.N","0.0198","Non","N\u00e9ant","Constructions","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449021","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:07","MULTIPOLYGON(((-1.99168179089571 33.9974141779232,-1.99167960863628 33.9973278609613,-1.9914574049039 33.9973234292169,-1.99146543040667 33.9974107352995,-1.99168179089571 33.9974141779232)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-199","49","QR71264","Tiers","\u0623\u062d\u0645\u062f\u0627\u062d\u0645\u064a\u062f\u0627\u062a","AHMED HMIDAT","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0195","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449022","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:09","MULTIPOLYGON(((-1.99167960863628 33.9973278609613,-1.9914574049039 33.9973234292169,-1.99145319145 33.9971455751969,-1.99167706376151 33.997150539596,-1.99167960863628 33.9973278609613)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-200","50","QR71265","Tiers","\u0639\u062f\u064a\u0644 \u062d\u0645\u0648\u0648 \u0645\u0646 \u0645\u0639\u0647","ADIL HAMOU ET CTs","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0403","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449023","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:11","MULTIPOLYGON(((-1.99167451672919 33.9970599900471,-1.99167706376151 33.997150539596,-1.99145319145 33.9971455751969,-1.99145072216803 33.997054982639,-1.99167451672919 33.9970599900471)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-201","51","QR71266","Tiers","\u0639\u0645\u0627\u0645\u0648 \u062d\u0645\u0648","AMAMOU HAMOU","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0207","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449024","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:13","MULTIPOLYGON(((-1.99167451672919 33.9970599900471,-1.99145072216803 33.997054982639,-1.99144677285971 33.9967947309059,-1.9916696244402 33.9967986299478,-1.99167451672919 33.9970599900471)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-202","52","QR71267","Tiers","\u0645\u062d\u0645\u062f \u062d\u0645\u0648","MOHAMED HAMOU","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0599","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449025","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:16","MULTIPOLYGON(((-1.99536303448701 33.9988291735476,-1.99544220169882 33.9988607125332,-1.99551534764055 33.9986361847467,-1.99543663838303 33.9986089981879,-1.99536303448701 33.9988291735476)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-203","53","QR71268","Tiers","\u062d\u0627\u0643\u0645\u064a \u0641\u0627\u0637\u0646\u0629","HAKMI FATNA","Manque CIN","Femme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0201","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449026","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:17","MULTIPOLYGON(((-1.99167451672919 33.9970599900471,-1.99145072216803 33.997054982639,-1.99144677285971 33.9967947309059,-1.9916696244402 33.9967986299478,-1.99167451672919 33.9970599900471)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-209","59","QR71274","Tiers","\u0645\u062d\u0645\u062f \u0627\u0644\u0628\u062f\u0648\u064a","MOHAMMED ELBADAOUI","FL50150","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","TENDRARA","T.N","0.0583","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449027","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:19","MULTIPOLYGON(((-1.9955444809703 33.9989734783917,-1.99563287950164 33.9990021477358,-1.99560801620623 33.9990740689368,-1.99552068662557 33.999052052768,-1.9955444809703 33.9989734783917)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-210","60","QR71275","Tiers","\u0639\u0628\u062f \u0627\u0644\u0642\u0627\u062f\u0631 \u0627\u0644\u0628\u062f\u0648\u064a","ABDELKADER EL-BADAOUI","FL14221","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","TENDRARA","T.N","0.007","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449028","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:21","MULTIPOLYGON(((-1.99590223375103 33.9990259169343,-1.99584498727708 33.9991991225713,-1.99596461401884 33.9992625283638,-1.99604174608715 33.9990625963831,-1.99590223375103 33.9990259169343)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-211","61","QR71276","Tiers","\u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0627\u0646 \u0627\u0644\u0628\u062f\u0648\u064a","ABDERRAHMANE EL BADAOUI","FL5809","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","TENDRARA","T.N","0.0283","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449029","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:23","MULTIPOLYGON(((-1.99629031540429 33.9991626014378,-1.99626059734503 33.9992507896143,-1.9963404549991 33.9992589900454,-1.99634409668015 33.9991693682835,-1.99629031540429 33.9991626014378)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-212","62","QR71277","Tiers","\u0641\u0627\u0637\u0646\u0629 \u0627\u0644\u0628\u062f\u0627\u0648\u064a","FATNA EL-BADAOUI","Manque CIN","Femme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.006","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449030","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:25","MULTIPOLYGON(((-1.9955444809703 33.9989734783917,-1.99563287950164 33.9990021477358,-1.99560801620623 33.9990740689368,-1.99552068662557 33.999052052768,-1.9955444809703 33.9989734783917)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-213","63","QR71278","Tiers","\u0628\u0644\u0642\u0627\u0633\u0645 \u0627\u0644\u0628\u062f\u0627\u0648\u064a","BELKACEM EL-BADAOUI","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0081","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449031","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:27","MULTIPOLYGON(((-1.99551619775204 33.9987643398398,-1.9955948393668 33.9987816445999,-1.99563842611641 33.9986725713684,-1.9955552861451 33.9986509126973,-1.99551619775204 33.9987643398398)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-214","64","QR71279","Tiers","\u0627\u0639\u0645\u0631 \u0627\u0644\u0628\u062f\u0627\u0648\u064a","AMAR EL BADAOUI","FL53200","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","TENDRARA","T.N","0.01","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449032","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:28","MULTIPOLYGON(((-1.99472922130236 33.9983563038627,-1.99468580356325 33.9984676731904,-1.99484115173403 33.9985204029342,-1.99488866686082 33.9984219572518,-1.99472922130236 33.9983563038627)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-215","65","QR71280","Tiers","\u0639\u0628\u062f \u0627\u0644\u062c\u0628\u0627\u0631 \u0642\u062f\u0648\u0631\u064a","ABDELJEBBAR KADDOURI","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0197","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787. 1669465","","",null,null,null],["1449033","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:31","MULTIPOLYGON(((-2.00886342756469 33.998230291509,-2.00877808786774 33.9982929624959,-2.00884133870208 33.99836103702,-2.00892984015904 33.998303955444,-2.00886342756469 33.998230291509)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-216","66","QR71281","Tiers","\u064a\u0627\u0633\u064a\u0646 \u0627\u0644\u0628\u062f\u0648\u064a","YASSINE EL BADAOUI","FL78195","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","TENDRARA","T.N","0.0104","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787. 1669465","","",null,null,null],["1449034","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:32","MULTIPOLYGON(((-1.9955752743477 33.9988717913855,-1.9955948393668 33.9987816445999,-1.99551619775204 33.9987643398398,-1.995433910778 33.9990145234475,-1.99552068662557 33.999052052768,-1.9955752743477 33.9988717913855)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-217","67","QR71282","Tiers","\u0645\u062d\u0645\u062f \u0627\u0644\u0628\u062f\u0627\u0648\u064a \u0648 \u0627\u062d\u0645\u062f \u0627\u0644\u0628\u062f\u0648\u064a","MOHAMMED EL BADAOUI ET AHMED EL BADAOUI","FL74233,FL7143","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","","T.N","0.0256","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8re sous le num\u00e9ro 975787","","",null,null,null],["1449035","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:34","MULTIPOLYGON(((-1.99458770979351 33.9983126300494,-1.99452501578011 33.998484360734,-1.99461691542739 33.9985268481704,-1.99468261098275 33.9983545403913,-1.99458770979351 33.9983126300494)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-218","68","QR71283","Tiers","\u0631\u0634\u064a\u062f \u0627\u0644\u0628\u062f\u0627\u0648\u064a, \u0644\u0641\u0636\u064a\u0644 \u0627\u0644\u0628\u062f\u0627\u0648\u064a \u0648 \u0633\u0644\u064a\u0645\u0627\u0646 \u0627\u0644\u0628\u062f\u0627\u0648\u064a","RACHID EL BADAOUI, LAFDIL ELBADAOUI ET SLIMANE  EL BADAOUI","F633751,F535079,FL791","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","T.N","0.0191","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des ayants droits sous le num\u00e9ro 975787","","",null,null,null],["1449036","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:36","MULTIPOLYGON(((-1.99536303448701 33.9988291735476,-1.99530043908564 33.998981553451,-1.99539080886058 33.999020254263,-1.99544220169882 33.9988607125332,-1.99536303448701 33.9988291735476)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-219","69","QR71284","Tiers","\u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0627\u0646 \u0627\u0644\u0628\u062f\u0648\u064a \u0648 \u062d\u0644\u064a\u0645\u0629 \u0627\u0644\u0628\u064a\u0636\u064a","ABDERRAHMANE EL BADAOUI ET HALIMA EL BAYADI","FL1204,FD20005","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","T.N","0.0161","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des ayants droits sous le num\u00e9ro 975787","","",null,null,null],["1449037","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:38","MULTIPOLYGON(((-1.98531205772858 33.9697953942417,-1.98531762892805 33.9700257195687,-1.98523982815422 33.9700245870232,-1.98414230307494 33.9698652440911,-1.98418655435235 33.9695967937306,-1.98496105140465 33.9697617268206,-1.9851726244849 33.9697932124033,-1.98531205772858 33.9697953942417)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-37","37","QR77685","Ayant droit","\u0628\u0648\u0639\u0644\u0627\u0645 \u0645\u0646\u0635\u0648\u0631\u064a \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629","BOUALEM MENSOURI ET LE RESTE DES HERITIERS","FD3573","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","AIN BENI MATHAR","T.C","0.2916","Non","N\u00e9ant","N\u00e9ant","Manque CIN","","",null,null,null],["1449038","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:40","MULTIPOLYGON(((-1.98537634959286 33.970339162776,-1.98400195200464 33.9702518618263,-1.98414230307494 33.9698652440911,-1.98523982815422 33.9700245870232,-1.98531762892805 33.9700257195687,-1.98535576059385 33.9702597299359,-1.98537634959286 33.970339162776)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-38","38","QR77686","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0642\u0627\u062f\u0631 \u062a\u0645\u0646\u0627\u0646\u064a \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629","ABDELKADER TEMNANI ET LE RESTE DES HERITIERS","F113170","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","AIN BENI MATHAR","T.C","0.4401","Non","N\u00e9ant","N\u00e9ant","","","",null,null,null],["1449039","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:42","MULTIPOLYGON(((-2.00794836422612 33.9991058894386,-2.00743225203984 33.9984303932359,-2.00779637577921 33.9982315690322,-2.00839670116877 33.9989277143246,-2.00794836422612 33.9991058894386)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-41","41","QR77689","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0627\u0646 \u0645\u0646\u0635\u0648\u0631\u064a \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629","ABDERRAHMANE MANSOURI ET LE RESTE DES HERITIERS","FD7805","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","AIN BENI MATHAR","T.C","0.4007","Non","N\u00e9ant","N\u00e9ant","Manque CIN","","",null,null,null],["1449040","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:43","MULTIPOLYGON(((-1.98333396196152 33.9716927604263,-1.98306570263965 33.9717188337776,-1.98311373348635 33.9714584812668,-1.98326952355858 33.971449541069,-1.98543340720919 33.9712387949756,-1.98554783318128 33.9713704084403,-1.98333396196152 33.9716927604263)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-42","42","QR77690","Ayant droit","\u0639\u0645\u0627\u0631 \u062a\u0645\u0646\u0627\u0646\u064a \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629","OMAR TEMNANI ET LE RESTE DES HERITIERS","F110005","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","AIN BENI MATHAR","T.C","0.5042","Non","N\u00e9ant","N\u00e9ant","","","",null,null,null],["1449041","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:45","MULTIPOLYGON(((-1.98543340720919 33.9712387949756,-1.98326952355858 33.971449541069,-1.98311373348635 33.9714584812668,-1.98312475124817 33.9712112755657,-1.98340772571 33.9711998236969,-1.98472884098397 33.9711236300257,-1.98532994966381 33.9711013508803,-1.98543340720919 33.9712387949756)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-43","43","QR77691","Ayant droit","\u0628\u0648\u0639\u0644\u0627\u0645 \u0645\u0646\u0635\u0648\u0631\u064a \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629","BOUALEM MENSOURI ET LE RESTE DES HERITIERS","FD3573","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","AIN BENI MATHAR","T.C","0.4682","Non","N\u00e9ant","N\u00e9ant","Manque CIN","","",null,null,null],["1449042","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:48","MULTIPOLYGON(((-1.98537634959286 33.970339162776,-1.98400195200464 33.9702518618263,-1.98414230307494 33.9698652440911,-1.98523982815422 33.9700245870232,-1.98531762892805 33.9700257195687,-1.98535576059385 33.9702597299359,-1.98537634959286 33.970339162776)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-44","44","QR77692","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0642\u0627\u062f\u0631 \u062a\u0645\u0646\u0627\u0646\u064a \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629","ABDELKADER TEMNANI ET LE RESTE DES HERITIERS","F113170","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","AIN BENI MATHAR","T.C","0.4413","Non","N\u00e9ant","N\u00e9ant","Manque CIN","","",null,null,null],["1449043","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:49","MULTIPOLYGON(((-1.98288569441816 33.9723441413528,-1.98572941941281 33.971681276001,-1.98580268190945 33.971972091401,-1.98421312209033 33.9722639296511,-1.98293503778196 33.9725185487176,-1.98288569441816 33.9723441413528)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-45","45","QR77693","Ayant droit","\u0648\u0631\u062b\u0629 \u0645\u0646\u0635\u0648\u0631\u064a \u0645\u062d\u0645\u062f \u0648 \u0648\u0631\u062b\u0629 \u0645\u0646\u0635\u0648\u0631\u064a  \u0628\u0646\u0645\u0648\u0633\u0649","Htier EL MANSOURI MOHAMMED ET Cts","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","","T.C","0.7091","Non","N\u00e9ant","N\u00e9ant","Manque CIN","","",null,null,null],["1449044","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:51","MULTIPOLYGON(((-1.98288569441816 33.9723441413528,-1.98572941941281 33.971681276001,-1.98580268190945 33.971972091401,-1.98421312209033 33.9722639296511,-1.98293503778196 33.9725185487176,-1.98288569441816 33.9723441413528)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-46","46","QR77694","Ayant droit","\u0627\u0644\u0645\u062a\u0646\u0627\u0646\u064a \u0627\u0644\u0639\u064a\u062f","EL-METNANI LAID","F802094","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","AIN BENI MATHAR","T.C","0.6901","Non","N\u00e9ant","N\u00e9ant","Manque CIN","","",null,null,null],["1449045","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:53","MULTIPOLYGON(((-1.98586768434768 33.9722444609175,-1.98580268190945 33.971972091401,-1.98421312209033 33.9722639296511,-1.98293503778196 33.9725185487176,-1.98327759448304 33.9727967354665,-1.98400302139096 33.9726244179863,-1.98586768434768 33.9722444609175)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-49","49","QR77697","Ayant droit","\u0627\u062f\u0631\u064a\u0633 \u0645\u0646\u0635\u0648\u0631\u064a","DRISS MANSOURI","Manque CIN","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","NON","","","T.C","0.897","Non","N\u00e9ant","N\u00e9ant","","","",null,null,null],["1449046","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:55","MULTIPOLYGON(((-2.00814983879141 33.9719287871788,-2.0101203702508 33.9716703319399,-2.01017949912545 33.9720310579125,-2.01018572209792 33.972655937363,-2.01009926375209 33.9730042493953,-2.0079985537032 33.9733050414637,-2.00660544946116 33.9735529300497,-2.00575815673399 33.972208666086,-2.00814983879141 33.9719287871788)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-271","132","QR127375","Tiers","\u0639\u0628\u0627\u0633 \u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0627\u0646","ABBES ABDERRAHMANE","FD6317","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","DOUAR OULED BENYAACOUB","T.C","5.65","Non","N\u00e9ant","N\u00e9ant","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8res sous le num\u00e9ro 1301316.1391913","","",null,null,null],["1449047","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:57","MULTIPOLYGON(((-2.0101203702508 33.9716703319399,-2.00814983879141 33.9719287871788,-2.00575815673399 33.972208666086,-2.00485899996501 33.9707880272072,-2.00601537645244 33.9708205142213,-2.00680389212893 33.9708278457884,-2.00832754214408 33.9706435840502,-2.00860858953702 33.9705569895722,-2.00952663193709 33.9704200098036,-2.0099053793888 33.971181963225,-2.0101203702508 33.9716703319399)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"AD-JER-DA_247_P1-272","133","QR127376","Tiers","\u0639\u0628\u0627\u0633 \u0645\u062d\u0645\u062f","ABBES MOHAMED","F118292","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","MSAKHSKHA","Ferme","5.9911","Non","Panneaux solaires puit Ecurie","Logement","Inscrit dans la liste des exploitants irr\u00e9guli\u00e8res sous le num\u00e9ro 1301316","","",null,null,null],["1449048","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:48:59","MULTIPOLYGON(((-2.00154192437488 33.9651665216694,-1.99965415565063 33.9657397194964,-1.99911296519803 33.9658591088755,-1.99807902385764 33.9661259496214,-1.9985570401048 33.9667302398864,-1.99882741999375 33.967347393668,-1.99891627666349 33.967470181088,-1.99911649499912 33.9676772529882,-2.00132170266676 33.9669926398615,-2.00234313258392 33.96660010577,-2.00154192437488 33.9651665216694)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-276","137","QR127380","Tiers","\u0639\u0628\u0627\u0633 \u0646\u0648\u0631 \u0627\u0644\u062f\u064a\u0646","ABBES NOUR EDDINE","FD5161","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","T.C","6.0663","Non","N\u00e9ant","Logement","","","",null,null,null],["1449049","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:49:01","MULTIPOLYGON(((-1.99911649499912 33.9676772529882,-1.99923483486654 33.9677622593204,-1.99932626649581 33.968372286298,-1.99931405056073 33.9686225186171,-1.99937685366123 33.9692994570512,-2.00006167678945 33.9691124243979,-2.00321082601177 33.9681569973758,-2.00234313258392 33.96660010577,-2.00132170266676 33.9669926398615,-1.99911649499912 33.9676772529882)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-277","138","QR127381","Tiers","\u0639\u0628\u0627\u0633 \u0639\u0628\u062f \u0627\u0644\u0642\u0627\u062f\u0631","ABBES ABDELKADER","FD4782","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","T.C","6.3365","Non","N\u00e9ant","N\u00e9ant","","","",null,null,null],["1449050","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-07 19:49:03","MULTIPOLYGON(((-1.99911649499912 33.9676772529882,-1.99923483486654 33.9677622593204,-1.99932626649581 33.968372286298,-1.99931405056073 33.9686225186171,-1.99937685366123 33.9692994570512,-2.00006167678945 33.9691124243979,-2.00321082601177 33.9681569973758,-2.00234313258392 33.96660010577,-2.00132170266676 33.9669926398615,-1.99911649499912 33.9676772529882)))","0","0","1585",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","83",null,null,"T-JER-DA_247_P1-278","139","QR127382","Tiers","\u0639\u0628\u0627\u0633 \u0627\u0645\u0628\u0627\u0631\u0643","ABBES MBAREK","FH1622","Homme","JERADA","AIN BENI MATHAR","BENI MATHAR","BENI MATHAR","DA 247 P1","","BENI MATHAR IV","MSAKHSKHA","Non","","AIN BENI MATHAR","T.C","6.1863","Non","N\u00e9ant","N\u00e9ant","","","",null,null,null],["1449709","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:02:51","MULTIPOLYGON(((-6.43478213053103 34.352438083034,-6.43496971710402 34.3533281888872,-6.43528143569232 34.3532729020672,-6.43510446053513 34.3523797565384,-6.43478213053103 34.352438083034)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-19","688","QR149615","Ayant droit","1-\u0627\u0644\u062e\u0637\u0627\u0628 \u0643\u0639\u064a\u0648\u0629 \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629 2 -\u0645\u062d\u0645\u062f \u0643\u0639\u064a\u0648\u0629","1-Elkhattab Kaioua et le Reste des H\u00e9ritiers  2-Mohamed Kaioua","1-G348810 ","2-H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2900","OUI","","","Echange avec Mohamed Kioua Nayab",null,null,null,null,null],["1449710","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:02:52","MULTIPOLYGON(((-6.43528143569232 34.3532729020672,-6.43551503619921 34.3532293392804,-6.43530863623335 34.3523428099188,-6.43510446053513 34.3523797565384,-6.43528143569232 34.3532729020672)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-20","689","QR149616","Ayant droit","1- \u0627\u0644\u0639\u0631\u0628\u064a \u0627\u0643\u0639\u064a\u0648\u0629 2- \u0645\u0646\u0635\u0648\u0631 \u0627\u0643\u0639\u064a\u0648\u0629 3-\u0639\u0628\u062f \u0627\u0644\u0644\u0637\u064a\u0641 \u0627\u0643\u0639\u064a\u0648\u0629","1-Larbi Kaioua 2-Mansour Kaioua 3-Abdelatif Kaioua","1-G228371 2-G311427","","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.1950","OUI","","","",null,null,null,null,null],["1449711","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:02:53","MULTIPOLYGON(((-6.43551503619921 34.3532293392804,-6.43569449249821 34.3531920918021,-6.43551799865673 34.3523049243578,-6.43530863623335 34.3523428099188,-6.43551503619921 34.3532293392804)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-21","690","QR149617","Ayant droit"," \u0643\u0639\u064a\u0648 \u0645\u064a\u0644\u0648\u062f","Kaaiou Miloud ","G37108 ","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.1819","OUI","","","",null,null,null,null,null],["1449712","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:02:54","MULTIPOLYGON(((-6.43569449249821 34.3531920918021,-6.43624681640909 34.3530845610709,-6.43608084767881 34.3522030710863,-6.43551799865673 34.3523049243578,-6.43569449249821 34.3531920918021)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-22","691","QR149618","Ayant droit","1-\u0639\u064a\u0627\u0634 \u0627\u0644\u062e\u064a\u0627\u0637\u064a- 2-\u0628\u0646 \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062e\u064a\u0627\u0637\u064a","1-Ayach Khayati 2-Benchikh Khayati","1-G301154 2-G258316 ","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.5128","OUI","","","1- Echange avec H\u00e9ritiers Mohamed 2-Acheter de darkal Jalal et Echange avec darkal",null,null,null,null,null],["1449713","","F\u00e8s",null,null,"156","1353","54","CONTROLE","Mhassni Mohammed","MHASSNI","2019-11-20 16:02:55","MULTIPOLYGON(((-6.43624681640909 34.3530845610709,-6.43653036480941 34.353029376882,-6.43636020274305 34.3521525179123,-6.43608084767881 34.3522030710863,-6.43624681640909 34.3530845610709)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-23","692","QR149619","Ayant droit","1-\u0627\u0644\u0628\u063a\u062f\u0627\u062f\u064a \u0627\u0644\u0645\u0639\u0637\u064a 2 - \u0648\u0631\u062b\u0629 \u0627\u0644\u0628\u063a\u062f\u0627\u062f\u064a \u0645\u062d\u0645\u062f","1-Beghdadi Maati 2- H\u00e9ritiers Beghdadi Mohamed","1-G27047","1-H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2583","OUI","","","","","","","",""],["1449714","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:02:57","MULTIPOLYGON(((-6.43653036480941 34.353029376882,-6.43743288670757 34.3528789922198,-6.43722869721445 34.3519953474437,-6.43636020274305 34.3521525179123,-6.43653036480941 34.353029376882)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-24","693","QR149620","Ayant droit","\u0643\u0639\u064a\u0648\u0629 \u0628\u0646\u0639\u064a\u0633\u0649","Kaioua Benaissa","G227626","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.8117","OUI","","","",null,null,null,null,null],["1449715","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:02:58","MULTIPOLYGON(((-6.43743288670757 34.3528789922198,-6.43797493163061 34.3527840903033,-6.43826989637121 34.3527037496701,-6.43803059456665 34.3518673745174,-6.43722869721445 34.3519953474437,-6.43743288670757 34.3528789922198)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-25","694","QR149621","Ayant droit","1-\u0643\u0639\u064a\u0648\u0627 \u0645\u062d\u0645\u062f 2-\u0643\u0639\u064a\u0648\u0629 \u0645\u064a\u0644\u0648\u062f 3-\u0643\u0639\u064a\u0648\u0627 \u0639\u0628\u062f \u0627\u0644\u0642\u0627\u062f\u0631 4-\u0631\u0634\u064a\u062f \u0627\u0643\u0639\u064a\u0648\u0629 ","1-Kaioua Mohamed 2-Kaioua Miloud 3-Kaioua Abdelkader 4-Kaioua Rachid","1-G317622 2-G38261 3-G47102 4-G351879","1-H2-H3-H4-H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.7513","OUI","","","",null,null,null,null,null],["1449716","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:02:59","MULTIPOLYGON(((-6.43826989637121 34.3527037496701,-6.43957665560002 34.3524617006022,-6.43931810424518 34.3516013661656,-6.43882983420464 34.3517002303626,-6.43803059456665 34.3518673745174,-6.43826989637121 34.3527037496701)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-26","695","QR149622","Ayant droit","1-\u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0628\u0648\u063a\u0627\u0628\u0629 2 - \u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0645\u062d\u0645\u062f","1- Khiyati Boughaba 2-Khiyati Mohamed","1-G228479 2-GY11104","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","1.2010","OUI","Puits","","Echange avec El fanan+El khyati mohamed+miloud dbadba mohamed+bouazza+bousselham",null,null,null,null,null],["1449717","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:00","MULTIPOLYGON(((-6.43957665560002 34.3524617006022,-6.44021933653435 34.352341304921,-6.43999010102011 34.3514719377991,-6.43931810424518 34.3516013661656,-6.43957665560002 34.3524617006022)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-27","696","QR149623","Ayant droit","1-\u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0639\u064a\u0627\u0634  2-\u0628\u0646 \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062e\u064a\u0627\u0637\u064a","1-Khayati Ayach 2-Khayati Benchikh","1-G301154 2-G258316","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.6009","OUI","","","",null,null,null,null,null],["1449718","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:01","MULTIPOLYGON(((-6.44021933653435 34.352341304921,-6.44060637244394 34.3522753642423,-6.44039052191378 34.3513937772155,-6.43999010102011 34.3514719377991,-6.44021933653435 34.352341304921)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-28","697","QR149624","Ayant droit","1-\u0628\u062f\u0629 \u0628\u0646\u0639\u0627\u0634\u0631 2-\u0628\u062f\u0629 \u0645\u062d\u0645\u062f 3-\u0628\u062f\u0629 \u0631\u0636\u0648\u0627\u06464-\u0628\u062f\u0629 \u0645\u0646\u062a\u0635\u0631 5-\u0628\u062f\u0629 \u0627\u0644\u0639\u0631\u0628\u064a 6-\u0628\u062f\u0629 \u0627\u062d\u0645\u064a\u062f\u06297-\u0628\u062f\u0629 \u0645\u062d\u0645\u062f 8-\u0628\u062f\u0629 \u0627\u0644\u0631\u064a\u0627\u062d\u064a9-\u0628\u062f\u0629 \u0627\u062f\u0631\u064a\u0633 \u0628\u0646 \u0628\u0646\u0639\u0627\u0634\u063110-\u0648\u0631\u062b\u0629 \u0628\u062f\u0629 \u0645\u062d\u0645\u062f","1-Bedda Benachir 2-Bedda Mohamed 3-Bedda Redouan 4-Bedda Montasir 5-Bedda Larbi 6-Bedda Ahmida 7-Bedda Mohamed  8-Bedda Riahi 9-Bedda driss Benachir 10-H\u00e9ritiers Bedda Mohamed"," 4-G647391 5-G443501 6-G228627 7-G148231 8-G147472 ","1-H2-H3-H4-H5-H6-H7-H8-H9-H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.3682","OUI","","","",null,null,null,null,null],["1449719","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:02","MULTIPOLYGON(((-6.44060637244394 34.3522753642423,-6.44104864121196 34.3521843939935,-6.44126374692493 34.3521466091242,-6.44107598489697 34.3512904802654,-6.44039052191378 34.3513937772155,-6.44060637244394 34.3522753642423)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-29","698","QR149625","Ayant droit","1-\u0628\u062f\u0629 \u0627\u062d\u0645\u064a\u062f\u0629 2 - \u0628\u062f\u0629 \u062d\u0645\u064a\u062f 3-\u0628\u062f\u0629 \u0628\u062f\u0629 4-\u0628\u062f\u0629 \u0639\u0628\u062f \u0627\u0644\u0644\u0647 5-\u0628\u062f\u0629 \u0635\u0627\u0644\u062d 6-\u0648\u0631\u062b\u0629 \u0628\u062f\u0629 \u0639\u0644\u0627\u0644 7-\u0628\u062f\u0629 \u0645\u0635\u0637\u0641\u0649 8-\u0628\u062f\u0629 \u0646\u0648\u0631 \u0627\u0644\u062f\u064a\u0646 9-\u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0639\u0628\u062f \u0627\u0644\u0642\u0627\u062f\u0631","1-Bedda Ahmida 2-Bedda Hamid 3-Bedda bedda 4-Bedda Abdellah 5-Bedda Saleh 6-H\u00e9ritiers Bedda Allal 7-Bedda Mustapha 8-Bedda Nourdine 9-Khayati Abdelkader","1-G85413 ","1-H2-H3-H4-H5-H7-H8-H9-H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.6164","OUI","","","Echange avec h\u00e9ritiers El Khyati driss,Bada salah,abdellah,Allal et H\u00e9ritiers Boughaba Bada\\"\\"",null,null,null,null,null],["1449720","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:03","MULTIPOLYGON(((-6.44126374692493 34.3521466091242,-6.4415392315015 34.3520958174943,-6.44138388787626 34.351265065165,-6.44107598489697 34.3512904802654,-6.44126374692493 34.3521466091242)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-30","699","QR149626","Ayant droit","1-\u0627\u0644\u0643\u0633\u0643\u0627\u0633\u064a \u064a\u062d\u064a\u0649 2- \u0627\u0644\u0643\u0633\u0643\u0627\u0633\u064a \u0628\u0648\u0639\u0632\u0629 3 - \u0627\u0644\u0643\u0633\u0643\u0627\u0633\u064a \u0639\u0644\u0627\u0644 4-\u0627\u0644\u0643\u0633\u0643\u0627\u0633\u064a \u0627\u062f\u0631\u064a\u0633","1-Keskassi Yahya 2-Keskassi Bouazza 3-Keskassi Allal 4-Keskassi driss","1-G20580 2-G144629","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2741","OUI","","","",null,null,null,null,null],["1449721","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:04","MULTIPOLYGON(((-6.4415392315015 34.3520958174943,-6.44165597644342 34.3520787286415,-6.44150997916957 34.3512378360635,-6.44138388787626 34.351265065165,-6.4415392315015 34.3520958174943)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-31","700","QR149627","Ayant droit","\u0623\u062d\u0645\u062f \u0628\u0630\u0629","Ahmed Badda","G635698","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.1081","OUI","","","",null,null,null,null,null],["1449722","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:05","MULTIPOLYGON(((-6.44165597644342 34.3520787286415,-6.44232930239386 34.3520235321056,-6.44262558645792 34.3520270827919,-6.44251918149583 34.3511587129072,-6.44150997916957 34.3512378360635,-6.44165597644342 34.3520787286415)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-32","701","QR149628","Ayant droit","1\u0640 \u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0639\u064a\u0627\u0634 2-\u0628\u0646 \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062e\u064a\u0627\u0637\u064a 3\u0640 \u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0633\u0639\u064a\u062f","1-Khayati Ayach 2-Khayati Benchikh 3-Khayati Said","1-G301154 2-G258316 3-G246108","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.8550","OUI","","","",null,null,null,null,null],["1449723","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:06","MULTIPOLYGON(((-6.44262558645792 34.3520270827919,-6.44285454147406 34.3520605322468,-6.44270038338013 34.3511451286418,-6.44251918149583 34.3511587129072,-6.44262558645792 34.3520270827919)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-33","702","QR149629","Ayant droit","\u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0639\u0644\u064a","Khayati Ali","G139146","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.1929","OUI","","","",null,null,null,null,null],["1449724","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:07","MULTIPOLYGON(((-6.44285454147406 34.3520605322468,-6.44327707484516 34.3521346843805,-6.44309891445435 34.3511206715336,-6.44270038338013 34.3511451286418,-6.44285454147406 34.3520605322468)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-34","703","QR149630","Ayant droit","1-\u0639\u0644\u064a \u0627\u0644\u0632\u062d\u064a\u0646\u064a\u0646 \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629 2-\u0641\u0627\u0637\u0645\u0629 \u0643\u062d\u064a\u0644 \u0648 \u0628\u0627\u0642\u064a \u0627\u0644\u0648\u0631\u062b\u0629 3\u0640 \u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0639\u064a\u0627\u0634","1-Ali Zhinine et le Reste des H\u00e9ritiers 2-Fatima Khail et le Reste des H\u00e9ritiers 3- El Khayati Ayache","1-G228529 2-G671275 3-G214256","3-H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.4027","OUI","","","Exploitation El Khayat Larbi",null,null,null,null,null],["1449725","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:08","MULTIPOLYGON(((-6.44327707484516 34.3521346843805,-6.44340515337221 34.3521531983818,-6.44323003422396 34.351106599963,-6.44309891445435 34.3511206715336,-6.44327707484516 34.3521346843805)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-35","704","QR149631","Ayant droit","1\u0640 \u0627\u0644\u062e\u064a\u0627\u0637 \u062d\u0645\u064a\u062f 2\u0640 \u0627\u0644\u062e\u064a\u0627\u0637 \u0627\u062f\u0631\u064a\u0633","1-El Khayat Hamid 2-El Khayat driss","1-GY11120 2-G690879","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.1150","OUI","","","Exploitation El Khayati Ayach",null,null,null,null,null],["1449726","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:08","MULTIPOLYGON(((-6.44340515337221 34.3521531983818,-6.44390009033141 34.3522260086269,-6.44409444698532 34.3522050094438,-6.44378583125508 34.3512366331418,-6.44370924358477 34.3510477212105,-6.44350044849884 34.3510810937299,-6.44323003422396 34.351106599963,-6.44340515337221 34.3521531983818)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-36","705","QR149632","Ayant droit","1- \u0627\u0644\u062e\u064a\u0627\u0637 \u0627\u0644\u0639\u0631\u0628\u064a 2- \u0628\u062f\u0629 \u0645\u062d\u0645\u062f3-\u0628\u062f\u0629 \u0645\u0646\u0635\u0648\u0631 4-\u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0639\u064a\u0627\u0634 5-\u062f\u0631\u0643\u0627\u0644 \u0645\u062d\u0645\u062f 6-\u0627\u0644\u062e\u064a\u0627\u0637 \u0639\u0644\u0627\u0644","1-El Khayat Larbi 2-Bedda Mohamed  3-Bedda Mansour  4-El Khayati Ayache 5-Dargal Mohamed 6-El Khayat Allal","1-G213435 2-G144884 3-G131852 4-G214256  6-G145118","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.6527","OUI","","","Exploitation El Khayat Larbi",null,null,null,null,null],["1449727","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:09","MULTIPOLYGON(((-6.45212570785336 34.3680868395161,-6.4523730762999 34.3681856261588,-6.452482138856 34.3682451639417,-6.45207805278389 34.3687295349031,-6.45145794686281 34.3695173629769,-6.45123070823396 34.3695245631979,-6.45154224119772 34.3689828812273,-6.45212570785336 34.3680868395161)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-84","828","QR149755","Ayant droit","\u0627\u0644\u0639\u0645\u0631\u064a \u0645\u062d\u0645\u062f","Omri Mohamed","G470145","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.4605","OUI","_","_","",null,null,null,null,null],["1449728","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:10","MULTIPOLYGON(((-6.45123070823396 34.3695245631979,-6.45076426374306 34.3695689625832,-6.45167114254773 34.3680504231037,-6.45170323296147 34.3679789298642,-6.45190156183048 34.368018047124,-6.45212570785336 34.3680868395161,-6.45154224119772 34.3689828812273,-6.45123070823396 34.3695245631979)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-85","829","QR149756","Ayant droit","1-\u0639\u0628\u062f \u0627\u0644\u0633\u0644\u0627\u0645 \u0627\u062f\u063a\u0648\u063a\u064a 2-\u0627\u062f\u0631\u064a\u0633 \u0627\u062f\u063a\u0648\u063a\u064a","1-Abdeslam dghoughi 2-driss dghoughi","1-GY25517 2-G300317","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.7382","OUI","Puits","_","",null,null,null,null,null],["1449729","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:11","MULTIPOLYGON(((-6.45076426374306 34.3695689625832,-6.45048182278225 34.3695981909007,-6.45138696410493 34.3679693273279,-6.45170323296147 34.3679789298642,-6.45167114254773 34.3680504231037,-6.45076426374306 34.3695689625832)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-86","830","QR149757","Ayant droit","1-\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0628\u0631\u064a\u0646\u064a 2-\u0627\u0644\u062d\u0633\u064a\u0646 \u0628\u0631\u064a\u0646\u064a","1-Abdellah brini 2-Lhoucein brini","1-G304043 2-G316713","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.4909","OUI","_","_","",null,null,null,null,null],["1449730","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:12","MULTIPOLYGON(((-6.45048182278225 34.3695981909007,-6.44998679407359 34.3696403102425,-6.45083443334094 34.3679613903425,-6.45138696410493 34.3679693273279,-6.45048182278225 34.3695981909007)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-87","831","QR149758","Ayant droit","\u0639\u0645\u0631 \u0627\u0644\u0639\u0645\u0631\u064a","Omar Omri","Manque CIN","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.8582","OUI","_","_","",null,null,null,null,null],["1449731","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:13","MULTIPOLYGON(((-6.45033949286871 34.3679070544388,-6.45014567917666 34.3678805132406,-6.4499024249296 34.3678858144748,-6.44901447318524 34.3697355658074,-6.44950147288462 34.369685879884,-6.45033949286871 34.3679070544388)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-88","833","QR149760","Ayant droit","\u0627\u0644\u0639\u0645\u0631\u064a \u0628\u0648\u0634\u0639\u064a\u0628","Omri Bouchaib","GY1905","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.8481","OUI","_","_","",null,null,null,null,null],["1449732","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:14","MULTIPOLYGON(((-6.44901447318524 34.3697355658074,-6.44845412978 34.3697899650211,-6.44934780437271 34.3681770819984,-6.44944903427956 34.3679621389403,-6.4499024249296 34.3678858144748,-6.44901447318524 34.3697355658074)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-89","834","QR149761","Ayant droit","\u0627\u0644\u0639\u0645\u0631\u064a \u062d\u0633\u0646","Omri Hassan","G638181","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.8729","OUI","_","_","",null,null,null,null,null],["1449733","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:15","MULTIPOLYGON(((-6.44845412978 34.3697899650211,-6.44815665917372 34.3698174017127,-6.44916945584065 34.3679893928403,-6.44944903427956 34.3679621389403,-6.44934780437271 34.3681770819984,-6.44845412978 34.3697899650211)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-90","835","QR149762","Ayant droit","1-\u0628\u062d\u0631\u0627\u0631 \u0644\u062d\u0633\u06462-\u0628\u062d\u0631\u0627\u0631 \u0645\u062d\u0645\u062f 3- \u0628\u062d\u0631\u0627\u0631 \u0639\u0628\u062f \u0627\u0644\u0633\u0644\u0627\u06454-\u0628\u062d\u0631\u0627\u0631 \u0645\u0635\u0637\u0641\u0649","1-Bahrar lahcen 2-Bahrar Mohamed 3-Bahrar Abdeslam 4-Bahrar mustapha","Manque CIN","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.5181","OUI","_","_","",null,null,null,null,null],["1449734","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:16","MULTIPOLYGON(((-6.44815665917372 34.3698174017127,-6.44750256494021 34.3698941355236,-6.44714132158512 34.3699427043279,-6.44809550943097 34.3683895423585,-6.4482327513685 34.3681211183288,-6.44854442497075 34.3680736445661,-6.44896739240133 34.3680287140001,-6.44916945584065 34.3679893928403,-6.44815665917372 34.3698174017127)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-91","836","QR149763","Ayant droit","\u0631\u0627\u0628\u062d \u0627\u0628\u0631\u0627\u0647\u064a\u0645","Rabeh Brahim","G38848","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Habitation+Terrain de culture","1.7042","OUI","Puits","pis\u00e9","",null,null,null,null,null],["1449735","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:17","MULTIPOLYGON(((-6.44714132158512 34.3699427043279,-6.44683145196004 34.3699727207019,-6.44695754375556 34.3697564640255,-6.44786840632902 34.368303536011,-6.44791389733946 34.3682078388553,-6.4482327513685 34.3681211183288,-6.44809550943097 34.3683895423585,-6.44714132158512 34.3699427043279)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-92","837","QR149764","Ayant droit","\u0631\u0628\u0648\u062d \u0645\u062d\u0645\u062f","Rabouh Mohamed","Manque CIN","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.5101","OUI","_","_","",null,null,null,null,null],["1449736","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:18","MULTIPOLYGON(((-6.44683145196004 34.3699727207019,-6.44695754375556 34.3697564640255,-6.44786840632902 34.368303536011,-6.44791389733946 34.3682078388553,-6.4472253307451 34.3683688244259,-6.44707509419151 34.3686483200392,-6.44621116006417 34.3700446581362,-6.44683145196004 34.3699727207019)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-93","838","QR149765","Ayant droit","\u0627\u0644\u0639\u0645\u0631\u064a \u0645\u062d\u0645\u062f","Omri Mohamed","G46901","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","1.0145","OUI","Puit","_","",null,null,null,null,null],["1449737","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:19","MULTIPOLYGON(((-6.44621116006417 34.3700446581362,-6.44552302186709 34.3701048570012,-6.4456295082716 34.369855095232,-6.44623733089173 34.3687419853138,-6.44628414068093 34.3685942048384,-6.44684426758807 34.3684711181731,-6.4472253307451 34.3683688244259,-6.44707509419151 34.3686483200392,-6.44621116006417 34.3700446581362)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-94","839","QR149766","Ayant droit","\u0628\u0642\u0627\u0634 \u0627\u0644\u0647\u0627\u0634\u0645\u064a","Bakkach Lhachmi","G14076","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Amer\\"","oui","","Douar Ouled slama","Terrain de culture","0.5069","OUI","_","_","",null,null,null,null,null],["1449738","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:21","MULTIPOLYGON(((-6.45505212071708 34.3533929474759,-6.455015565949 34.3537272361358,-6.45683869787809 34.3535228588853,-6.45688532955306 34.3532424429548,-6.45688140565408 34.3530831447452,-6.45593180213461 34.3532306648275,-6.45505212071708 34.3533929474759)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-120","882","QR149810","Ayant droit","1-\u0645\u062d\u0645\u062f \u0627\u0644\u062d\u0633\u0646\u064a 2-\u0627\u062f\u0631\u064a\u0633 \u0627\u0644\u062d\u0633\u0646\u064a3-\u0627\u062d\u0645\u062f \u0627\u0644\u062d\u0633\u0646\u064a","1-Mohamed Lhousni2-Driss Lhousni3-Ahmed Lhousni","2-GY1481","_","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.7559","OUI","_","_","",null,null,null,null,null],["1449739","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:22","MULTIPOLYGON(((-6.455015565949 34.3537272361358,-6.45498474890132 34.3539355446614,-6.45491894680087 34.3541761479264,-6.45664049060937 34.3543381129571,-6.45671889477352 34.3541077725381,-6.45683869787809 34.3535228588853,-6.455015565949 34.3537272361358)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-121","883","QR149811","Ayant droit","\u062d\u0645\u064a\u062f \u0627\u0644\u0646\u064a\u0641\u0631","Hamid Nifer","G229303","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","1.1361","OUI","_","","",null,null,null,null,null],["1449740","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:23","MULTIPOLYGON(((-6.45491894680087 34.3541761479264,-6.45478622996365 34.3545340285695,-6.45647073858246 34.3548474319231,-6.45664049060937 34.3543381129571,-6.45491894680087 34.3541761479264)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-122","884","QR149812","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u062d\u0633\u0646\u064a","Mohamed El Housni","G353431","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.7867","OUI","Puit","_","",null,null,null,null,null],["1449741","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:24","MULTIPOLYGON(((-6.45478622996365 34.3545340285695,-6.45463101856381 34.3549750181802,-6.45630647897095 34.3553517179922,-6.45647073858246 34.3548474319231,-6.45478622996365 34.3545340285695)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-123","885","QR149813","Ayant droit","\u0627\u062d\u0645\u062f \u0627\u0644\u062d\u0633\u0646\u064a","El houssni Ahmed","G33079","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.8906","OUI","_","_","",null,null,null,null,null],["1449742","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:25","MULTIPOLYGON(((-6.45463101856381 34.3549750181802,-6.45452134947509 34.3553150949532,-6.45620238504788 34.3556937692347,-6.45630647897095 34.3553517179922,-6.45463101856381 34.3549750181802)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-124","886","QR149814","Ayant droit","\u0627\u0644\u062d\u0633\u0646\u064a \u0643\u0631\u064a\u0645","El houssni Karim","GY21613","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.6047","OUI","_","_","",null,null,null,null,null],["1449743","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:26","MULTIPOLYGON(((-6.45452134947509 34.3553150949532,-6.45445023032724 34.3554844627158,-6.45491262063606 34.3555776645717,-6.45614156238254 34.3558450895961,-6.45620238504788 34.3556937692347,-6.45452134947509 34.3553150949532)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-125","887","QR149815","Ayant droit","\u0627\u0644\u062d\u0633\u0646\u064a \u0639\u0632\u064a\u0632","El houssni Aziz","G392764","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.3146","OUI","_","_","",null,null,null,null,null],["1449744","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:27","MULTIPOLYGON(((-6.45417789761192 34.3563076007452,-6.4540465777843 34.3568235639949,-6.45562365597878 34.3569822175942,-6.45566987537277 34.3568003441659,-6.45581591040737 34.3564664808078,-6.45417789761192 34.3563076007452)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-127","890","QR149816","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u062d\u0633\u0646\u064a","El houssni Mohamed","G35725","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.8558","OUI","_","_","",null,null,null,null,null],["1449745","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:28","MULTIPOLYGON(((-6.45396348857162 34.3599315065156,-6.45425229544182 34.3599080596644,-6.45444783857042 34.3599136078873,-6.45487640647367 34.359843705005,-6.45502898338836 34.3591556630424,-6.4551508208052 34.3588368818398,-6.45536133763038 34.3580518621263,-6.45545331171152 34.3576123945737,-6.45457274048205 34.357638451437,-6.45415879979149 34.3591101428695,-6.45396348857162 34.3599315065156)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-128","892","QR149818","Ayant droit","1-\u0627\u0644\u062d\u0633\u0646\u064a \u0639\u0628\u062f \u0627\u0644\u0633\u0644\u0627\u0645 2-\u0627\u0644\u062d\u0633\u0646\u064a \u0627\u062f\u0631\u064a\u0633","1- El Housni Abdeslam 2- El Houssni driss","1-G246072 2-G216944","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","2.0424","OUI","_","_","",null,null,null,null,null],["1449746","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:29","MULTIPOLYGON(((-6.45345549425888 34.3600266155046,-6.45371856928316 34.3599704731975,-6.45396348857162 34.3599315065156,-6.45415879979149 34.3591101428695,-6.45457274048205 34.357638451437,-6.4541299658868 34.3576408538116,-6.45406254755505 34.3579357611727,-6.4537268183214 34.3590682068528,-6.45345549425888 34.3600266155046)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-129","893","QR149819","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u062d\u0633\u0646\u064a","El houssni Mohamed","G85207","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","1.0544","OUI","Puits","_","",null,null,null,null,null],["1449747","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:30","MULTIPOLYGON(((-6.45298103983782 34.3601277807471,-6.45345549425888 34.3600266155046,-6.4537268183214 34.3590682068528,-6.45406254755505 34.3579357611727,-6.4541299658868 34.3576408538116,-6.45369047311686 34.3576565092208,-6.45298103983782 34.3601277807471)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-130","894","QR149820","Ayant droit","\u0627\u0644\u0639\u0631\u0628\u064a \u0627\u062c\u063a\u064a\u062f\u0631","Larbi Jghider","G216709","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","1.1163","OUI","Puit","_","",null,null,null,null,null],["1449748","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:31","MULTIPOLYGON(((-6.45231289395884 34.3603284256117,-6.45298103983782 34.3601277807471,-6.45369047311686 34.3576565092208,-6.45296757513968 34.3576886013937,-6.4524963159689 34.359533899705,-6.45231289395884 34.3603284256117)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-131","895","QR149821","Ayant droit","1-\u0633\u0639\u064a\u062f \u0627\u0641\u0631\u064a\u0637\u0632 2-\u0628\u0648\u0634\u0639\u064a\u0628 \u0641\u0631\u064a\u0637\u0632 3-\u064a\u0648\u0646\u0633 \u0641\u0631\u064a\u0637\u0632","1-Said Fritz 2-Bouchaib Fritz 3- Youness Fritez","1-SH10176 2-G201365  ","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","1.6580","OUI","Puits","_","",null,null,null,null,null],["1449749","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:31","MULTIPOLYGON(((-6.45206756742153 34.3603555080457,-6.45231289395884 34.3603284256117,-6.4524963159689 34.359533899705,-6.45296757513968 34.3576886013937,-6.45272511040446 34.3576937859709,-6.45229417927908 34.3594170074228,-6.45206756742153 34.3603555080457)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-132","896","QR149822","Tiers","\u0627\u062f\u0631\u064a\u0633 \u0633\u0631\u0628\u0627\u062a","driss Serbat","G709666","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.6789","OUI","","","",null,null,null,null,null],["1449750","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:32","MULTIPOLYGON(((-6.45192806067642 34.3593800238577,-6.45229417927908 34.3594170074228,-6.45272511040446 34.3576937859709,-6.45234407796309 34.357698541957,-6.45192806067642 34.3593800238577)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-133","897","QR149823","Ayant droit","1-\u0631\u0636\u0648\u0627\u0646 \u0627\u0648\u062f\u064a\u0646\u0629 \u0628\u0646 \u0627\u0628\u0631\u0627\u0647\u064a\u06452- \u0627\u062d\u0645\u062f \u0627\u0648\u062f\u064a\u0646\u0629 3- \u0639\u064a\u0627\u0634 \u0627\u0648\u062f\u064a\u0646\u0629 4-\u0627\u0644\u0639\u0631\u0628\u064a \u0627\u0648\u062f\u064a\u0646\u0629 \u0628\u0646 \u0627\u0628\u0631\u0627\u0647\u064a\u06455-\u0645\u0647\u0627\u0646\u064a \u0627\u0648\u062f\u064a\u0646\u0629 \u0628\u0646 \u0627\u0628\u0631\u0627\u0647\u064a\u0645","1-Redouan Oudina Ben Brahim2-Ahmed Oudina 3-Ayach Oudina 4-Larbi Oudina Ben Brahim5-Mhani Oudina Ben Brahim","2-G487119 3-G348271 ","_","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.6268","OUI","_","_","",null,null,null,null,null],["1449751","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:33","MULTIPOLYGON(((-6.45234407796309 34.357698541957,-6.45196954910473 34.35769180884,-6.45170219780164 34.3588701240438,-6.45156414599357 34.3593275295856,-6.45192806067642 34.3593800238577,-6.45234407796309 34.357698541957)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-134","898","7884513","Ayant droit","\u0645\u0646\u0635\u0648\u0631 \u0644\u0645\u062d\u0645\u062f\u064a","Mansour Lamhamdi","G801385","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.6447","OUI","_","_","",null,null,null,null,null],["1449752","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:34","MULTIPOLYGON(((-6.45156414599357 34.3593275295856,-6.45149210668653 34.3595158747509,-6.45135531273491 34.3602506415958,-6.45138032148159 34.3603187184577,-6.45146134631849 34.3603785636459,-6.45206756742153 34.3603555080457,-6.45229417927908 34.3594170074228,-6.45192806067642 34.3593800238577,-6.45156414599357 34.3593275295856)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-135","899","7884515","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u0633\u062d\u064a\u0645\u064a","Mohamed Shaimi","G373471","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Taibia","oui","","Douar Ouled slama","Terrain de culture","0.7770","OUI","_","_","",null,null,null,null,null],["1449753","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:35","MULTIPOLYGON(((-6.47201233966779 34.3490928849783,-6.47209560268064 34.3493497933838,-6.47284800724952 34.3491764832238,-6.47275715288275 34.348928278359,-6.47201233966779 34.3490928849783)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-232","1049","QR149969","Ayant droit","\u0628\u062f\u0629 \u0646\u0648\u0631 \u0627\u0644\u062f\u064a\u0646","Bedda Nourddine","Manque CIN","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2138","OUI","_","_","",null,null,null,null,null],["1449754","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:36","MULTIPOLYGON(((-6.47191380482953 34.348807197847,-6.47201233966779 34.3490928849783,-6.47275715288275 34.348928278359,-6.47263872857973 34.348637089584,-6.47191380482953 34.348807197847)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-233","1050","QR149970","Ayant droit","\u062d\u0643\u064a\u0645 \u0627\u0644\u062e\u064a\u0627\u0637\u064a","Khayati Hakim","Manque CIN","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2365","OUI","_","_","Achet\u00e9 de chez El Khayati Miloudi",null,null,null,null,null],["1449755","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:37","MULTIPOLYGON(((-6.47180357759317 34.3485096084739,-6.47191380482953 34.348807197847,-6.47263872857973 34.348637089584,-6.47253553545271 34.3483668978478,-6.47180357759317 34.3485096084739)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-234","1051","QR149971","Ayant droit","\u0643\u0639\u064a\u0648\u0629 \u0628\u0646\u0639\u064a\u0633\u0649","Kaioua Benaissa","G227626","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2288","OUI","_","_","",null,null,null,null,null],["1449756","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:38","MULTIPOLYGON(((-6.47161623033146 34.3479241743574,-6.47180357759317 34.3485096084739,-6.47253553545271 34.3483668978478,-6.47235837940073 34.3477734338359,-6.47161623033146 34.3479241743574)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-235","1053","QR149973","Ayant droit","1- \u0627\u0644\u0639\u0631\u0628\u064a \u0627\u0643\u0639\u064a\u0648\u0629 2- \u0645\u0646\u0635\u0648\u0631 \u0627\u0643\u0639\u064a\u0648\u0629 3-\u0639\u0628\u062f \u0627\u0644\u0644\u0637\u064a\u0641 \u0627\u0643\u0639\u064a\u0648\u0629","1-Larbi Kaioua 2-Mansour Kaioua 3-Abdelatif Kaioua","1-G228371 2-G311427 ","","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.4684","OUI","_","_","",null,null,null,null,null],["1449757","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:39","MULTIPOLYGON(((-6.47153356157952 34.3476966020018,-6.47161623033146 34.3479241743574,-6.47235837940073 34.3477734338359,-6.47228932125728 34.3475529866608,-6.47153356157952 34.3476966020018)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-236","1054","7848560","Ayant droit","\u0643\u0639\u064a\u0648\u0629 \u0645\u062d\u0645\u062f","Kaioua mohamed","G301078","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.1848","OUI","_","_","",null,null,null,null,null],["1449758","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:40","MULTIPOLYGON(((-6.47146940018417 34.3475132360101,-6.47153356157952 34.3476966020018,-6.47228932125728 34.3475529866608,-6.47224879331327 34.3473740363751,-6.47146940018417 34.3475132360101)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-237","1055","QR149975","Ayant droit","\u0643\u0639\u064a\u0648\u0649 \u0639\u064a\u0627\u0634","Kaioua Ayach","Manque CIN","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.1619","OUI","_","_","",null,null,null,null,null],["1449759","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:41","MULTIPOLYGON(((-6.47116550209828 34.3466411935366,-6.47127407344394 34.3469880671426,-6.47144662795327 34.3474819062126,-6.47146940018417 34.3475132360101,-6.47224879331327 34.3473740363751,-6.47220818292653 34.3471743745238,-6.47197620819335 34.3464431719248,-6.47116550209828 34.3466411935366)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-238","1056","QR149976","Ayant droit","1- \u0627\u0644\u0639\u0631\u0628\u064a \u0627\u0643\u0639\u064a\u0648\u0629 2- \u0645\u0646\u0635\u0648\u0631 \u0627\u0643\u0639\u064a\u0648\u0629 3-\u0639\u0628\u062f \u0627\u0644\u0644\u0637\u064a\u0641 \u0627\u0643\u0639\u064a\u0648\u0629","1-Larbi Kaioua 2-Mansour Kaioua 3-Abdelatif Kaioua","1-G228371 2-G311427 ","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.7891","OUI","Puit","_","",null,null,null,null,null],["1449760","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:42","MULTIPOLYGON(((-6.47097022236569 34.3460834899577,-6.47116550209828 34.3466411935366,-6.47197620819335 34.3464431719248,-6.47179083886983 34.3458679550562,-6.47097022236569 34.3460834899577)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-239","1062","QR149982","Ayant droit","\u0627\u0644\u062e\u064a\u0627\u0637\u064a \u0639\u064a\u0627\u0634","El khayati Ayache","G214256","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.5110","OUI","Puit","_","",null,null,null,null,null],["1449761","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:43","MULTIPOLYGON(((-6.47081016375844 34.3456150799967,-6.47086857475167 34.3457846541803,-6.47169351284925 34.3455899846938,-6.47163154786015 34.3454320190793,-6.47081016375844 34.3456150799967)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-240","1065","QR149985","Ayant droit","\u0628\u062f\u0629 \u062c\u0648\u0627\u062f","Bedda jaouad","G440551","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.1374","OUI","_","_","",null,null,null,null,null],["1449762","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:44","MULTIPOLYGON(((-6.47072334617626 34.3453742960958,-6.47081016375844 34.3456150799967,-6.47163154786015 34.3454320190793,-6.47155375357661 34.3452002030012,-6.47072334617626 34.3453742960958)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-245","1071","QR149991","Ayant droit","1 - \u0627\u0644\u062e\u064a\u0627\u0637 \u0645\u0635\u0637\u0641\u0649 - 2 \u0627\u0644\u062e\u064a\u0627\u0637 \u0627\u0644\u0628\u063a\u062f\u0627\u062f\u064a","1-El Khayat Mustapha - 2-El Khayat El Boughdadi","1-GY11299 2-G358404","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2110","OUI","_","_","",null,null,null,null,null],["1449763","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:45","MULTIPOLYGON(((-6.47063395223583 34.3450904143038,-6.47072334617626 34.3453742960958,-6.47155375357661 34.3452002030012,-6.47147016084587 34.3449636301218,-6.47126056765209 34.3449981468847,-6.47063395223583 34.3450904143038)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-246","1072","QR149992","Ayant droit","\u0643\u0639\u064a\u0648\u0629 \u0627\u062d\u0645\u062f","kaioua Ahmed","G483232","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2331","OUI","Puits","_","",null,null,null,null,null],["1449764","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:46","MULTIPOLYGON(((-6.47056178746939 34.3448546993976,-6.47063395223583 34.3450904143038,-6.47126056765209 34.3449981468847,-6.47147016084587 34.3449636301218,-6.47138644702741 34.3447391952029,-6.4710312210737 34.3447945367457,-6.47056178746939 34.3448546993976)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"AD-KEN-DA53-F-247","1073","QR149993","Ayant droit","1- \u0643\u0639\u064a\u0648\u0629 \u0627\u0644\u062e\u0637\u0627\u0628 2- \u0643\u0639\u064a\u0648\u0629 \u0628\u0646\u0639\u0627\u0634\u0631","1-Kaioua Elkhattab 2- Kaioua Benachir","1-G348810","","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled slama","DA 53 -F","DA 53 -F","Ouled slama","Ouled Mansour","oui","","Douar Ouled slama","Terrain de culture","0.2023","OUI","_","_","",null,null,null,null,null],["1449765","","F\u00e8s",null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-11-20 16:03:47","MULTIPOLYGON(((-6.45438693395549 34.3556685798559,-6.45492762789503 34.3557625772598,-6.45606356233562 34.355983163785,-6.45581591040737 34.3564664808078,-6.45417789761192 34.3563076007452,-6.45418528117939 34.3562327065745,-6.45438693395549 34.3556685798559)))","0","0","1589",null,"26191","0","FES - MEKNES",null,null,"0","DAR-BET","54","77",null,null,"T-KEN-DA53-F-126","889","QR160726","Tiers","\u0645\u064a\u0644\u0648\u062f \u0627\u0644\u062f\u0643\u0627\u0644\u064a","Miloud Eddoukkali","G86079","H","Kenitra","Kenitra","K\u00e9nitra Banlieue","Ouled Slama","DA 53 -F","DA 53 -F","Ouled Slama","Ouled Taibia","Non","","Douar Ouled slama","Terrain de culture","1.0110","OUI","puit","3 \u00e9curies","",null,null,null,null,null],["1474892","Mohamed Zerouali",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:38",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-5","5","QR164244","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u0632\u0631\u0648\u0627\u0644\u064a","Mohamed Zerouali","GN7353","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","91","Ouled Boubker","T.C","0.0871","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474893","El-Hallal Bendam",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:39",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-4","4","QR164245","Ayant droit","\u0627\u0644\u0647\u0644\u0627\u0644 \u0628\u0646\u062f\u0627\u0645","El-Hallal Bendam","GN16491","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","71","Ouled Boubker","T.C","0.0915","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474894","Iziddine Chafik",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:39",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-8","8","QR164248","Ayant droit","\u0639\u0632 \u0627\u0644\u062f\u064a\u0646 \u0634\u0641\u064a\u0642","Iziddine Chafik","GN22540","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","246","Ouled Ayad","T.C","0.2714","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474895","Hassan Chojaa",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:39",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-7","7","QR164247","Ayant droit","\u062d\u0633\u0646 \u0634\u062c\u0627\u0639","Hassan Chojaa","GN49729","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","82","Ouled Boubker","T.C","0.2558","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474896","Hassan El Imany, Mohamed Laimani",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:40",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-6","6","QR164246","Ayant droit","\u0627\u0644\u062d\u0633\u0646 \u0627\u0644\u0639\u0645\u0627\u0646\u064a, \u0645\u062d\u0645\u062f \u0627\u0644\u0639\u064a\u0645\u0627\u0646\u064a","Hassan El Imany, Mohamed Laimani","GN49014, GN24493","H, H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI, OUI","585","Ouled Boubker","T.C","0.0851","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474897","Larbi Maslouh",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:40",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-9","9","QR164249","Ayant droit","\u0627\u0644\u0639\u0631\u0628\u064a \u0645\u0635\u0644\u0648\u062d","Larbi Maslouh","GN45645","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","14","Ouled Boubker","T.C","0.2549","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474898","Hamid Bouallaga, Abdellah Bouallaga, M\'Hamed Bouallaga",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:41",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-10","10","QR164250","Ayant droit","\u062d\u0645\u064a\u062f \u0628\u0639\u0644\u0643\u0629, \u0639\u0628\u062f \u0627\u0644\u0644\u0647 \u0628\u0639\u0644\u0643\u0629, \u0645\u062d\u0645\u062f \u0628\u0639\u0644\u0643\u0629","Hamid Bouallaga, Abdellah Bouallaga, M\'Hamed Bouallaga","GN22620, G113879, G160104","H, H, H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI, OUI, OUI","239","Ouled Boubker","T.C","0.2584","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474899","El-Houcine El-Adasy",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:41",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-11","11","QR164251","Ayant droit","\u0627\u0644\u062d\u0633\u064a\u0646 \u0627\u0644\u0639\u062f\u0633\u064a","El-Houcine El-Adasy","GN77598","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","398","Ouled Boubker","T.C","0.2862","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474900","Mohamed Hachad",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:41",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-12","12","QR164252","Ayant droit","\u0645\u062d\u0645\u062f \u062d\u0634\u0627\u062f","Mohamed Hachad","A502812","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","361","Ouled Boubker","T.C","0.2205","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474901","Hicham El Idrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:42",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-42","43","QR164283","Ayant droit","\u0647\u0634\u0627\u0645 \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Hicham El Idrissi","GJ29720","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","189","Ouled Boubker","T.C","0.2601","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474902","Abdelhakim Maslouh",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:42",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-43","44","QR164284","Ayant droit","\u0639\u0628\u062f\u0627\u0644\u062d\u0643\u064a\u0645 \u0645\u0635\u0644\u0648\u062d","Abdelhakim Maslouh","BK382407","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","186","Ouled Boubker","T.C","0.2634","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474903","Hamid Anani",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:42",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-44","45","QR164285","Ayant droit","\u062d\u0645\u064a\u062f \u0639\u0646\u0627\u0646\u064a","Hamid Anani","GK79601","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","338432","Ouled Boubker","T.C","0.2325","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474904","Mohamed Bdaoui",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:43",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-47","48","QR164288","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u0628\u062f\u0627\u0648\u064a","Mohamed Bdaoui","GN11538","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","237","Ouled Boubker","T.C","0.2529","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474905","Mohamed El-Hadla",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:43",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-45","46","QR164286","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u0647\u062f\u0644\u0629","Mohamed El-Hadla","GN13327","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","352","Ouled Boubker","T.C","0.4583","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474906","Mohamed Bendam",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:44",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-46","47","QR164287","Ayant droit","\u0645\u062d\u0645\u062f \u0628\u0646\u062f\u0627\u0645","Mohamed Bendam","GN43283","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","210","Ouled Boubker","T.C","1.2292","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474907","Bouhia Anani",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:44",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-48","49","QR164289","Ayant droit","\u0628\u0648\u062d\u064a \u0639\u0646\u0627\u0646\u064a","Bouhia Anani","GN6959","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","37","Ouled Boubker","T.C","0.3611","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474908","Mohamed Anani",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:44",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-49","50","QR164290","Ayant droit","\u0645\u062d\u0645\u062f \u0639\u0646\u0627\u0646\u064a","Mohamed Anani","GN6960","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","67","Ouled Boubker","T.C","0.1204","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474909","Ahmed Bouallaga",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:45",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-50","51","QR164291","Ayant droit","\u0627\u062d\u0645\u062f \u0628\u0639\u0644\u0643\u0629","Ahmed Bouallaga","GN66354","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","406","Ouled Boubker","T.C","0.274","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474910","Tahra Anani",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:45",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-53","54","QR164294","Ayant droit","\u0627\u0644\u0637\u0627\u0647\u0631\u0629 \u0639\u0646\u0627\u0646\u064a","Tahra Anani","GK79560","F","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","561","Ouled Boubker","T.C","0.2532","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474911","Mohamed El-Hadla",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:46",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-52","53","QR164293","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u0647\u062f\u0644\u0629","Mohamed El-Hadla","GN13327","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","352","Ouled Boubker","T.C","0.2629","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474912","Bouhia Anani",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:46",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-51","52","QR164292","Ayant droit","\u0628\u0648\u062d\u064a \u0639\u0646\u0627\u0646\u064a","Bouhia Anani","GN6959","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","37","Ouled Boubker","T.C","0.2361","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474913","Mohamed Zerouali",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:46",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-54","55","QR164295","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u0632\u0631\u0648\u0627\u0644\u064a","Mohamed Zerouali","GN22377","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","363","Ouled Boubker","T.C","0.2468","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474914","Zahra Kouch",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:47",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-80","84","QR164324","Tiers","\u0632\u0647\u0631\u0629 \u0643\u0648\u0634","Zahra Kouch","GN97651","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","231","Ouled Boubker","T.C","0.1577","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474915","Si Mohamed Lahlali",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:47",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-81","85","QR164325","Ayant droit","\u0633\u064a \u0645\u062d\u0645\u062f \u0644\u0647\u0644\u0627\u0644\u064a","Si Mohamed Lahlali","GN110537","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","113","Ouled Boubker","T.C","0.1598","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474916","Ahmed Lahlali",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:48",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-82","86","QR164326","Ayant droit","\u0627\u062d\u0645\u062f \u0627\u0644\u0647\u0644\u0627\u0644\u064a","Ahmed Lahlali","GN104495","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","12","Ouled Boubker","T.C","0.1726","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474917","Khalid El Idrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:48",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-83","87","QR164327","Ayant droit","\u062e\u0627\u0644\u062f \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Khalid El Idrissi","GN51618","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","371","Ouled Boubker","T.C","0.2285","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474918","Driss Abiyahyaidrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:49",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-84","88","QR164328","Ayant droit","\u0627\u062f\u0631\u064a\u0633 \u0627\u0628\u064a \u064a\u062d\u064a\u0649 \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Driss Abiyahyaidrissi","GN61660","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","379","Ouled Boubker","T.C","0.0935","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474919","Abdeslam El Bouyahyaoui El Idrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:49",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-85","89","QR164329","Ayant droit","\u0639\u0628\u062f\u0627\u0644\u0633\u0644\u0627\u0645 \u0627\u0644\u0628\u0648\u064a\u062d\u064a\u0627\u0648\u064a \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Abdeslam El Bouyahyaoui El Idrissi","GN70239","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","22","Ouled Boubker","T.C","0.0935","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474920","Mohamed El Aadily",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:49",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-86","90","QR164330","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u0639\u0627\u062f\u0644\u064a","Mohamed El Aadily","GN52783","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","33","Ouled Ayad","T.C","0.0935","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474921","Kacem Lahlali",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:50",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-87","91","QR164331","Ayant droit","\u0642\u0627\u0633\u0645 \u0644\u0647\u0644\u0627\u0644\u064a","Kacem Lahlali","GN80173","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","9","Ouled Boubker","T.C","0.0935","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474922","Abdel-Illah Ibneyahya El Idrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:50",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-312","331","QR164569","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0627\u0644\u0644\u0647 \u0627\u0628\u0646 \u064a\u062d\u064a\u0649 \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Abdel-Illah Ibneyahya El Idrissi","GN64916","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","212","Ouled Ayad","T.C","0.0546","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474923","Mohamed Abiyahya",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:51",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-313","332","QR164570","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0628\u064a \u064a\u062d\u064a\u0649","Mohamed Abiyahya","GN29031","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","94","Ouled Ayad","T.C","0.0795","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474924","Abdeslam Aboutayeb",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:51",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-314","333","QR164571","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0633\u0644\u0627\u0645 \u0627\u0628\u0648\u0637\u064a\u0628","Abdeslam Aboutayeb","GN34678","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","189","Ouled Ayad","T.C","0.0886","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474925","Thami Abi Yahya El Idrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:51",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-315","334","QR164572","Ayant droit","\u0627\u0644\u062a\u0647\u0627\u0645\u064a \u0627\u0628\u064a \u064a\u062d\u064a\u0649 \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Thami Abi Yahya El Idrissi","GN38648","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","259","Ouled Ayad","T.C","0.0498","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474926","Abdellah Abiyahya El Idrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:52",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-316","335","QR164573","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0644\u0647 \u0627\u0628\u064a \u064a\u062d\u064a\u0649 \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Abdellah Abiyahya El Idrissi","GN59905","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","112","Ouled Ayad","T.C","0.05","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474927","Abdelhakim Baba",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:52",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-317","336","QR164574","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u062d\u0643\u064a\u0645 \u0628\u0627\u0628\u0627","Abdelhakim Baba","GN28606","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","193","Ouled Ayad","T.C","0.0502","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474928","Mohamed El-Bouhyaoui",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:53",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-318","337","QR164575","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0644\u0628\u0648\u062d\u064a\u0627\u0648\u064a","Mohamed El-Bouhyaoui","GN673","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","4","Ouled Ayad","T.C","0.0504","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474929","Mohamed Chafik",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:53",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-319","338","QR164576","Ayant droit","\u0645\u062d\u0645\u062f \u0634\u0641\u064a\u0642","Mohamed Chafik","G90262","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","245","Ouled Ayad","T.C","0.0671","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474930","Abdellah Chafik",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:53",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-320","339","QR164577","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0644\u0647 \u0634\u0641\u064a\u0642","Abdellah Chafik","A124827","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","247","Ouled Ayad","T.C","0.0673","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474931","Abderrahmane Chafik",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:54",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-321","340","QR164578","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0627\u0646 \u0634\u0641\u064a\u0642","Abderrahmane Chafik","G116669","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","110","Ouled Ayad","T.C","0.0689","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474932","Abdeslam Aboutayeb",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:54",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-323","342","QR164580","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0633\u0644\u0627\u0645 \u0627\u0628\u0648\u0637\u064a\u0628","Abdeslam Aboutayeb","G164749","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","130","Ouled Ayad","T.C","0.0559","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474933","Mustapha El Idrissi, Jaouad El Idrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:54",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-322","341","QR164579","Ayant droit","\u0627\u0644\u0645\u0635\u0637\u0641\u0649 \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a, \u062c\u0648\u0627\u062f \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Mustapha El Idrissi, Jaouad El Idrissi","GK100185, GN121414","H, H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI, OUI","80","Ouled Ayad","T.C","0.095","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474934","Driss Ez-Zallague",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:55",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-324","343","QR164581","Ayant droit","\u0627\u062f\u0631\u064a\u0633 \u0627\u0644\u0632\u0644\u0627\u0643","Driss Ez-Zallague","GN40312","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","48","Ouled Ayad","T.C","0.0561","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474935","Bouchta El Bouhyaoui",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:55",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-326","345","QR164583","Ayant droit","\u0628\u0648\u0634\u062a\u0649 \u0627\u0644\u0628\u0648\u062d\u064a\u0627\u0648\u064a","Bouchta El Bouhyaoui","GN40322","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","170","Ouled Ayad","T.C","0.0508","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474936","Thami El Bouhyaoui",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:56",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-325","344","QR164582","Ayant droit","\u0627\u0644\u062a\u0647\u0627\u0645\u064a \u0627\u0644\u0628\u0648\u062d\u064a\u0627\u0648\u064a","Thami El Bouhyaoui","GN40359","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","204","Ouled Ayad","T.C","0.0511","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474937","Mustapha El Haiss",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:56",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-327","346","QR164584","Ayant droit","\u0627\u0644\u0645\u0635\u0637\u0641\u0649 \u0627\u0644\u0647\u064a\u0633","Mustapha El Haiss","GN112105","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","72","Ouled Ayad","T.C","0.15","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474938","Mohamed Aboutayeb",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:56",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-328","348","QR164586","Ayant droit","\u0645\u062d\u0645\u062f \u0627\u0628\u0648\u0637\u064a\u0628","Mohamed Aboutayeb","GK114836","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","185","Ouled Ayad","T.C","0.1019","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474939","Bouhya Aboutayeb",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:57",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-329","349","QR164587","Ayant droit","\u0628\u0648\u062d\u064a\u0649 \u0627\u0628\u0648\u0637\u064a\u0628","Bouhya Aboutayeb","GK79093","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","181","Ouled Ayad","T.C","0.1032","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474940","Saadia Eddraa",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:58",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-330","350","QR164588","Ayant droit","\u0627\u0644\u0633\u0639\u062f\u064a\u0629 \u0627\u0644\u062f\u0631\u0627","Saadia Eddraa","GN107168","F","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","210","Ouled Ayad","T.C","0.0519","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474941","Abdelkader Aboutayeb",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:58",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-331","351","QR164589","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0642\u0627\u062f\u0631 \u0627\u0628\u0648 \u0637\u064a\u0628","Abdelkader Aboutayeb","Manque CIN","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","114","Ouled Ayad","T.C","0.0518","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474942","Abderrahman El Andalosy",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:59",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-332","352","QR164590","Ayant droit","\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0627\u0646 \u0627\u0644\u0627\u0646\u062f\u0644\u0633\u064a","Abderrahman El Andalosy","GN69125","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","55","Ouled Ayad","T.C","0.0517","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474943","Abdel-Illah Ibneyahya El Idrissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:59",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-334","354","QR164593","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0627\u0644\u0644\u0647 \u0627\u0628\u0646 \u064a\u062d\u064a\u0649 \u0627\u0644\u0627\u062f\u0631\u064a\u0633\u064a","Abdel-Illah Ibneyahya El Idrissi","GN64916","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","212","Ouled Ayad","T.C","0.0781","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474944","Abdelhakim Baba",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:49:59",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-333","353","QR164591","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u062d\u0643\u064a\u0645 \u0628\u0627\u0628\u0627","Abdelhakim Baba","GN28606","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","193","Ouled Ayad","T.C","0.0661","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474945","Abdeslam Lamouime",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:50:00",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-335","355","QR164592","Ayant droit","\u0639\u0628\u062f \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0645\u0648\u064a\u0645","Abdeslam Lamouime","GN99700","H","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","53","Ouled Ayad","T.C","0.1086","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null],["1474946","Bouchra Touissi",null,null,null,"735","1353","54","CONTROLE","Mohamed AIT MEHDI","MHASSNI","2019-12-07 09:50:00",null,"0","0","1620",null,"26191","0",null,null,null,"0","DAR-BET","54","45",null,null,"AD-Skacem-R25958_30-336","356","QR164594","Ayant droit","\u0628\u0634\u0631\u0649 \u0627\u0644\u062a\u0648\u064a\u0633\u064a","Bouchra Touissi","GN100627","F","Sidi Kacem","Ouargha","Ouled Nouel","Sidi M\'hamed Chelh","R25958\\/30","","Bled Djemaa des Oulad Si Bou Yahia","","OUI","271","Ouled Ayad","T.C","0.0994","OUI","NON","NON","","LOT2","TOPOMAP",null,null,null]]');
            _this.data = data;
            console.log(data);
            var nom;
            _this.c.download = 'updateAttribut3.command';
            //setTimeout(this.a.click() , 20000);
            //this.a.click();
            /*
            this.geojsonTojsmappingobject("MULTIPOLYGON(((-5.135822840350167 33.809652898797836,-5.13589123852563 33.80993469332251,-5.135766864363997 33.8099418257193,-5.1357298093939265 33.80979862265758,-5.135703261834404 33.80964633303581,-5.135822840350167 33.809652898797836,-5.135822840350167 33.809652898797836)))");
            */
            var idmapping;
            var numordre;
            var requeteActuelle = "";
            var requeteFinale = "";
            for (var j = 0; j < data.length; j++) {
                requeteActuelle = " select ";
                for (var i = 0; i < data[j].length; i++) {
                    if (i == 200) {
                        requeteActuelle = requeteActuelle + " ST_GeomFromText('" + data[j][i] + "') ";
                        requeteActuelle = requeteActuelle + ' as "' + "geom" + '" ,';
                    }
                    else if (data[j][i] != null) {
                        requeteActuelle = requeteActuelle + " '" + data[j][i].replace("'", "''") + "' ";
                        requeteActuelle = requeteActuelle + ' as "' + i + '" ,';
                    }
                    else {
                        requeteActuelle = requeteActuelle + " " + "null" + " ";
                        requeteActuelle = requeteActuelle + ' as "' + i + '" ,';
                    }
                }
                requeteActuelle = requeteActuelle.substring(0, requeteActuelle.length - 1);
                requeteActuelle = requeteActuelle + " union ";
                requeteFinale = requeteFinale + requeteActuelle;
            }
            console.log(requeteFinale);
            _this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                "select * from polycontrolejrada ").subscribe(function (data1) {
                var preRequest9 = "";
                for (var i = 0; i < data1["features"].length; i++) {
                    for (var j = 0; j < data.length; j++) {
                        if (data[j][29] == data1["features"][i]["id"]) {
                            var preRequest9_1 = "";
                            preRequest9_1 =
                                "curl 'https://mapping.tools/basic/web/index.php?r=objet%2Fupdate&" +
                                    "id_objet=" + data[j][0] + "" +
                                    "&uid=156" +
                                    "&frombet=0" +
                                    "&values=\\[9737::" + encodeURIComponent(data1["features"][i]["id"]) + "\\]," +
                                    "\\[9738::" + encodeURIComponent(data1["features"][i]["adtiers"]) + "\\]," +
                                    "\\[9751::" + encodeURIComponent(data[j][31]) + "\\]," + //le qrcode a recuperer de data
                                    "\\[9990::" + encodeURIComponent(data1["features"][i]["nom_comp_ar"]) + "\\]," +
                                    "\\[9739::" + encodeURIComponent(data1["features"][i]["nom_comp_fr"]).replace("'", "%27") + "\\]," +
                                    "\\[9742::" + encodeURIComponent(data1["features"][i]["cin"]) + "\\]," +
                                    "\\[9745::" + encodeURIComponent(data1["features"][i]["sexe"]) + "\\]," +
                                    "\\[9743::" + encodeURIComponent(data1["features"][i]["province"]).replace("'", "%27") + "\\]," +
                                    "\\[9771::" + encodeURIComponent(data1["features"][i]["cercle"]).replace("'", "%27") + "\\]," +
                                    "\\[9744::" + encodeURIComponent(data1["features"][i]["caidat"]).replace("'", "%27") + "\\]," +
                                    "\\[9776::" + encodeURIComponent(data1["features"][i]["commune"]).replace("'", "%27") + "\\]," +
                                    "\\[10006::" + encodeURIComponent(data1["features"][i]["reftitreigt"]) + "\\]," +
                                    "\\[9777::" + encodeURIComponent(data1["features"][i]["reftitredar"]) + "\\]," +
                                    "\\[9778::%D8%A7%D9%8A%D8%AA%20%D9%88%D9%84%D8%A7%D9%84%20%D8%A8%D8%B7%D9%8A%D8%B7\\]," +
                                    "\\[9779::" + encodeURIComponent(data1["features"][i]["nomdouar"]).replace("'", "%27") + "\\]," +
                                    "\\[9746::" + encodeURIComponent(data1["features"][i]["inscrilistead"]) + "\\]," +
                                    "\\[9748::" + encodeURIComponent(data1["features"][i]["numordread"]) + "\\]," +
                                    "\\[9747::" + encodeURIComponent(data1["features"][i]["adresse"]).replace("'", "%27") + "\\]," +
                                    "\\[9749::" + encodeURIComponent(data1["features"][i]["consistance"]) + "\\]," +
                                    "\\[9750::" + encodeURIComponent(Number(data1["features"][i]["superficie"]).toFixed(4)) + "\\]," +
                                    "\\[9989::" + encodeURIComponent(data1["features"][i]["cotereconnuparnaib"]) + "\\]," +
                                    "\\[9781::" + encodeURIComponent(data1["features"][i]["plusvalues"]).replace("'", "%27") + "\\]," +
                                    "\\[9782::" + encodeURIComponent(data1["features"][i]["constructions"]).replace("'", "%27") + "\\]," +
                                    "\\[9780::" + encodeURIComponent(data1["features"][i]["limiteconforme"]) + "\\]," +
                                    "\\[9783::" + encodeURIComponent(data1["features"][i]["nomexploitantconforme"]) + "\\]," +
                                    "\\[9752::\\]," +
                                    "\\[11012::\\]," +
                                    "\\[11013::\\]' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Origin: http://evil.com/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: fr-FR,fr-MA;q=0.9,fr;q=0.8,ar-MA;q=0.7,ar;q=0.6,de;q=0.5,en-US;q=0.4,en;q=0.3,tr;q=0.2' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://mapping.tools/basic/web/index.php?r=objet%2Fupdate&id_objet=1229960&uid=156&frombet=0&values=' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: PHPSESSID=08qecgcmltklk1bjq3m1udgpk3' -H 'Connection: keep-alive' --data '" +
                                    "Objet%5BSUPERFICIE%5D=" + encodeURIComponent(Number(data1["features"][i]["superficie"]).toFixed(4)) + "&" +
                                    "Objet%5BID_MEMBER%5D=156" +
                                    "&Objet%5BNOM_OBJET%5D=" + encodeURIComponent(data1["features"][i]["nom_comp_fr"]).replace(' ', '+').replace("'", "\\'") + "" +
                                    "&Objet%5BDATE_CREATION%5D=2019-10-16+17%3A53%3A39" +
                                    "&Objet%5BSRID%5D=26191" +
                                    "&Objet%5BID_ORGANISME%5D=54' --compressed";
                            //this.c.href = this.c.href + encodeURIComponent(preRequest9 + "\n\n");
                        }
                    }
                }
                console.log(data1);
                var nom;
                var idmapping;
                var numordre;
            });
            //this.avancementSociete();
            /*
            for(let i = 790 ; i < 799; i++){
            //for(let i = 0 ; i < (data as any).length; i++){
      
              nom = data[i][1];
              idmapping = data[i][0];
              numordre = data[i][28];
      
              //if(1230232 == idmapping){
      
      
      
              setTimeout(this.fonctionAuxiliaire(idmapping,numordre,i) , 1000);
              //}
      
            }
            */
            var indexDebut = 119;
            var indexFin = 799;
            setTimeout(_this.fonctionAuxiliaire(_this.data[indexDebut][0], Number(_this.data[indexDebut][29]), indexDebut, indexFin), 1000);
        }); //je suis la requete
    }
    PostMappingToolsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostMappingToolsPage');
    };
    PostMappingToolsPage.prototype.avancementSociete = function () {
        var formData = new FormData();
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
        var _loop_1 = function (i) {
            formData.append("id_organisme", i.toString());
            this_1.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php", formData).subscribe(function (data) {
                //console.log(data);
                var nom;
                var idmapping;
                var numordre;
                if (data && data[0]) {
                    console.log(i);
                    console.log("nom : " + data[0][9]);
                    console.log("societe : " + data[0][10]);
                    console.log("zone : " + data[0][2]);
                    console.log("nombre de parcelle : " + data.length);
                    console.log("******************");
                    console.log("******************");
                    console.log("******************");
                    console.log("******************");
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < 200; i++) {
            _loop_1(i);
        }
    };
    PostMappingToolsPage.prototype.geojsonTojsmappingobject = function (geojson) {
        var stringretour = "";
        var jsobject = __WEBPACK_IMPORTED_MODULE_3_wellknown__["parse"](geojson).coordinates[0];
        console.log(jsobject);
        for (var partie = 0; partie < jsobject.length; partie++) {
            for (var i = 0; i < jsobject[partie].length; i++) {
                console.log(jsobject[partie][i]);
                var pointNordMaroc = __WEBPACK_IMPORTED_MODULE_4_proj4__["default"]("+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=-5.4 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ", jsobject[partie][i]);
                console.log(pointNordMaroc);
                stringretour = stringretour + "B" + (i + 1).toString();
                stringretour = stringretour + ";";
                stringretour = stringretour + pointNordMaroc[0];
                stringretour = stringretour + ";";
                stringretour = stringretour + pointNordMaroc[1];
                stringretour = stringretour + "*";
            }
            console.log(stringretour);
            return stringretour;
        }
    };
    PostMappingToolsPage.prototype.fonctionAuxiliaire = function (idmapping, numordre, i, limit) {
        var _this = this;
        this.httpClient.get("http://ec2-35-180-89-99.eu-west-3.compute.amazonaws.com:9091/requestAny/SELECT id%20,%20st_astext(st_transform(ST_Multi(geom),4326))%20as%20shape%20,st_area(geom) as superficie " +
            //" , nom_comp_fr as nom " +
            "FROM intecontrolesidikacem where text  = '" + numordre + "'")
            .subscribe(function (data0) {
            if (data0["features"].count != 0 && data0["features"][0] && data0["features"][0]["shape"]) {
                console.log("surface :" + data0["features"][0]["superficie"] + "-" + numordre + "=" + Math.abs(numordre - data0["features"][0]["superficie"]));
                var stringretour = "";
                var jsobject = __WEBPACK_IMPORTED_MODULE_3_wellknown__["parse"](data0["features"][0]["shape"]).coordinates;
                console.log(jsobject);
                var formData2 = new FormData();
                formData2.append("fonction", "updateObjetGeom");
                formData2.append("id_objet", idmapping.toString());
                formData2.append("wkt", data0["features"][0]["shape"]);
                formData2.append("id_organisme", "54");
                formData2.append("nom_objet", '');
                formData2.append("province", "");
                formData2.append("region", "FES - MEKNES");
                /*
                this.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php",
                  formData2
                ).subscribe( data2 => {
      
                    console.log(data2);
      
      
      
                  },
                  err =>{
      
                  }
                );
                */
                var preRequest2 = "";
                if (data0["features"][0]["nom"] && data0["features"][0]["nom"].indexOf("'") < 0) {
                    preRequest2 = "curl 'https://mapping.tools/loginregister/darfunctions.php' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Origin: http://evil.com/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: fr-FR,fr-MA;q=0.9,fr;q=0.8,ar-MA;q=0.7,ar;q=0.6,de;q=0.5,en-US;q=0.4,en;q=0.3,tr;q=0.2' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://mapping.tools/' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: PHPSESSID=08qecgcmltklk1bjq3m1udgpk3' -H 'Connection: keep-alive' --data 'fonction=updateObjetGeom&" +
                        "id_objet=" + idmapping.toString() + "&" +
                        "wkt=" + data0["features"][0]["shape"] + "&" +
                        "id_organisme=54&" +
                        "nom_objet=" + data0["features"][0]["nom"] + "&" +
                        "province=F%C3%A8s&" +
                        "region=FES+-+MEKNES' --compressed";
                }
                else {
                    preRequest2 = "curl 'https://mapping.tools/loginregister/darfunctions.php' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Origin: http://evil.com/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: fr-FR,fr-MA;q=0.9,fr;q=0.8,ar-MA;q=0.7,ar;q=0.6,de;q=0.5,en-US;q=0.4,en;q=0.3,tr;q=0.2' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://mapping.tools/' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: PHPSESSID=08qecgcmltklk1bjq3m1udgpk3' -H 'Connection: keep-alive' --data 'fonction=updateObjetGeom&" +
                        "id_objet=" + idmapping.toString() + "&" +
                        "wkt=" + data0["features"][0]["shape"] + "&" +
                        "id_organisme=54&" +
                        "nom_objet=" + '' + "&" +
                        "province=F%C3%A8s&" +
                        "region=FES+-+MEKNES' --compressed";
                }
                _this.b.href = _this.b.href +
                    encodeURIComponent(preRequest2 + "\n\n");
                for (var partie = 0; partie < jsobject.length; partie++) {
                    for (var j = 0; j < jsobject[partie][0].length; j++) {
                        console.log(jsobject[partie][0][j]);
                        var pointNordMaroc = __WEBPACK_IMPORTED_MODULE_4_proj4__["default"]("+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=-5.4 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ", jsobject[partie][0][j]);
                        console.log(pointNordMaroc);
                        stringretour = stringretour + "B" + (j + 1).toString();
                        stringretour = stringretour + ";";
                        stringretour = stringretour + pointNordMaroc[0];
                        stringretour = stringretour + ";";
                        stringretour = stringretour + pointNordMaroc[1];
                        stringretour = stringretour + "*";
                    }
                    console.log(stringretour);
                    _this.fonctionAuxiliaire2(idmapping, stringretour, formData2, partie);
                }
            }
            if (i < limit) {
                _this.fonctionAuxiliaire(_this.data[i + 1][0], Number(_this.data[i + 1][29]), i + 1, limit);
            }
        });
    };
    PostMappingToolsPage.prototype.fonctionAuxiliaire2 = function (idmapping, stringretour, formData2, partie) {
        var formData3 = new FormData();
        formData3.append("id_objet", idmapping.toString());
        formData3.append("nom", "P" + (partie + 1).toString());
        formData3.append("chaine", stringretour);
        formData3.append("id_polygon", "-1");
        var preRequest3 = "curl 'https://mapping.tools/basic/web/index.php?r=objet%2Fpolygonpost' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Origin: http://evil.com/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: fr-FR,fr-MA;q=0.9,fr;q=0.8,ar-MA;q=0.7,ar;q=0.6,de;q=0.5,en-US;q=0.4,en;q=0.3,tr;q=0.2' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Referer: https://mapping.tools/' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: PHPSESSID=08qecgcmltklk1bjq3m1udgpk3' -H 'Connection: keep-alive' --data '" +
            "id_objet=" + idmapping.toString() + "&" +
            "nom=P" + (partie + 1).toString() + "&" +
            "chaine=" + stringretour + "&" +
            "id_polygon=-1' --compressed";
        this.a.href = this.a.href +
            encodeURIComponent(preRequest3 + "\n\n");
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({})
        };
        /*
    
    
        this.httpClient.post("http://mapping-cloud.com/basic/web/index.php?r=objet/polygonpost",
          formData3,
          httpOptions
    
        ).subscribe( data3 => {
    
          console.log(data3);
        },err => {
    
        });
        */
    };
    PostMappingToolsPage.prototype.clickBoutton1 = function () {
        console.log(this.a.href);
        this.a.click();
    };
    PostMappingToolsPage.prototype.clickBoutton2 = function () {
        console.log(this.b.href);
        this.b.click();
    };
    PostMappingToolsPage.prototype.clickBoutton3 = function () {
        console.log(this.c.href);
        this.c.click();
    };
    PostMappingToolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-mapping-tools',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/post-mapping-tools/post-mapping-tools.html"*/'<!--\n  Generated template for the PostMappingToolsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>postMappingTools</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button (click)="clickBoutton1()" > Download File Comp </button>\n<button (click)="clickBoutton2()" > Download File Principal </button>\n  <br><br><br><br>\n<button (click)="clickBoutton3()" > Download File Attributs </button>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/post-mapping-tools/post-mapping-tools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PostMappingToolsPage);
    return PostMappingToolsPage;
}());

// WEBPACK FOOTER //
// ./src/pages/post-mapping-tools/post-mapping-tools.ts
//# sourceMappingURL=post-mapping-tools.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stockage_stockage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_camera_camera__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path_ngx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_map_location_map_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ajouter_parcelle_ajouter_parcelle__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_liste_parcelle_liste_parcelle__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_base64_to_gallery__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_photo_viewer__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_saisie_manuelle_coordonnees_saisie_manuelle_coordonnees__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ajouter_appareil_ajouter_appareil__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import {PostMappingToolsPage} from "../pages/post-mapping-tools/post-mapping-tools";


// @ts-ignore
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_liste_parcelle_liste_parcelle__["a" /* ListeParcellePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ajouter_parcelle_ajouter_parcelle__["a" /* AjouterParcellePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_location_map_location__["a" /* MapLocationPage */],
                //PostMappingToolsPage,
                __WEBPACK_IMPORTED_MODULE_20__pages_saisie_manuelle_coordonnees_saisie_manuelle_coordonnees__["a" /* SaisieManuelleCoordonneesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ajouter_appareil_ajouter_appareil__["a" /* AjouterAppareilPage */]
                //PostgisScriptPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajouter-appareil/ajouter-appareil.module#AjouterAppareilPageModule', name: 'AjouterAppareilPage', segment: 'ajouter-appareil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajouter-parcelle/ajouter-parcelle.module#AjouterParcellePageModule', name: 'AjouterParcellePage', segment: 'ajouter-parcelle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/liste-parcelle/liste-parcelle.module#ListeParcellePageModule', name: 'ListeParcellePage', segment: 'liste-parcelle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-location/map-location.module#MapLocationPageModule', name: 'MapLocationPage', segment: 'map-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-mapping-tools/post-mapping-tools.module#PostMappingToolsPageModule', name: 'PostMappingToolsPage', segment: 'post-mapping-tools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saisie-manuelle-coordonnees/saisie-manuelle-coordonnees.module#SaisieManuelleCoordonneesPageModule', name: 'SaisieManuelleCoordonneesPage', segment: 'saisie-manuelle-coordonnees', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_liste_parcelle_liste_parcelle__["a" /* ListeParcellePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ajouter_parcelle_ajouter_parcelle__["a" /* AjouterParcellePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_location_map_location__["a" /* MapLocationPage */],
                //PostMappingToolsPage,
                __WEBPACK_IMPORTED_MODULE_20__pages_saisie_manuelle_coordonnees_saisie_manuelle_coordonnees__["a" /* SaisieManuelleCoordonneesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ajouter_appareil_ajouter_appareil__["a" /* AjouterAppareilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__providers_stockage_stockage__["a" /* StockageProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path_ngx__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_stockage_stockage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ajouter_appareil_ajouter_appareil__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











//import {PostMappingToolsPage} from "../pages/post-mapping-tools/post-mapping-tools";
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, storage, httpClient, toastCtrl, stockageProvider, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.storage = storage;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.stockageProvider = stockageProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.progressBar = 0;
        this.listePhoto = {
            "photocinrecto": "photocinrecto",
            "photocinverso": "photocinverso",
            "photoparcelle": "photoparcelle",
            "photocroquis": "photocroquis"
        };
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.openPage();
            var _loop_1 = function (key) {
                console.log(key);
                //if(key == "photoparcelle"){
                _this.storage.get(key).then(function (val) {
                    var _loop_2 = function (itemid) {
                        if (val[itemid]["sent"].toString()) {
                            console.log(val[itemid]["sent"]);
                            _this.httpClient.post(val[itemid]["requete"], val[itemid]["photo"]).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["timeout"])(100000))
                                .subscribe(function (data) {
                            }, function (err) {
                                console.log("eee");
                                var messageGetToast = "Parcelle : " + itemid + " Informations attributaires enregistrées";
                                console.log(JSON.stringify(err));
                                if (err.error && (err.error.message == "org.postgresql.util.PSQLException: Aucun résultat retourné par la requête." || err.error.message == "org.postgresql.util.PSQLException: No results were returned by the query.")) {
                                    var toast = _this.toastCtrl.create({
                                        message: messageGetToast,
                                        duration: 1000,
                                        position: 'top',
                                        cssClass: "toast-success"
                                    });
                                    toast.present();
                                    _this.stockageProvider.updatePushValue(key, itemid, { sent: true });
                                }
                            });
                        }
                    };
                    for (var itemid in val) {
                        _loop_2(itemid);
                    }
                }, (function (reason) {
                    console.log(reason);
                }));
                //}
            };
            /*
      
            try{
      
              Pro.deploy.configure({channel: 'Production',updateMethod:"auto"}).then( onsucces => {
      
                this.getVersionInfo();
      
                this.checkChannel();
      
                this.performManualUpdate();
      
              });
      
            }
            catch (err) {
              console.log(err);
            }
            */
            for (var key in _this.listePhoto) {
                _loop_1(key);
            }
        });
    }
    MyApp.prototype.getVersionInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var versionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].deploy.getCurrentVersion()];
                    case 1:
                        versionInfo = _a.sent();
                        console.log(versionInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.checkChannel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].deploy.getConfiguration()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.performManualUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var update, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].deploy.checkForUpdate()];
                    case 1:
                        update = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].deploy.downloadUpdate(function (progress) { _this.progressBar = progress; })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].deploy.extractUpdate()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].deploy.reloadApp()];
                    case 4:
                        _a.sent();
                        if (update.available) {
                            alert("MAJ Effectué");
                        }
                        else {
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        // We encountered an error.
                        // Here's how we would log it to Ionic Pro Monitoring while also catching:
                        alert(JSON.stringify(err_2));
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.openPage = function () {
        var _this = this;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        /*
        if(page == "enquetePoi"){
          this.nav.setRoot(ListeParcellePage);
    
        }
        */
        this.storage.get("appareilId").then(function (val) {
            console.log(_this.platform);
            if (_this.platform._platforms[0] && _this.platform._platforms[0] == "core") {
                if (!val) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_ajouter_appareil_ajouter_appareil__["a" /* AjouterAppareilPage */]);
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                console.log(val);
            }
            if (_this.platform.is("ios") || _this.platform.is("android")) {
                if (!val) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_ajouter_appareil_ajouter_appareil__["a" /* AjouterAppareilPage */]);
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                console.log(val);
            }
        }, (function (reason) {
            console.log(reason);
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/app/app.html"*/'\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_stockage_stockage__["a" /* StockageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StockageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StockageProvider = /** @class */ (function () {
    function StockageProvider(storage, events) {
        this.storage = storage;
        this.events = events;
    }
    // on suppose que la valeur du key est de type Objet....
    // ici on ajoute un attribut nomé "id" contenant la valeur "value"
    StockageProvider.prototype.updatePushValue = function (key, id, value) {
        var _this = this;
        this.storage.get(key).then(function (val) {
            console.log(1);
            if (!val) {
                val = {};
            }
            console.log(1);
            //this.data[key] = val;
            console.log(1);
            if (val == undefined || val == null) {
                val = {};
            }
            console.log("22");
            console.log(val.toString().substring(15));
            console.log("typeof", typeof val);
            console.log(7);
            if (typeof val == "object") {
                console.log(8);
                val[id] = value;
                console.log(9);
                _this.setValue(key, val);
                console.log(10);
            }
            else {
                console.log("Il ne sagit pas d'une valeur de type Object");
            }
        }).catch(function (error) {
            console.log('get error for ' + key + '', JSON.stringify(error));
        });
    };
    // set a key/value
    StockageProvider.prototype.setValue = function (key, value) {
        var _this = this;
        console.log(11);
        this.storage.set(key, value).then(function (response) {
            console.log(12);
            _this.events.publish('refreshphotos', {});
            //get Value Saved in key
            _this.getValue(key);
        }).catch(function (error) {
            console.log('set error for ' + key + ' ', error);
        });
    };
    // get a key/value pair
    StockageProvider.prototype.getValue = function (key) {
        var _this = this;
        this.storage.get(key).then(function (val) {
            _this.data[key] = "";
            _this.data[key] = val;
        }).catch(function (error) {
            console.log('get error for ' + key + '', error);
        });
    };
    // Remove a key/value pair
    StockageProvider.prototype.removeKey = function (key) {
        var _this = this;
        this.storage.remove(key).then(function () {
            console.log('removed ' + key);
            _this.data[key] = "";
        }).catch(function (error) {
            console.log('removed error for ' + key + '', error);
        });
    };
    StockageProvider.prototype.traverseKeys = function () {
        this.storage.forEach(function (value, key, iterationNumber) {
            console.log("key " + key);
            console.log("iterationNumber " + iterationNumber);
            console.log("value " + JSON.stringify(value));
        });
    };
    // Traverse key/value pairs
    StockageProvider.prototype.listKeys = function () {
        this.storage.keys().then(function (k) {
            console.table(k);
        });
    };
    StockageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], StockageProvider);
    return StockageProvider;
}());

//# sourceMappingURL=stockage.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map