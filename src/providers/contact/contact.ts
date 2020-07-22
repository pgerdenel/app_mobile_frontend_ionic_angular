import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GetDataProvider} from "../get_data/get_data";

@Injectable()
export class ContactProvider {

  constructor(public http: HttpClient, private getDataProvider:GetDataProvider) {

  }

  send_message(email, subject, message) {
    return this.getDataProvider.send_message(email, subject, message);
  }



}
