import {LabelData} from "./LabelData";
import {url_base_https_aws} from "../constant/constant";

export class PrezData {

  private _labels_and_data:string[];
  private _urls_img : string[];

  public urlimg : string;
  private _all_labelsDataObj:Array<LabelData> = new Array<LabelData>();

  constructor(array_labels_and_data: string[], array_urls_img:string[]) {
    this._labels_and_data = array_labels_and_data;
    this._urls_img = array_urls_img;
  }

  getLabels_and_data(): string[] {
    return this._labels_and_data;
  }
  setLabels_and_data(value: string[]) {

    for(let i=0;i<value.length;i++) {
      //console.log("value[i]= "+JSON.stringify(value[i]['label_name']));
      //console.log("value[i]= "+JSON.stringify(value[i]['label_data']));
      console.log("value[place_hierarchie]= "+JSON.stringify(value[i]['place_hierarchie']));
      /*if(i == value[i]['place_hierarchie']) {
        this._all_labelsDataObj.push(new LabelData(value[i]['label_name'], value[i]['label_data']));
      }
      else {
        value.push(value[i]);
      }*/
      this._all_labelsDataObj.push(new LabelData(value[i]['label_name'], value[i]['label_data']));
    }
    this._labels_and_data = value;
  }
  getUrls_img(): string[] {
    return this._urls_img;
  }
  setUrls_img(value: string[]) {
    this._urls_img = value;
    console.log("image setté= "+value[0]);
    this.setUrl_img(url_base_https_aws+"/"+value[0]);
    console.log("image setté get = "+this.getUrl_img());
  }

  getAll_labelsDataObj(): LabelData[] {
    return this._all_labelsDataObj;
  }
  setAll_labelsDataObj(value: LabelData[]) {
    this._all_labelsDataObj = value;
  }

  getUrl_img(): string {
    return this.urlimg;
  }
  setUrl_img(value: string) {
    this.urlimg = value;
  }
}



