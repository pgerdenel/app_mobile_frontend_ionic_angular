import {url_base_https_aws} from "../constant/constant";

export class HomeData {

  private _phrases:string;
  private _phrase_1:string;
  private _phrase_2:string;
  private _urls_img:string;
  private _url_img:string;

  constructor(phrases: string, urls_img:string) {
    //console.log("HomeData constructor called with phrases= "+phrases+" and url_img= "+url_img);
    this._phrases = phrases;
    this._url_img = urls_img;
    this._phrase_1 = "";
    this._phrase_2 = "";
  }

  toJson() {
    return JSON.stringify(this);
  }

  fromJson(data:JSON) : HomeData {
    return new HomeData(data['phrases'], data['url_img']);
  }

  getPhrases(): string {
    return this._phrases;
  }
  setPhrases(value: string) {
    //console.log("phrase setté= "+value);
    this._phrases = value;
    let words = this._phrases.split(" ");
    for (let i=0;i<words.length;i++) {
      if(i == 0 || i == 1) {
        this._phrase_1 += ((this._phrase_1.length ==0)?words[i]:" "+words[i]);
      }
      else {
        this._phrase_2 += (this._phrase_2.length ==0)?words[i]:" "+words[i];
      }
    }
    console.log("phrase1= "+this._phrase_1);
    console.log("phrase2= "+this._phrase_2);
  }
  getUrls_img(): string {
    return this._urls_img;
  }
  setUrls_img(value: string) {
    this._urls_img = value;
    //console.log("url_img = "+value[0]);
    this._url_img = url_base_https_aws+"/"+value[0];
  }

  getPhrase_1(): string {
    return this._phrase_1;
  }
  setPhrase_1(value: string) {
    this._phrase_1 = value;
  }
  getPhrase_2(): string {
    return this._phrase_2;
  }
  setPhrase_2(value: string) {
    this._phrase_2 = value;
  }
  getUrl_img(): string {
    return this._url_img;
  }
  setUrl_img(value: string) {
    this._url_img = value;
  }


}
