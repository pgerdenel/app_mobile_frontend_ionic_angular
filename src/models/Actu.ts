/*interface Actu {
  primary_type:string;
  url_img:string;
  nom_edifice:string;
  departement:string;
  ville:string;
  entete:string;
  content:string;
  montant_marche:string;
  duree:string;
}*/

import {url_base_https_aws} from "../constant/constant";

export class Actu {

  type: string;
  img:string;
  nom_edifice:string;
  cp:string;
  ville:string;
  head:string;
  content:string;
  mm:string;
  duree:string;

  constructor(type: string, img:string, nom_edifice:string,cp:string,ville:string,head:string,content:string,mm:string,duree:string) {
    this.type= type;
    this.img=url_base_https_aws+"/"+img;
    this.nom_edifice=nom_edifice;
    this.cp=cp;
    this.ville=ville;
    this.head=head;
    this.content=content;
    this.mm=mm;
    this.duree=duree;
  }

  toJson() {
    return JSON.stringify(this);
  }

  fromJson(actu_json:string) : Actu {

    let actu_parsed = JSON.parse(actu_json);
    return new Actu(
      actu_parsed.type,
      actu_parsed.url_img,
      actu_parsed.nom_edifice,
      actu_parsed.departement,
      actu_parsed.ville,
      actu_parsed.entete,
      actu_parsed.content,
      actu_parsed.montant_marche,
      actu_parsed.duree,
    );
  }



}
