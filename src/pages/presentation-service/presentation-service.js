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
import { PartenairesPage } from "../partenaires/partenaires";
import { SvcProvider } from "../../providers/svc/svc";
import { SvcData } from "../../models/SvcData";
/**
 * Page de présentation des services du cabinet d'architecture
 */
var PresentationServicePage = /** @class */ (function () {
    function PresentationServicePage(navCtrl, navParams, svcProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.svcProvider = svcProvider;
        // var
        this.data_svc = new SvcData([]);
    }
    PresentationServicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.data_svc_Subscription = this.svcProvider.getDataSvc()
            .subscribe(function (result) {
            /*console.log("result = "+JSON.stringify(result));
            console.log("keys= "+Object.keys(result));
            console.log("result = "+JSON.stringify(result[0]));*/
            _this.data_svc.setLabels_and_data(result[0]);
        }, function (error) { return console.error("erreur in subscribe= " + error); });
    };
    PresentationServicePage.prototype.ngOnDestroy = function () {
    };
    PresentationServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PresentationServicePage');
    };
    PresentationServicePage.prototype.pushPartenaire = function () {
        this.navCtrl.push(PartenairesPage);
    };
    PresentationServicePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-presentation-service',
            templateUrl: 'presentation-service.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, SvcProvider])
    ], PresentationServicePage);
    return PresentationServicePage;
}());
export { PresentationServicePage };
//# sourceMappingURL=presentation-service.js.map