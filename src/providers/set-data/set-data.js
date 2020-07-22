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
var SetDataProvider = /** @class */ (function () {
    function SetDataProvider(http) {
        /*console.log('SetDataProvider Provider has retrieved these set of data');
    
        console.log("home_img_url= "+this.home_img_url);
        console.log("home_phrase= "+this.home_phrase);*/
        this.http = http;
        this.set_all_data();
        /*console.log("url_img_presentation= "+this.url_img_presentation);
        console.log("all_service= "+JSON.stringify(this.all_service));
        console.log("all_gallerie_img= "+JSON.stringify(this.all_gallerie_img));
        console.log("isContactOn= "+this.isContactOn);
        console.log("relation_part= "+JSON.stringify(this.relation_part));
        console.log("relation_coll= "+JSON.stringify(this.relation_coll));*/
    }
    SetDataProvider.prototype.set_all_data = function () {
        this.set_all_home_data();
        // ...
    };
    SetDataProvider.prototype.set_all_home_data = function () {
        /*this.getDataProvider.getHomeImgURL().subscribe(
          url => {
            console.log("HomeProvider url subscribe= "+url[0]['list_img'][0]);
            this.data_home.setUrl_img(url[0]['list_img'][0]);
          });
        this.getDataProvider.getHomePhrase().subscribe(
          phrase => {
            console.log(("HomeProvider phrase subscribe= "+phrase[0]['label_data'][0]));
            this.data_home.setPhrases(phrase[0]['label_data'][0]);
          });*/
    };
    SetDataProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], SetDataProvider);
    return SetDataProvider;
}());
export { SetDataProvider };
//# sourceMappingURL=set-data.js.map