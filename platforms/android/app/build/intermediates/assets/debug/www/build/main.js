webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeParcellePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajouter_parcelle_ajouter_parcelle__ = __webpack_require__(177);
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
    function ListeParcellePage(navCtrl, actionSheetCtrl, navParams, httpClient, toastCtrl, cameraProvider) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.cameraProvider = cameraProvider;
        this.objetActuel = {};
        this.listeObjetActuelle = [];
        this.listeValeurFiltre = ["douar", "id", "adresse", "nom_douar"];
        this.chargement = false;
        this.refresh();
    }
    ListeParcellePage.prototype.refresh = function () {
        var _this = this;
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
            .subscribe(function (data) {
            _this.listeObjetActuelle = data.features;
            _this.listeObjetActuelleFiltre = _this.listeObjetActuelle;
            _this.chargement = false;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ajouter_parcelle_ajouter_parcelle__["a" /* AjouterParcellePage */], {
            informationsActuelles: item,
            action: "modifier"
        });
    };
    ListeParcellePage.prototype.ajouterItem = function () {
        var _this = this;
        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "insert into parcelles(consistance,plusvalues,constructions,adresse,coldenaib) " +
            "values (" +
            "" + this.adaptValueQuery(null, "text") + "," +
            "" + this.adaptValueQuery(null, "text") + "," +
            "" + this.adaptValueQuery(null, "text") + "," +
            "" + this.adaptValueQuery(null, "text") + "," +
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
                        _this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "DELETE FROM public.parcelles WHERE id = " + item.id)
                            .subscribe(function (data) {
                        }, function (error1) {
                            _this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
            selector: 'page-liste-parcelle',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/liste-parcelle/liste-parcelle.html"*/'\n\n<!--\n  Generated template for the ListeFournisseurPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Total : {{total(listeObjetActuelleFiltre)}}\n      <br>\n      <span *ngIf="chargement" style="color:red">Chargement ... </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item padding="0">\n    <h1 >Liste Parcelle ({{total(listeObjetActuelleFiltre)}}) </h1>\n    <ion-icon name="add-circle" (click)="ajouterItem()" item-end></ion-icon>\n  </ion-item>\n\n  <ion-item style="padding-right: 5px" >\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  </ion-item>\n\n\n\n  <ion-list >\n    <button mode="md" ion-item *ngFor="let item of listeObjetActuelleFiltre"   (click)="itemTapped($event, item)">\n      Parcelle P{{item?.id}}\n      <p>Plus values : {{item?.plusvalues}}</p>\n      <p>Constructions : {{item?.constructions}}</p>\n      <p>Adresse : {{item?.adresse}}</p>\n      <p>Consistance : {{item?.consistance}}</p>\n      <p>Col Naïb : {{item?.coldenaib}}</p>\n\n      <p *ngIf="item?.presencephotocin" style="font-weight: bold;color:green">Photo CIN Enregistrée </p>\n      <p *ngIf="!item?.presencephotocin" style="font-weight: bold;color:red">Photo CIN Manquante</p>\n\n      <p *ngIf="item?.presencephotoparcelle" style="font-weight: bold;color:green">Photo Parcelle Enregistrée </p>\n      <p *ngIf="!item?.presencephotoparcelle" style="font-weight: bold;color:red">Photo Parcelle Manquante</p>\n\n      <p *ngIf="item?.presenceshape" style="font-weight: bold;color:green">Centroide Enregistré </p>\n      <p *ngIf="!item?.presenceshape" style="font-weight: bold;color:red">Centroide Manquant</p>\n\n      <ion-icon  style="zoom:1; /*background-color: #32db64;*/padding-right: 10px;padding-left: 30px;padding-top: 10px;padding-bottom: 10px;" name="md-more" (click)="detailItemTapped($event, item)" item-end></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/liste-parcelle/liste-parcelle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */]])
    ], ListeParcellePage);
    return ListeParcellePage;
}());

