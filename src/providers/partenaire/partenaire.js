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
import { map } from "rxjs/operators";
import { GetDataProvider } from "../get_data/get_data";
var PartenaireProvider = /** @class */ (function () {
    function PartenaireProvider(http, getDataProvider) {
        this.http = http;
        this.getDataProvider = getDataProvider;
        this.particulierData = new Subject();
        this.collectiviteData = new Subject();
        this.get_part();
        this.get_col();
    }
    PartenaireProvider.prototype.get_part = function () {
        return this.getDataProvider.get_part_part()
            .pipe(map(function (particulierData) {
            //console.log("get_part = "+JSON.stringify(particulierData));
            return particulierData;
        }));
    };
    PartenaireProvider.prototype.get_col = function () {
        return this.getDataProvider.get_part_coll()
            .pipe(map(function (collectiviteData) {
            //console.log("get_col = "+JSON.stringify(collectiviteData));
            return collectiviteData;
        }));
    };
    PartenaireProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, GetDataProvider])
    ], PartenaireProvider);
    return PartenaireProvider;
}());
export { PartenaireProvider };
//# sourceMappingURL=partenaire.js.map