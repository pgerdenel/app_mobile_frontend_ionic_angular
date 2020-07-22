import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import {GetDataProvider} from "../get_data/get_data";

@Injectable()
export class PartenaireProvider {

  particulierData = new Subject<string[]>();
  collectiviteData = new Subject<string[]>();

  constructor(public http: HttpClient, private getDataProvider:GetDataProvider) {
    this.get_part();
    this.get_col();
  }

 get_part() {
   return this.getDataProvider.get_part_part()
     .pipe(map(particulierData => {
       //console.log("get_part = "+JSON.stringify(particulierData));
     return particulierData;
   }));
 }
 get_col() {
   return this.getDataProvider.get_part_coll()
     .pipe(map(collectiviteData => {
       //console.log("get_col = "+JSON.stringify(collectiviteData));
       return collectiviteData;
     }));
 }

}
