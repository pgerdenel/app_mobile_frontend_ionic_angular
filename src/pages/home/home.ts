import {Component, OnDestroy, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomeProvider} from "../../providers/home/home";
import {HomeData} from "../../models/HomeData";
import {Subscription} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy  {

  data_home:HomeData = new HomeData("", "");
  data_home_Subscription:Subscription;

  constructor(public navCtrl: NavController, public homeProvider: HomeProvider)  {
  }


  ngOnInit(): void {
   this.data_home_Subscription =  this.homeProvider.getDataHome()
     .subscribe(result => {
     //this.data_home = new HomeData(result[1]['phrase'], result[0]['url']);
     this.data_home.setUrls_img(result[0]['url']);
     this.data_home.setPhrases(result[1]['phrase']);
   }, error => console.error("erreur in subscribe= "+error));
  }

  ngOnDestroy(): void {
    this.data_home_Subscription.unsubscribe();
  }

  ionViewDidLoad() {
      this.getData();
  }
  getData() {

  }


}
