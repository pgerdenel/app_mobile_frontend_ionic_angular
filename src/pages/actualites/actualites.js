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
import { GetDataProvider } from "../../providers/get_data/get_data";
var ActualitesPage = /** @class */ (function () {
    function ActualitesPage(navCtrl, navParams, getDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getDataProvider = getDataProvider;
        this.tab_actu = [];
    }
    ActualitesPage.prototype.ngOnInit = function () {
        this.get_actu();
    };
    ActualitesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActualitesPage');
    };
    ActualitesPage.prototype.get_actu = function () {
        var _this = this;
        this.getDataProvider.getActu()
            .subscribe(function (res) {
            console.log("res= " + JSON.stringify(res));
            _this.tab_actu = res;
        }, function (err) { return console.debug('https error', err); }, function () { return console.debug("http request complete"); });
    };
    ActualitesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-actualites',
            templateUrl: 'actualites.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            GetDataProvider])
    ], ActualitesPage);
    return ActualitesPage;
}());
export { ActualitesPage };
//# sourceMappingURL=actualites.js.map