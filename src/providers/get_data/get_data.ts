import {HttpClient/*, HttpHeaders*/} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {
  API_home_img_url,
  API_home_phrase,
  API_all_gallery_image,
  API_image_prez,
  API_all_svc_label_and_data,
  API_all_actu_data,
  API_all_part_part,
  API_all_part_col, API_send_message, API_all_prez_label_and_data
} from "../../constant/constant";
import {Observable} from "rxjs";
import {Actu} from "../../models/Actu";

/*
 * Regroupe l'ensemble des appels aux web services
 * - récupérer l'ensemble des informations en base de données
 * - envoyer l'email du formulaire de contact
 * .map((res:Response) => res.json())
 */

@Injectable()
export class GetDataProvider {

  constructor(public http: HttpClient) {

  }

  /* HOME PAGE */
  // permet de récupérer l'url de l'image d'acceuil
  getHomeImgURL() : Observable<string> {
      //console.log("getHomeImgURL called");
      return this.http.get<string>(API_home_img_url);
  }
  // permet de récupérer la phrase d'acceuil
  getHomePhrase() : Observable<string> {
    //console.log("getHomePhrase called");
    return this.http.get<string>(API_home_phrase);
  }

  /* PREZ PAGE */
  // permet de récupérer l'image du composant "présentation de l'agence"
  getPresentationImgUrl() : Observable<string[]> {
    console.log("getPresentationImgUrl called from = getDataProvider");
    return this.http.get<string[]>(API_image_prez);
  }
  // permet de récupérer tous les labels et données correspondantes de présentation
  getPresentationLabelAndDataUrl() : Observable<string[]> {
    console.log("getPresentationLabelAndDataUrl called from = getDataProvider");
    return this.http.get<string[]>(API_all_prez_label_and_data);
  }

  /* SVC PAGE */
  // permet de récupérer la liste des services(label+description)"
  getServiceLabelAndDataUrl() : Observable<string[]> {
    console.log("getServiceList called from = getDataProvider");
    return this.http.get<string[]>(API_all_svc_label_and_data);
  }

  /* GALLERY PAGE */
  // récupérer les images de la gallerie
  getGallerie() : Observable<string[]> {
    console.log("getGallerie called from = getDataProvider to "+API_all_gallery_image);
    return this.http.get<string[]>(API_all_gallery_image);
  }

  /* ACTU PAGE */
  // récupérer les actualitées + search with date plus récente
  getActu() : Observable<Actu[]> {
    console.log("getActu called from = getDataProvider");
    return this.http.get<Actu[]>(API_all_actu_data).map(res => {
      let tab_actu : Actu[]= [];
      for(let i = 0; i < res.length; i++) {
        console.log("img= "+res[i].img);
        tab_actu.push(new Actu(res[i].type, res[i].img, res[i].nom_edifice,res[i].cp, res[i].ville,res[i].head,res[i].content, res[i].mm,res[i].duree));

      }
      return tab_actu;
    })
  }

  /* PART PAGE */
  // récupère l'ensemble des partenaires collectivités + search + date plus récente
  get_part_part() : Observable<string[]> {
    console.log("get_part_part called from = getDataProvider");
    return this.http.get<string[]>(API_all_part_col);
  }
  // récupère l'ensemble des partenaires particuliers + search + date plus récente
  get_part_coll() : Observable<string[]> {
    console.log("get_part_coll called from = getDataProvider");
    return this.http.get<string[]>(API_all_part_part);
  }

  /* CONTACT PAGE */
  // envoie les messages de contact
  send_message (email, sujet, message) {
    console.log("send_message called from = getDataProvider");
    console.log("url_base+url_contact_create = "+API_send_message);
    return this.http.post(API_send_message, {email:email, sujet:sujet, message:message});
  }


}