//# sourceMappingURL=liste-parcelle.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_esri_loader__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_esri_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_wellknown__ = __webpack_require__(150);
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
            var _a, Point, Color, geometryJsonUtils, Map, MapView, Locate, Graphic, SimpleFillSymbol, SimpleLineSymbol, map, symbol, mapView, point, graphicActuel, locateBtn;
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
                                "esri/symbols/SimpleLineSymbol"
                            ])
                                .catch(function (err) {
                                console.error("ArcGIS: ", err);
                            })];
                    case 2:
                        _a = _b.sent(), Point = _a[0], Color = _a[1], geometryJsonUtils = _a[2], Map = _a[3], MapView = _a[4], Locate = _a[5], Graphic = _a[6], SimpleFillSymbol = _a[7], SimpleLineSymbol = _a[8];
                        map = new Map({
                            basemap: 'hybrid'
                        });
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
                        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "select id, St_astext(shape) as shape " +
                            "from centroides " +
                            "where not shape is null").subscribe(function (data) {
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
                        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "select%20%20id,collectivi,ordre," + '"vocation p"' + ",superficie,%20St_astext(shape)%20as%20shape%20" +
                            "from%20occupirr").subscribe(function (data) {
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
                        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path_ngx__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stockage_stockage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64_to_gallery__ = __webpack_require__(332);
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
                    _this.httpClient.post("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
                                requete: "http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjouterParcellePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_location_map_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_wellknown__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_wellknown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_wellknown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_proj4__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stockage_stockage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__ = __webpack_require__(346);
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
                _this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
        //this.stockageProvider.traverseKeys();
        //ajout de la couche des titres DA
    }
    AjouterParcellePage.prototype.refreshCentroides = function () {
        var _this = this;
        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "update parcelles set " +
            " consistance = " + this.adaptValueQuery(this.objetActuel.consistance, "text") +
            ", plusvalues = " + this.adaptValueQuery(this.objetActuel.plusvalues, "text") +
            ", constructions = " + this.adaptValueQuery(this.objetActuel.constructions, "text") +
            ", adresse = " + this.adaptValueQuery(this.objetActuel.adresse, "text") +
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_location_map_location__["a" /* MapLocationPage */], {
            action: "getLocation",
            idparcelle: this.objetActuel.id,
            x: this.objetActuel.x,
            y: this.objetActuel.y
        });
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
                        _this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
        this.httpClient.post("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
                    requete: "http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
            this_1.httpClient.post("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
                        requete: "http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
                    _this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
                    _this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
    AjouterParcellePage.prototype.afficherPhoto = function (param) {
        this.photoViewer.show(this.objetActuel.photoparcelle);
    };
    AjouterParcellePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajouter-parcelle',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/ajouter-parcelle/ajouter-parcelle.html"*/'<!--\n  Generated template for the AjouterProjetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n    <ion-title>Parcelle : {{objetActuel.id}} </ion-title>\n\n    <ion-buttons end>\n\n\n      <div (click)="detailActionMenu()">\n        <ion-icon  style="zoom:1.5; /*background-color: #32db64;*/padding-right: 10px;padding-left: 30px;padding-top: 0px;padding-bottom: 0px;" name="md-more"  item-end></ion-icon>\n\n      </div>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n    <h1 >Informations :</h1>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Parcelle : </ion-label>\n    <ion-input text-center type="text" readonly="true" [(ngModel)]="objetActuel.id"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Consistance:</ion-label>\n    <ion-select (ionChange) = "onConsistanceSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.consistanceionselect"  >\n      <ion-option *ngFor="let item of listeChoixConsistance" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.consistanceionselect || objetActuel.consistance">\n    <ion-input  (ngModelChange)="onConsistanceInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.consistance"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Plus Values:</ion-label>\n    <ion-select (ionChange) = "onPlusvaluesSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.plusvaluesionselect"  >\n      <ion-option *ngFor="let item of listeChoixPlusvalues" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.plusvaluesionselect || objetActuel.plusvalues">\n    <ion-input (ngModelChange)="onPlusvaluesInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.plusvalues"  ></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Constructions: </ion-label>\n    <ion-select (ionChange) = "onConstructionsSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.constructionsionselect"  >\n      <ion-option *ngFor="let item of listeChoixConstructions" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.constructionsionselect || objetActuel.constructions">\n    <ion-input (ngModelChange)="onConstructionsInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.constructions"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      Adresse :\n    </ion-label>\n    <ion-input text-center type="text" [(ngModel)]="objetActuel.adresse"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      Coll selon Naïb :\n    </ion-label>\n    <ion-input text-center type="text" [(ngModel)]="objetActuel.coldenaib"  ></ion-input>\n  </ion-item>\n\n\n\n\n\n  <button type="submit" color="tertiary" ion-button (click)="enregistrerInformationsAttributaires()" block >\n    Enregistrer modifications\n  </button>\n\n  <br><br>\n\n  <ion-item  [id]="id"  style="padding:4" >\n\n    <ion-label style="color: #000;">\n      <h1 >Bornes Centroïdes :</h1>\n\n\n\n\n    </ion-label>\n\n\n\n    <ion-icon name="add-circle" (click)="recupererGraphic()" item-end></ion-icon>\n\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <div *ngFor="let item of listeCentroides;let index = index;">\n\n      <button   mode="md" ion-item    (click)="itemTapped($event, item)">\n        Borne {{index+1}}\n        <p>X = {{item.xnordmaroc.toFixed(2)}} </p>\n        <p>Y = {{item.ynordmaroc.toFixed(2)}} </p>\n\n        <ion-icon  style="zoom:1; /*background-color: #32db64;*/padding-right: 10px;padding-left: 30px;padding-top: 10px;padding-bottom: 10px;" name="md-more" (click)="detailItemTapped($event, item)" item-end></ion-icon>\n      </button>\n\n    </div>\n\n\n  </ion-list>\n\n\n\n\n  <ion-item  *ngIf="bddPhoto[\'photocinrecto\'] && bddPhoto[\'photocinrecto\'][objetActuel.id] &&  bddPhoto[\'photocinrecto\'][objetActuel.id][\'sent\'].toString() === \'false\' " padding="0" style="border-bottom: 0px;background-color: #f53d3d">\n    <h1 >Photo CIN Recto:</h1>\n  </ion-item>\n  <ion-item  *ngIf="bddPhoto[\'photocinrecto\'] && bddPhoto[\'photocinrecto\'][objetActuel.id] &&  bddPhoto[\'photocinrecto\'][objetActuel.id][\'sent\'].toString() === \'true\'"  padding="0" style="border-bottom: 0px;background-color: #32db64">\n    <h1 >Photo CIN Recto:</h1>\n  </ion-item>\n  <ion-item *ngIf="!bddPhoto[\'photocinrecto\'] || !bddPhoto[\'photocinrecto\'][objetActuel.id]" padding="0" style="border-bottom: 0px;">\n    <h1 >Photo CIN Recto :</h1>\n  </ion-item>\n\n\n  <img style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocinrecto" *ngIf="objetActuel.photocinrecto"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocinrecto\',1200,2000,100)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n  <div *ngIf="objetActuel.photocinrecto" text-center>\n    <button ion-button round  (click)="reenvoyerPhoto(\'photocinrecto\')">\n      Réenvoyer  <ion-icon padding name="refresh"></ion-icon>\n    </button>\n  </div>\n\n\n  <ion-item  *ngIf="bddPhoto[\'photocinverso\'] && bddPhoto[\'photocinverso\'][objetActuel.id] &&  bddPhoto[\'photocinverso\'][objetActuel.id][\'sent\'].toString() === \'false\' " padding="0" style="border-bottom: 0px;background-color: #f53d3d">\n    <h1 >Photo CIN Verso:</h1>\n  </ion-item>\n  <ion-item  *ngIf="bddPhoto[\'photocinverso\'] && bddPhoto[\'photocinverso\'][objetActuel.id] &&  bddPhoto[\'photocinverso\'][objetActuel.id][\'sent\'].toString() === \'true\'"  padding="0" style="border-bottom: 0px;background-color: #32db64">\n    <h1 >Photo CIN Verso:</h1>\n  </ion-item>\n  <ion-item *ngIf="!bddPhoto[\'photocinverso\'] || !bddPhoto[\'photocinverso\'][objetActuel.id]" padding="0" style="border-bottom: 0px;">\n    <h1 >Photo CIN Verso :</h1>\n  </ion-item>\n\n  <img style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocinverso" *ngIf="objetActuel.photocinverso"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocinverso\',1200,2000,100)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n  <div *ngIf="objetActuel.photocinverso" text-center>\n    <button ion-button round  (click)="reenvoyerPhoto(\'photocinverso\')">\n      Réenvoyer  <ion-icon padding name="refresh"></ion-icon>\n    </button>\n  </div>\n\n  <ion-item  *ngIf="bddPhoto[\'photoparcelle\'] && bddPhoto[\'photoparcelle\'][objetActuel.id] &&  bddPhoto[\'photoparcelle\'][objetActuel.id][\'sent\'].toString() === \'false\' " padding="0" style="border-bottom: 0px;background-color: #f53d3d">\n    <h1 >Photo Parcelle:</h1>\n  </ion-item>\n  <ion-item  *ngIf="bddPhoto[\'photoparcelle\'] && bddPhoto[\'photoparcelle\'][objetActuel.id] &&  bddPhoto[\'photoparcelle\'][objetActuel.id][\'sent\'].toString() === \'true\'"  padding="0" style="border-bottom: 0px;background-color: #32db64">\n    <h1 >Photo Parcelle:</h1>\n  </ion-item>\n  <ion-item *ngIf="!bddPhoto[\'photoparcelle\'] || !bddPhoto[\'photoparcelle\'][objetActuel.id]" padding="0" style="border-bottom: 0px;">\n    <h1 >Photo Parcelle:</h1>\n  </ion-item>\n\n\n  <img (click)="afficherPhoto(this)" style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photoparcelle" *ngIf="objetActuel.photoparcelle"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photoparcelle\',1200,2000,100)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n  <div *ngIf="objetActuel.photoparcelle" text-center>\n    <button ion-button round  (click)="reenvoyerPhoto(\'photoparcelle\')">\n      Réenvoyer  <ion-icon padding name="refresh"></ion-icon>\n    </button>\n  </div>\n\n  <ion-item  *ngIf="bddPhoto[\'photocroquis\'] && bddPhoto[\'photocroquis\'][objetActuel.id] &&  bddPhoto[\'photocroquis\'][objetActuel.id][\'sent\'].toString() === \'false\' " padding="0" style="border-bottom: 0px;background-color: #f53d3d">\n    <h1 >Photo Croquis:</h1>\n  </ion-item>\n  <ion-item  *ngIf="bddPhoto[\'photocroquis\'] && bddPhoto[\'photocroquis\'][objetActuel.id] &&  bddPhoto[\'photocroquis\'][objetActuel.id][\'sent\'].toString() === \'true\'"  padding="0" style="border-bottom: 0px;background-color: #32db64">\n    <h1 >Photo Croquis:</h1>\n  </ion-item>\n  <ion-item *ngIf="!bddPhoto[\'photocroquis\'] || !bddPhoto[\'photocroquis\'][objetActuel.id]" padding="0" style="border-bottom: 0px;">\n    <h1 >Photo Croquis:</h1>\n  </ion-item>\n\n  <img  style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocroquis" *ngIf="objetActuel.photocroquis"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocroquis\',1200,2000,100)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n  <div *ngIf="objetActuel.photocroquis" text-center>\n    <button ion-button round  (click)="reenvoyerPhoto(\'photocroquis\')">\n      Réenvoyer  <ion-icon padding name="refresh"></ion-icon>\n    </button>\n  </div>\n\n\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n  </ion-item>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/ajouter-parcelle/ajouter-parcelle.html"*/,
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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostMappingToolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wellknown__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wellknown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_wellknown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_proj4__ = __webpack_require__(334);
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
        this.geojsonTojsmappingobject("MULTIPOLYGON(((-5.135822840350167 33.809652898797836,-5.13589123852563 33.80993469332251,-5.135766864363997 33.8099418257193,-5.1357298093939265 33.80979862265758,-5.135703261834404 33.80964633303581,-5.135822840350167 33.809652898797836,-5.135822840350167 33.809652898797836)))");
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
        formData.append("id_organisme", "54");
        this.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php", formData).subscribe(function (data) {
            console.log(data);
            var nom;
            var idmapping;
            var numordre;
            for (var i = 0; i < data.length; i++) {
                nom = data[i][1];
                idmapping = data[i][0];
                numordre = data[i][28];
                //if(1230232 == idmapping){
                setTimeout(_this.fonctionAuxiliaire(idmapping, numordre, i), 1000);
                //}
            }
        });
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
        for (var i = 0; i < 200; i++) {
            formData.append("id_organisme", i.toString());
            this.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php", formData).subscribe(function (data) {
                //console.log(data);
                var nom;
                var idmapping;
                var numordre;
                if (data && data[0]) {
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
    PostMappingToolsPage.prototype.fonctionAuxiliaire = function (idmapping, numordre, i) {
        var _this = this;
        this.httpClient.get("http://ec2-35-180-97-251.eu-west-3.compute.amazonaws.com:9091/requestAny/SELECT * FROM public.parcellesuperficie where idparcelle = '" + numordre + "'")
            .subscribe(function (data0) {
            var stringretour = "";
            var jsobject = __WEBPACK_IMPORTED_MODULE_3_wellknown__["parse"](data0["features"][0]["shape"]).coordinates;
            console.log(jsobject);
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
                var formData2 = new FormData();
                formData2.append("fonction", "updateObjetGeom");
                formData2.append("id_objet", idmapping.toString());
                formData2.append("wkt", data0["features"][0]["shape"]);
                formData2.append("id_organisme", "54");
                formData2.append("nom_objet", "nom");
                formData2.append("province", "");
                formData2.append("region", "FES - MEKNES");
                _this.fonctionAuxiliaire2(idmapping, stringretour, formData2, partie);
            }
        });
    };
    PostMappingToolsPage.prototype.fonctionAuxiliaire2 = function (idmapping, stringretour, formData2, partie) {
        var _this = this;
        this.httpClient.post("http://mapping-cloud.com/loginregister/darfunctions.php", formData2).subscribe(function (data2) {
            console.log(data2);
        }, function (err) {
            var formData3 = new FormData();
            formData3.append("id_objet", idmapping.toString());
            formData3.append("nom", "P" + (partie + 1).toString());
            formData3.append("chaine", stringretour);
            formData3.append("id_polygon", "-1");
            _this.httpClient.post("http://mapping-cloud.com/basic/web/index.php?r=objet/polygonpost", formData3).subscribe(function (data3) {
                console.log(data3);
            }, function (err) {
            });
        });
    };
    PostMappingToolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-mapping-tools',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/post-mapping-tools/post-mapping-tools.html"*/'<!--\n  Generated template for the PostMappingToolsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>postMappingTools</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/post-mapping-tools/post-mapping-tools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PostMappingToolsPage);
    return PostMappingToolsPage;
}());

//# sourceMappingURL=post-mapping-tools.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajouter-parcelle/ajouter-parcelle.module": [
		782,
		3
	],
	"../pages/liste-parcelle/liste-parcelle.module": [
		779,
		2
	],
	"../pages/map-location/map-location.module": [
		781,
		1
	],
	"../pages/post-mapping-tools/post-mapping-tools.module": [
		780,
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
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liste_parcelle_liste_parcelle__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_location_map_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_mapping_tools_post_mapping_tools__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__liste_parcelle_liste_parcelle__["a" /* ListeParcellePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__map_location_map_location__["a" /* MapLocationPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__post_mapping_tools_post_mapping_tools__["a" /* PostMappingToolsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <!--<ion-tab [root]="tab3Root" tabTitle="Test" tabIcon="map"></ion-tab>-->\n\n  <ion-tab [root]="tab1Root" tabTitle="Parcelles" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="map"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stockage_stockage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_camera_camera__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path_ngx__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_map_location_map_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ajouter_parcelle_ajouter_parcelle__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_liste_parcelle_liste_parcelle__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_base64_to_gallery__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_photo_viewer__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_post_mapping_tools_post_mapping_tools__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















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
                __WEBPACK_IMPORTED_MODULE_20__pages_post_mapping_tools_post_mapping_tools__["a" /* PostMappingToolsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/liste-parcelle/liste-parcelle.module#ListeParcellePageModule', name: 'ListeParcellePage', segment: 'liste-parcelle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-mapping-tools/post-mapping-tools.module#PostMappingToolsPageModule', name: 'PostMappingToolsPage', segment: 'post-mapping-tools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-location/map-location.module#MapLocationPageModule', name: 'MapLocationPage', segment: 'map-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajouter-parcelle/ajouter-parcelle.module#AjouterParcellePageModule', name: 'AjouterParcellePage', segment: 'ajouter-parcelle', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_20__pages_post_mapping_tools_post_mapping_tools__["a" /* PostMappingToolsPage */]
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

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_liste_parcelle_liste_parcelle__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_stockage_stockage__ = __webpack_require__(81);
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











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, storage, httpClient, toastCtrl, stockageProvider, splashScreen) {
        var _this = this;
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
            try {
                __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].deploy.configure({ channel: 'Production', updateMethod: "auto" }).then(function (onsucces) {
                    _this.getVersionInfo();
                    _this.checkChannel();
                    _this.performManualUpdate();
                });
            }
            catch (err) {
                console.log(err);
            }
            var _loop_1 = function (key) {
                console.log(key);
                //if(key == "photoparcelle"){
                _this.storage.get(key).then(function (val) {
                    var _loop_2 = function (itemid) {
                        if (val[itemid]["sent"].toString()) {
                            console.log(val[itemid]["sent"]);
                            _this.httpClient.post(val[itemid]["requete"], val[itemid]["photo"]).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["timeout"])(100000))
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
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page == "enquetePoi") {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_liste_parcelle_liste_parcelle__["a" /* ListeParcellePage */]);
        }
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
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_stockage_stockage__["a" /* StockageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
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

},[389]);
//# sourceMappingURL=main.js.map