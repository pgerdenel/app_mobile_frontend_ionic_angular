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
import { NavController } from "ionic-angular";
import { PresentationCabinetPage } from "../../pages/presentation-cabinet/presentation-cabinet";
import { PresentationServicePage } from "../../pages/presentation-service/presentation-service";
import { ActualitesPage } from "../../pages/actualites/actualites";
import { GalleriePage } from "../../pages/gallerie/gallerie";
import { PartenairesPage } from "../../pages/partenaires/partenaires";
import { ContactPage } from "../../pages/contact/contact";
/**
 * Boite de selection des différentes fonctionnalitées
 */
var MainChoiceBoxComponent = /** @class */ (function () {
    function MainChoiceBoxComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MainChoiceBoxComponent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PresentationCabinetPage');
    };
    MainChoiceBoxComponent.prototype.pushPresentationEntreprise = function () {
        this.navCtrl.push(PresentationCabinetPage);
    };
    MainChoiceBoxComponent.prototype.pushPresentationService = function () {
        this.navCtrl.push(PresentationServicePage);
    };
    MainChoiceBoxComponent.prototype.pushActualites = function () {
        this.navCtrl.push(ActualitesPage);
    };
    MainChoiceBoxComponent.prototype.pushGallerie = function () {
        this.navCtrl.push(GalleriePage);
    };
    MainChoiceBoxComponent.prototype.pushPartenaire = function () {
        this.navCtrl.push(PartenairesPage);
    };
    MainChoiceBoxComponent.prototype.pushContact = function () {
        this.navCtrl.push(ContactPage);
    };
    MainChoiceBoxComponent = __decorate([
        Component({
            selector: 'main-choice-box',
            templateUrl: 'main-choice-box.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], MainChoiceBoxComponent);
    return MainChoiceBoxComponent;
}());
export { MainChoiceBoxComponent };
//# sourceMappingURL=main-choice-box.js.map