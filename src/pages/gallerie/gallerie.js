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
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { GalleryProvider } from "../../providers/gallery/gallery";
import { url_base_https_aws } from "../../constant/constant";
/**
 * Gallery d'images pour les plus gros projets
 */
var GalleriePage = /** @class */ (function () {
    function GalleriePage(navCtrl, navParams, popoverController, galleryProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.galleryProvider = galleryProvider;
        this.host_url_referer = url_base_https_aws + "/";
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    GalleriePage.prototype.ngOnInit = function () {
        var _this = this;
        this.array_image_Subscription = this.galleryProvider.getImageGallery()
            .subscribe(function (result) {
            //console.log("result img array = "+JSON.stringify(result));
            _this.array_image = result;
        }, function (error) { return console.error("erreur in subscribe= " + error); });
    };
    GalleriePage.prototype.ngOnDestroy = function () {
        this.array_image_Subscription.unsubscribe();
    };
    GalleriePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleriePage');
    };
    GalleriePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-gallerie',
            templateUrl: 'gallerie.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PopoverController, GalleryProvider])
    ], GalleriePage);
    return GalleriePage;
}());
export { GalleriePage };
//# sourceMappingURL=gallerie.js.map