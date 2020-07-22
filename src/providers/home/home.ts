import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HomeData} from "../../models/HomeData";
import {Observable, Subject} from "rxjs";
import {GetDataProvider} from "../get_data/get_data";
import {map} from "rxjs/operators";

@Injectable()
export class HomeProvider {

  homeData = new Subject<HomeData>();

  home_img_url : string;        // URL de l'image d'acceuil
  home_phrase : string;         // phrase de la page d'acceuil
  /*private data_home:HomeData;*/

  // HOME DATA

  constructor(public http: HttpClient, private getDataProvider:GetDataProvider) {
    this.getDataHome();
  }

  getDataHome() {
    return Observable.combineLatest(
      this.getDataProvider.getHomeImgURL(),
      this.getDataProvider.getHomePhrase()
    ).pipe(
      map(homeDatas => homeDatas.map(homeData => {
        return {
          url:homeData[0]['list_img'],
          phrase:homeData[0]['label_data']
        }
      })))/*.subscribe(result => {
      /!*let h = new HomeData(result[1]['phrase'], result[0]['url']);
      console.log("h= "+JSON.stringify(h));
      return h;*!/
      return new HomeData(result[1]['phrase'], result[0]['url']);
    })*/;
  }



}
