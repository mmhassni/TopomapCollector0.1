webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeParcellePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajouter_parcelle_ajouter_parcelle__ = __webpack_require__(104);
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
    function ListeParcellePage(navCtrl, navParams, httpClient, toastCtrl, cameraProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.cameraProvider = cameraProvider;
        this.objetActuel = {};
        this.listeObjetActuelle = [];
        this.refresh();
    }
    ListeParcellePage.prototype.refresh = function () {
        var _this = this;
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select * from parcelles order by id desc")
            .subscribe(function (data) {
            _this.listeObjetActuelle = data.features;
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
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
    ListeParcellePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-liste-parcelle',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/liste-parcelle/liste-parcelle.html"*/'\n\n<!--\n  Generated template for the ListeFournisseurPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gestion Fournisseurs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item padding="0">\n    <h1 >Liste Parcelle:</h1>\n    <ion-icon name="add-circle" (click)="ajouterItem()" item-end></ion-icon>\n  </ion-item>\n\n\n  <ion-list>\n    <button ion-item *ngFor="let item of listeObjetActuelle"   (click)="itemTapped($event, item)">\n      Parcelle P{{item?.id}}\n      <p>Plusvalues : {{item?.plusvalues}}</p>\n      <p>Constructions : {{item?.constructions}}</p>\n      <p>Adresse : {{item?.adresse}}</p>\n      <p>Consistance : {{item?.consistance}}</p>\n      <p>Col Naïb : {{item?.coldenaib}}</p>\n      <button ion-button clear item-end  (click)="detailItemTapped($event, item)">Détail</button>\n    </button>\n  </ion-list>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/liste-parcelle/liste-parcelle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */]])
    ], ListeParcellePage);
    return ListeParcellePage;
}());

