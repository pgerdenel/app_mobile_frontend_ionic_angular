import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {PrezData} from "../../models/PrezData";
import {GetDataProvider} from "../get_data/get_data";
import {map} from "rxjs/operators";

@Injectable()
export class PrezProvider {

  prezData = new Subject<PrezData>();
  /*private all_data_prez: PrezData;*/

  constructor(public http: HttpClient, private getDataProvider:GetDataProvider) {
    this.getDataPrez();
  }

  getDataPrez() {
    return Observable.combineLatest(
      this.getDataProvider.getPresentationImgUrl(),
      this.getDataProvider.getPresentationLabelAndDataUrl()
    ).pipe(map(prezDatas => {
          //console.log("getDataPrez PREZ data = "+JSON.stringify(prezData));
          //console.log("prezData[0]= "+JSON.stringify(prezDatas[0]));
          //console.log("prezData[1]= "+JSON.stringify(prezDatas[1]));
          return {
            urls:prezDatas[0][0]['list_img'],
            labelsAndPrez:prezDatas[1]
          }
        }))
      ;
  }

}
