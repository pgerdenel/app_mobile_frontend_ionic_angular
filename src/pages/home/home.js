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
import { NavController } from 'ionic-angular';
import { HomeProvider } from "../../providers/home/home";
import { HomeData } from "../../models/HomeData";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, homeProvider) {
        this.navCtrl = navCtrl;
        this.homeProvider = homeProvider;
        this.data_home = new HomeData("", "");
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.data_home_Subscription = this.homeProvider.getDataHome()
            .subscribe(function (result) {
            //this.data_home = new HomeData(result[1]['phrase'], result[0]['url']);
            _this.data_home.setUrls_img(result[0]['url']);
            _this.data_home.setPhrases(result[1]['phrase']);
        }, function (error) { return console.error("erreur in subscribe= " + error); });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.data_home_Subscription.unsubscribe();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    HomePage.prototype.getData = function () {
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, HomeProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map