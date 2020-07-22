import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {GetDataProvider} from "../get_data/get_data";
import {map} from "rxjs/operators";

@Injectable()
export class GalleryProvider {

  imageArray = new Subject<string[]>();
  /*private all_image: string[];*/

  constructor(public http: HttpClient, private getDataProvider:GetDataProvider) {
   this.getImageGallery();
  }

  getImageGallery() {
    return this.getDataProvider.getGallerie()
    .pipe(map(imageDatas => {
      //console.log("getImageGallery image = "+JSON.stringify(imageDatas));
      return imageDatas[0]['list_img'];
    }))
      ;
  }

}
