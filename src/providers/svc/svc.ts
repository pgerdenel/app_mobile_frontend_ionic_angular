import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {SvcData} from "../../models/SvcData";
import {GetDataProvider} from "../get_data/get_data";
import {map} from "rxjs/operators";

@Injectable()
export class SvcProvider {

  svcData = new Subject<SvcData>();

  constructor(public http: HttpClient, private getDataProvider:GetDataProvider) {
    this.getDataSvc();
  }

  getDataSvc() {
    return Observable.combineLatest(
      this.getDataProvider.getServiceLabelAndDataUrl()
      .pipe(map(svcDatas => {
        return svcDatas
      })));
  }

}
