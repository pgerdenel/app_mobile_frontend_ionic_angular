import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GetDataProvider} from "../../providers/get_data/get_data";
import {Actu} from "../../models/Actu";

@IonicPage()
@Component({
  selector: 'page-actualites',
  templateUrl: 'actualites.html',
})
export class ActualitesPage {

  tab_actu : Actu[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private getDataProvider:GetDataProvider)  {

  }

  ngOnInit() {
    this.get_actu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualitesPage');
  }

  get_actu() {
    this.getDataProvider.getActu()
      .subscribe(
      res => {
        console.log("res= "+JSON.stringify(res));
        this.tab_actu = res;
      },
      err => console.debug('https error', err),
      () => console.debug("http request complete")
    );
  }

}