//# sourceMappingURL=liste-parcelle.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjouterParcellePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(80);
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
    function AjouterParcellePage(navCtrl, navParams, httpClient, toastCtrl, cameraProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.cameraProvider = cameraProvider;
        this.objetActuel = {};
        this.listeChoixPlusvalues = [];
        this.listeChoixConstructions = [];
        this.listeChoixConsistance = [];
        this.objetActuel = this.navParams.data.informationsActuelles;
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select photo from photoparcelles " +
            "where idparcelle = " + this.navParams.data.informationsActuelles.id + " " +
            "and typephoto = 'photocinrecto' " +
            "order by id desc " +
            "limit 1")
            .subscribe(function (data) {
            try {
                _this.objetActuel.photocinrecto = data.features[0].photo;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select photo from photoparcelles " +
            "where idparcelle = " + this.navParams.data.informationsActuelles.id + " " +
            "and typephoto = 'photocinverso' " +
            "order by id desc " +
            "limit 1")
            .subscribe(function (data) {
            try {
                _this.objetActuel.photocinverso = data.features[0].photo;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select photo from photoparcelles " +
            "where idparcelle = " + this.navParams.data.informationsActuelles.id + " " +
            "and typephoto = 'photoparcelle' " +
            "order by id desc " +
            "limit 1")
            .subscribe(function (data) {
            try {
                _this.objetActuel.photoparcelle = data.features[0].photo;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
            "select photo from photoparcelles " +
            "where idparcelle = " + this.navParams.data.informationsActuelles.id + " " +
            "and typephoto = 'photocroquis' " +
            "order by id desc " +
            "limit 1")
            .subscribe(function (data) {
            try {
                _this.objetActuel.photocroquis = data.features[0].photo;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
    }
    AjouterParcellePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListeParcellePage');
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
        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
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
    AjouterParcellePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajouter-parcelle',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/ajouter-parcelle/ajouter-parcelle.html"*/'<!--\n  Generated template for the AjouterProjetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Suivi Gasoil</ion-title>\n\n    <ion-buttons end *ngIf="!modeEditionAffichage">\n      <button ion-button color="secondary" (click)="modeEdition()">\n        Modifier\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n    <h1 >Informations :</h1>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Consistance:</ion-label>\n    <ion-select (ionChange) = "onConsistanceSelectChange($event)"   multiple="false" name = "Type vehicule" [(ngModel)]="objetActuel.consistanceionselect"  >\n      <ion-option *ngFor="let item of listeChoixConsistance" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.consistanceionselect || objetActuel.consistance">\n    <ion-input  (ngModelChange)="onConsistanceInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.consistance"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Plus Values:</ion-label>\n    <ion-select (ionChange) = "onPlusvaluesSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.plusvaluesionselect"  >\n      <ion-option *ngFor="let item of listeChoixPlusvalues" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.plusvaluesionselect || objetActuel.plusvalues">\n    <ion-input (ngModelChange)="onPlusvaluesInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.plusvalues"  ></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label style="opacity:1; color: #000;font-weight: bold">Constructions: </ion-label>\n    <ion-select (ionChange) = "onConstructionsSelectChange($event)"   multiple="true" name = "Type vehicule" [(ngModel)]="objetActuel.constructionsionselect"  >\n      <ion-option *ngFor="let item of listeChoixConstructions" [value]="item[0]">{{item[0]}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="objetActuel.constructionsionselect || objetActuel.constructions">\n    <ion-input (ngModelChange)="onConstructionsInuptChange($event)"  text-center type="text" name="adressefournisseur" [(ngModel)]="objetActuel.constructions"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      Adresse :\n    </ion-label>\n    <ion-input text-center type="text" [(ngModel)]="objetActuel.adresse"  ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="color: #000;font-weight: bold">\n      Coll selon Naïb :\n    </ion-label>\n    <ion-input text-center type="text" [(ngModel)]="objetActuel.coldenaib"  ></ion-input>\n  </ion-item>\n\n\n\n\n\n  <button type="submit" color="tertiary" ion-button (click)="enregistrerInformationsAttributaires()" block >\n    Enregistrer modifications\n  </button>\n\n\n\n\n\n\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n    <h1 >Photo CIN Recto :</h1>\n  </ion-item>\n\n  <img style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocinrecto" *ngIf="objetActuel.photocinrecto"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocinrecto\',600,1000,40)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n\n\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n    <h1 >Photo CIN Verso :</h1>\n  </ion-item>\n\n  <img style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocinverso" *ngIf="objetActuel.photocinverso"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocinverso\',600,1000,40)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n    <h1 >Photo Parcelle :</h1>\n  </ion-item>\n\n  <img style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photoparcelle" *ngIf="objetActuel.photoparcelle"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photoparcelle\',600,1000,40)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n\n  <ion-item padding="0" style="border-bottom: 0px;">\n    <h1 >Photo Croquis :</h1>\n  </ion-item>\n\n  <img style="width: auto;margin: auto;display: block"  [(src)]="objetActuel.photocroquis" *ngIf="objetActuel.photocroquis"/>\n\n  <br>\n\n  <div text-center>\n    <button ion-button round  (click)="photoChooser(objetActuel,\'photocroquis\',600,1000,40)">\n      Charger Photo  <ion-icon padding name="camera"></ion-icon>\n    </button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/ajouter-parcelle/ajouter-parcelle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */]])
    ], AjouterParcellePage);
    return AjouterParcellePage;
}());

//# sourceMappingURL=ajouter-parcelle.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_esri_loader__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_esri_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(42);
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
            var _this = this;
            var _a, WMSLayer, Color, geometryJsonUtils, Map, MapView, Locate, Graphic, SimpleFillSymbol, SimpleLineSymbol, map, mapView, wmsLayer, symbol, locateBtn;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    // Reference: https://ionicframework.com/docs/api/platform/Platform/#ready
                    return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        // Reference: https://ionicframework.com/docs/api/platform/Platform/#ready
                        _b.sent();
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_2_esri_loader__["loadModules"])([
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
                                .catch(function (err) {
                                console.error("ArcGIS: ", err);
                            })];
                    case 2:
                        _a = _b.sent(), WMSLayer = _a[0], Color = _a[1], geometryJsonUtils = _a[2], Map = _a[3], MapView = _a[4], Locate = _a[5], Graphic = _a[6], SimpleFillSymbol = _a[7], SimpleLineSymbol = _a[8];
                        console.log("Starting up ArcGIS map");
                        map = new Map({
                            basemap: 'hybrid'
                        });
                        mapView = new MapView({
                            // create the map view at the DOM element in this component
                            container: this.mapEl.nativeElement,
                            //center: [this.currentLong, this.currentLat],
                            //center: [-6.866699159143479, 33.96367577334164],
                            center: [-5.14814459079014, 33.8096224158927],
                            zoom: 15
                        });
                        wmsLayer = new WMSLayer('https://mapping-cloud.com/geoserver/DAR/wms', {
                            visibleLayers: ['RA_Ayants droits']
                        });
                        map.layers.add(wmsLayer);
                        mapView.map = map;
                        //ajout de la couche des titres DA
                        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "select%20%20id,collectivi,ordre," + '"vocation p"' + ",superficie,%20St_astext(shape)%20as%20shape%20" +
                            "from%20occupirr").subscribe(function (data) {
                            var coucheActuel = data.features;
                            var symobologiePolygon = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255]), 0.5), new Color([155, 255, 100, 0.10]));
                            for (var i = 0; i < coucheActuel.length; i++) {
                                var jsontext = _this.polygonJsonToTerraformer(coucheActuel[i].shape);
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
                        this.httpClient.get("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                            "select%20%20id,%20St_astext(shape)%20as%20shape%20" +
                            "from%20titredademo").subscribe(function (data) {
                            var coucheActuel = data.features;
                            var symobologiePolygon = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 0]), 1), new Color([155, 255, 100, 0]));
                            for (var i = 0; i < coucheActuel.length; i++) {
                                var jsontext = _this.polygonJsonToTerraformer(coucheActuel[i].shape);
                                var pointGraphic = new Graphic({
                                    geometry: geometryJsonUtils.fromJSON({ "rings": jsontext }),
                                    symbol: symobologiePolygon
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
                        symbol = {
                            type: "simple-marker",
                            color: [255, 0, 255],
                            outline: {
                                color: [255, 255, 255],
                                width: 1
                            }
                        };
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
        MapLocationPage_1.popedGraphicActuel = MapLocationPage_1.graphicActuel;
        this.events.publish('graphicActuel', MapLocationPage_1.popedGraphicActuel);
        this.navCtrl.pop();
    };
    MapLocationPage.prototype.polygonJsonToTerraformer = function (geoJsonPolygon) {
        var polygonAdapte = geoJsonPolygon.substring(15, geoJsonPolygon.length - 3);
        var polygonAdapteTableOutput = [];
        if (polygonAdapte.indexOf("),(") < 0) {
            for (var k = 0; k < polygonAdapte.split(")),((").length; k++) {
                var polygonAdapteTable = polygonAdapte.split(")),((")[k].split(",");
                for (var i = 0; i < polygonAdapteTable.length; i++) {
                    polygonAdapteTable[i] = polygonAdapteTable[i].split(" ");
                    for (var j = 0; j < polygonAdapteTable[i].length; j++) {
                        polygonAdapteTable[i][j] = Number(polygonAdapteTable[i][j]);
                    }
                }
                polygonAdapteTableOutput.push(polygonAdapteTable);
            }
        }
        console.log(polygonAdapteTableOutput);
        return polygonAdapteTableOutput;
    };
    MapLocationPage.graphicActuel = null;
    MapLocationPage.popedGraphicActuel = null;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapLocationPage.prototype, "mapEl", void 0);
    MapLocationPage = MapLocationPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-location',template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/map-location/map-location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Visualisation\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button color="secondary" (click)="getGeo()">\n        Rafraichir\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content height="100%" width="100%">\n  <!--\n   Add our map div here\n   -->\n  <div id="map" #map  >\n    <!--button ion-fab large class="my_button" (click)="popPosition()"><ion-icon name="add"></ion-icon></button-->\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/pages/map-location/map-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapLocationPage);
    return MapLocationPage;
    var MapLocationPage_1;
}());

