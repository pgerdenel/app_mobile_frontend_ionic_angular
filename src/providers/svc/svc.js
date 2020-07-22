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
var SvcProvider = /** @class */ (function () {
    function SvcProvider(http, getDataProvider) {
        this.http = http;
        this.getDataProvider = getDataProvider;
        this.svcData = new Subject();
        this.getDataSvc();
    }
    SvcProvider.prototype.getDataSvc = function () {
        return Observable.combineLatest(this.getDataProvider.getServiceLabelAndDataUrl()
            .pipe(map(function (svcDatas) {
            return svcDatas;
        })));
    };
    SvcProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, GetDataProvider])
    ], SvcProvider);
    return SvcProvider;
}());
export { SvcProvider };
//# sourceMappingURL=svc.js.map