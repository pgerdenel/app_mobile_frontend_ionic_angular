import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { PresentationCabinetPage } from "../../pages/presentation-cabinet/presentation-cabinet";
import { PresentationServicePage } from "../../pages/presentation-service/presentation-service";
import { ActualitesPage } from "../../pages/actualites/actualites";
import { GalleriePage } from "../../pages/gallerie/gallerie";
import { PartenairesPage } from "../../pages/partenaires/partenaires";
import { ContactPage } from "../../pages/contact/contact";

/**
 * Boite de selection des différentes fonctionnalitées
 */

@Component({
  selector: 'main-choice-box',
  templateUrl: 'main-choice-box.html'
})
export class MainChoiceBoxComponent {


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationCabinetPage');
  }

  pushPresentationEntreprise() {
    this.navCtrl.push(PresentationCabinetPage);
  }

  pushPresentationService() {
    this.navCtrl.push(PresentationServicePage);
  }

  pushActualites() {
    this.navCtrl.push(ActualitesPage);
  }

  pushGallerie() {
    this.navCtrl.push(GalleriePage);
  }

  pushPartenaire() {
    this.navCtrl.push(PartenairesPage);
  }

  pushContact() {
    this.navCtrl.push(ContactPage);
  }

}
