import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Regroupe les communications réseau
*/

@Injectable()
export class AuthProvider {

  private PORT: string;
  private URL_BASE: string;
  private URL_CONTACT: string;

  constructor(public http_client: HttpClient) {
    this.PORT = ":9090";
   this.URL_BASE = "http://******"+this.PORT;
    this.URL_CONTACT = "/contact.php";
  }

  send_email(details){

    return new Promise((resolve, reject) => {

      /* angular httpclient v2 */
      // définit un header avec un contenu de type JSON
      const _headers = new HttpHeaders();
      const headers = _headers.append('Content-Type', 'application/json');
      let options = {headers: headers};
      // effectue une requête http de type post avec les détais en JSON du message de contact
      // si la requête est un succès, le server renvoie un boolean true 1
      this.http_client.post(this.URL_BASE+this.URL_CONTACT, JSON.stringify(details), options)
        .subscribe((res:any) => {
          console.log("contact res ", res);
          resolve(res);

        }, (err) => {
          reject(err);
        });

    });

  }

}
