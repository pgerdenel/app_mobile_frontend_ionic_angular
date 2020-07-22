var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient /*, HttpHeaders*/ } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { API_home_img_url, API_home_phrase, API_all_gallery_image, API_image_prez, API_all_svc_label_and_data, API_all_actu_data, API_all_part_part, API_all_part_col, API_send_message, API_all_prez_label_and_data } from "../../constant/constant";
import { Actu } from "../../models/Actu";
/*
 * Regroupe l'ensemble des appels aux web services
 * - récupérer l'ensemble des informations en base de données
 * - envoyer l'email du formulaire de contact
 * .map((res:Response) => res.json())
 */
var GetDataProvider = /** @class */ (function () {
    function GetDataProvider(http) {
        this.http = http;
    }
    /* HOME PAGE */
    // permet de récupérer l'url de l'image d'acceuil
    GetDataProvider.prototype.getHomeImgURL = function () {
        //console.log("getHomeImgURL called");
        return this.http.get(API_home_img_url);
    };
    // permet de récupérer la phrase d'acceuil
    GetDataProvider.prototype.getHomePhrase = function () {
        //console.log("getHomePhrase called");
        return this.http.get(API_home_phrase);
    };
    /* PREZ PAGE */
    // permet de récupérer l'image du composant "présentation de l'agence"
    GetDataProvider.prototype.getPresentationImgUrl = function () {
        console.log("getPresentationImgUrl called from = getDataProvider");
        return this.http.get(API_image_prez);
    };
    // permet de récupérer tous les labels et données correspondantes de présentation
    GetDataProvider.prototype.getPresentationLabelAndDataUrl = function () {
        console.log("getPresentationLabelAndDataUrl called from = getDataProvider");
        return this.http.get(API_all_prez_label_and_data);
    };
    /* SVC PAGE */
    // permet de récupérer la liste des services(label+description)"
    GetDataProvider.prototype.getServiceLabelAndDataUrl = function () {
        console.log("getServiceList called from = getDataProvider");
        return this.http.get(API_all_svc_label_and_data);
    };
    /* GALLERY PAGE */
    // récupérer les images de la gallerie
    GetDataProvider.prototype.getGallerie = function () {
        console.log("getGallerie called from = getDataProvider to " + API_all_gallery_image);
        return this.http.get(API_all_gallery_image);
    };
    /* ACTU PAGE */
    // récupérer les actualitées + search with date plus récente
    GetDataProvider.prototype.getActu = function () {
        console.log("getActu called from = getDataProvider");
        return this.http.get(API_all_actu_data).map(function (res) {
            var tab_actu = [];
            for (var i = 0; i < res.length; i++) {
                console.log("img= " + res[i].img);
                tab_actu.push(new Actu(res[i].type, res[i].img, res[i].nom_edifice, res[i].cp, res[i].ville, res[i].head, res[i].content, res[i].mm, res[i].duree));
            }
            return tab_actu;
        });
    };
    /* PART PAGE */
    // récupère l'ensemble des partenaires collectivités + search + date plus récente
    GetDataProvider.prototype.get_part_part = function () {
        console.log("get_part_part called from = getDataProvider");
        return this.http.get(API_all_part_col);
    };
    // récupère l'ensemble des partenaires particuliers + search + date plus récente
    GetDataProvider.prototype.get_part_coll = function () {
        console.log("get_part_coll called from = getDataProvider");
        return this.http.get(API_all_part_part);
    };
    /* CONTACT PAGE */
    // envoie les messages de contact
    GetDataProvider.prototype.send_message = function (email, sujet, message) {
        console.log("send_message called from = getDataProvider");
        console.log("url_base+url_contact_create = " + API_send_message);
        return this.http.post(API_send_message, { email: email, sujet: sujet, message: message });
    };
    GetDataProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], GetDataProvider);
    return GetDataProvider;
}());
export { GetDataProvider };
//# sourceMappingURL=get_data.js.map