//# sourceMappingURL=map-location.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajouter-parcelle/ajouter-parcelle.module": [
		289,
		2
	],
	"../pages/liste-parcelle/liste-parcelle.module": [
		288,
		1
	],
	"../pages/map-location/map-location.module": [
		290,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liste_parcelle_liste_parcelle__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_location_map_location__ = __webpack_require__(105);
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stockage_stockage__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_camera_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path_ngx__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_map_location_map_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ajouter_parcelle_ajouter_parcelle__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_liste_parcelle_liste_parcelle__ = __webpack_require__(103);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_map_location_map_location__["a" /* MapLocationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/liste-parcelle/liste-parcelle.module#ListeParcellePageModule', name: 'ListeParcellePage', segment: 'liste-parcelle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajouter-parcelle/ajouter-parcelle.module#AjouterParcellePageModule', name: 'AjouterParcellePage', segment: 'ajouter-parcelle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-location/map-location.module#MapLocationPageModule', name: 'MapLocationPage', segment: 'map-location', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_liste_parcelle_liste_parcelle__["a" /* ListeParcellePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ajouter_parcelle_ajouter_parcelle__["a" /* AjouterParcellePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_location_map_location__["a" /* MapLocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__providers_stockage_stockage__["a" /* StockageProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path_ngx__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_pro__);
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
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.progressBar = 0;
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/Downloads/Topomap/TopomapCollector0.1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(285);
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
    function StockageProvider(storage) {
        this.storage = storage;
    }
    // set a key/value
    StockageProvider.prototype.setValue = function (key, value) {
        var _this = this;
        this.storage.set(key, value).then(function (response) {
            console.log('set' + key + ' ', response);
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
            console.log('get ' + key + ' ', val);
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
            console.log("value " + value);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */]])
    ], StockageProvider);
    return StockageProvider;
}());

//# sourceMappingURL=stockage.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path_ngx__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(42);
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
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CameraProvider = /** @class */ (function () {
    function CameraProvider(actionSheetCtrl, httpClient, toastCtrl, camera, platform, filePath) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.platform = platform;
        this.filePath = filePath;
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
        var _this = this;
        /*
        const CameraOptions  = {
          quality: 100,
          destinationType: this.platform.is('ios') ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        };
        */
        var CameraOptions = {
            quality: quality,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: width,
            targetHeight: height
        };
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
            _this.httpClient.post("http://ec2-52-47-166-154.eu-west-3.compute.amazonaws.com:9091/requestAny/" +
                "insert into photoparcelles (photo,idparcelle,typephoto) " +
                "values (" +
                "" + "'postBody'" + "," +
                "" + _this.adaptValueQuery(objet.id, "number") + "," +
                "" + _this.adaptValueQuery(photoAttributName, "text") + "" +
                ")", 'data:image/jpeg;base64,' + imageData)
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
        }, function (err) {
            console.log(err.toString());
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
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path_ngx__["a" /* FilePath */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map