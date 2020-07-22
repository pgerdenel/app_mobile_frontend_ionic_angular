var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { GetDataProvider } from "../get_data/get_data";
import { map } from "rxjs/operators";
var GalleryProvider = /** @class */ (function () {
    /*private all_image: string[];*/
    function GalleryProvider(http, getDataProvider) {
        this.http = http;
        this.getDataProvider = getDataProvider;
        this.imageArray = new Subject();
        this.getImageGallery();
    }
    GalleryProvider.prototype.getImageGallery = function () {
        return this.getDataProvider.getGallerie()
            .pipe(map(function (imageDatas) {
            //console.log("getImageGallery image = "+JSON.stringify(imageDatas));
            return imageDatas[0]['list_img'];
        }));
    };
    GalleryProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, GetDataProvider])
    ], GalleryProvider);
    return GalleryProvider;
}());
export { GalleryProvider };
//# sourceMappingURL=gallery.js.map