var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresentationServicePage } from "../presentation-service/presentation-service";
import { GalleriePage } from "../gallerie/gallerie";
import { ActualitesPage } from "../actualites/actualites";
import { PrezProvider } from "../../providers/prez/prez";
import { PrezData } from "../../models/PrezData";
/**
 *Page de présentation du cabinet d'architecture
 */
var PresentationCabinetPage = /** @class */ (function () {
    function PresentationCabinetPage(navCtrl, navParams, prezProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prezProvider = prezProvider;
        // var
        this.dataprez = new PrezData([], []);
        // Page navparams
        this.prez_svg_page = PresentationServicePage;
        this.gallery_page = GalleriePage;
        this.actualite_page = ActualitesPage;
        this.test = "http://192.168.3.101:3000/media/imgs/prez/1.jpg";
    }
    PresentationCabinetPage.prototype.ngOnInit = function () {
        var _this = this;
        this.data_prez_Subscription = this.prezProvider.getDataPrez()
            .subscribe(function (result) {
            //console.log("result img array.urls = "+JSON.stringify(result.urls));
            //console.log("result label_data array.labelsAndPrez = "+JSON.stringify(result.labelsAndPrez));
            _this.dataprez.setUrls_img(result.urls);
            _this.dataprez.setLabels_and_data(result.labelsAndPrez);
        }, function (error) { return console.error("erreur in subscribe= " + error); });
    };
    PresentationCabinetPage.prototype.ngOnDestroy = function () {
        this.data_prez_Subscription.unsubscribe();
    };
    PresentationCabinetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PresentationCabinetPage');
    };
    PresentationCabinetPage.prototype.pushPresentationService = function () {
        this.navCtrl.push(this.prez_svg_page);
    };
    PresentationCabinetPage.prototype.pushGallerie = function () {
        this.navCtrl.push(this.gallery_page);
    };
    PresentationCabinetPage.prototype.pushActualites = function () {
        this.navCtrl.push(this.actualite_page);
    };
    PresentationCabinetPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-presentation-cabinet',
            templateUrl: 'presentation-cabinet.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PrezProvider])
    ], PresentationCabinetPage);
    return PresentationCabinetPage;
}());
export { PresentationCabinetPage };
//# sourceMappingURL=presentation-cabinet.js.map