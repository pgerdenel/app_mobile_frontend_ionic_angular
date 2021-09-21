import {Component, OnDestroy, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartenairesPage } from "../partenaires/partenaires";
import {SvcProvider} from "../../providers/svc/svc";
import {Subscription} from "rxjs";
import {SvcData} from "../../models/SvcData";

/**
 * Page de présentation des services du cabinet d'architecture
 */

@IonicPage()
@Component({
  selector: 'page-presentation-service',
  templateUrl: 'presentation-service.html',
})
export class PresentationServicePage implements OnInit, OnDestroy {

  // var
  data_svc:SvcData = new SvcData([]);
  data_svc_Subscription:Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public svcProvider: SvcProvider) {
  }


  ngOnInit(): void {
    this.data_svc_Subscription = this.svcProvider.getDataSvc()
      .subscribe(result => {
        this.data_svc.setLabels_and_data(result[0]);
      }, error => console.error("erreur in subscribe= "+error));
  }

  ngOnDestroy(): void {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationServicePage');
  }

  pushPartenaire() {
    this.navCtrl.push(PartenairesPage);
  }
}
