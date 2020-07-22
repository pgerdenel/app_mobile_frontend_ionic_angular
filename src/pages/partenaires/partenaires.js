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
import { PartenaireProvider } from "../../providers/partenaire/partenaire";
import { PartenaireData } from "../../models/PartenaireData";
var PartenairesPage = /** @class */ (function () {
    function PartenairesPage(navCtrl, navParams, partenaireProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.partenaireProvider = partenaireProvider;
        this.data_part = new PartenaireData([], []);
        // old
        this.part_tab = [];
        this.col_tab = [];
    }
    PartenairesPage.prototype.ngOnInit = function () {
        var _this = this;
        // particulier
        this.data_parti_Subscription = this.partenaireProvider.get_part().subscribe(function (result) {
            _this.part_tab = result;
            _this.data_part.setAll_part(result);
        }, function (error) { return console.error("erreur in subscribe part= " + error); });
        // collectivité
        this.data_collect_Subscription = this.partenaireProvider.get_col().subscribe(function (result) {
            _this.col_tab = result;
            _this.data_part.setAll_col(result);
        }, function (error) { return console.error("erreur in subscribe col = " + error); });
    };
    PartenairesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartenairesPage');
    };
    PartenairesPage.prototype.ngOnDestroy = function () {
        this.data_parti_Subscription.unsubscribe();
        this.data_collect_Subscription.unsubscribe();
    };
    PartenairesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-partenaires',
            templateUrl: 'partenaires.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PartenaireProvider])
    ], PartenairesPage);
    return PartenairesPage;
}());
export { PartenairesPage };
//# sourceMappingURL=partenaires.js.map