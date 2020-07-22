import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Actu} from "../../models/Actu";

@Injectable()
export class SetDataProvider {

  auth_data : string;

  /*// HOME DATA
  home_img_url : string;        // URL de l'image d'acceuil
  home_phrase : string;         // phrase de la page d'acceuil
  data_home = new Subject<HomeData>();           // regroupe les 2 d'au dessus dans un objet*/

  url_img_presentation : string;  // String(URL) de l'image du composant présentation
  //all_service : ServiceAgence[];  // Tableau de string(objet Service_agence)
  all_gallerie_img: string[];     // Tableau de string(URL) d'image
  all_actu: Actu[];               // Tableau de string(URL) d'image
  isContactOn: boolean;           // booleand sur espace de contact on ou pas
  relation_part: string[];        // tableau de nom de particulier
  relation_coll: string[];        // tableau de nom de collectivitées

  constructor(public http: HttpClient) {

    /*console.log('SetDataProvider Provider has retrieved these set of data');

    console.log("home_img_url= "+this.home_img_url);
    console.log("home_phrase= "+this.home_phrase);*/

    this.set_all_data();
    /*console.log("url_img_presentation= "+this.url_img_presentation);
    console.log("all_service= "+JSON.stringify(this.all_service));
    console.log("all_gallerie_img= "+JSON.stringify(this.all_gallerie_img));
    console.log("isContactOn= "+this.isContactOn);
    console.log("relation_part= "+JSON.stringify(this.relation_part));
    console.log("relation_coll= "+JSON.stringify(this.relation_coll));*/
  }

  set_all_data() {
    this.set_all_home_data();
    // ...
  }

  set_all_home_data() {
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
  }





}
