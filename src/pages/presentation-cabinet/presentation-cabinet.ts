import {Component, OnDestroy, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresentationServicePage } from "../presentation-service/presentation-service";
import { GalleriePage } from "../gallerie/gallerie";
import { ActualitesPage } from "../actualites/actualites";
import { PrezProvider } from "../../providers/prez/prez";
import { Subscription } from "rxjs";
import { PrezData } from "../../models/PrezData";

/**
 *Page de présentation du cabinet d'architecture
 */

@IonicPage()
@Component({
  selector: 'page-presentation-cabinet',
  templateUrl: 'presentation-cabinet.html',
})
export class PresentationCabinetPage implements OnInit, OnDestroy {

  // var
  dataprez:PrezData = new PrezData([], []);
  data_prez_Subscription:Subscription;

  // Page navparams
  prez_svg_page = PresentationServicePage;
  gallery_page = GalleriePage;
  actualite_page = ActualitesPage;
  test = "http://192.168.3.101:3000/media/imgs/prez/1.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams, public  prezProvider: PrezProvider) {

  }

  ngOnInit(): void {
    this.data_prez_Subscription = this.prezProvider.getDataPrez()
      .subscribe(result => {
        //console.log("result img array.urls = "+JSON.stringify(result.urls));
        //console.log("result label_data array.labelsAndPrez = "+JSON.stringify(result.labelsAndPrez));
        this.dataprez.setUrls_img(result.urls);
        this.dataprez.setLabels_and_data(result.labelsAndPrez);
      }, error => console.error("erreur in subscribe= "+error));
  }

  ngOnDestroy(): void {
    this.data_prez_Subscription.unsubscribe();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationCabinetPage');
  }

  pushPresentationService() {
    this.navCtrl.push(this.prez_svg_page);
  }

  pushGallerie() {
    this.navCtrl.push(this.gallery_page);
  }

  pushActualites() {
    this.navCtrl.push(this.actualite_page);
  }
}



