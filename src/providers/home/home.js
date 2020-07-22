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
import { Observable, Subject } from "rxjs";
import { GetDataProvider } from "../get_data/get_data";
import { map } from "rxjs/operators";
var HomeProvider = /** @class */ (function () {
    /*private data_home:HomeData;*/
    // HOME DATA
    function HomeProvider(http, getDataProvider) {
        this.http = http;
        this.getDataProvider = getDataProvider;
        this.homeData = new Subject();
        this.getDataHome();
    }
    HomeProvider.prototype.getDataHome = function () {
        return Observable.combineLatest(this.getDataProvider.getHomeImgURL(), this.getDataProvider.getHomePhrase()).pipe(map(function (homeDatas) { return homeDatas.map(function (homeData) {
            return {
                url: homeData[0]['list_img'],
                phrase: homeData[0]['label_data']
            };
        }); })) /*.subscribe(result => {
        /!*let h = new HomeData(result[1]['phrase'], result[0]['url']);
        console.log("h= "+JSON.stringify(h));
        return h;*!/
        return new HomeData(result[1]['phrase'], result[0]['url']);
      })*/;
    };
    HomeProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, GetDataProvider])
    ], HomeProvider);
    return HomeProvider;
}());
export { HomeProvider };
//# sourceMappingURL=home.js.map