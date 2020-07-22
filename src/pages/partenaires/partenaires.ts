import {Component, OnDestroy, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PartenaireProvider} from "../../providers/partenaire/partenaire";
import {Subscription} from "rxjs";
import {PartenaireData} from "../../models/PartenaireData";

@IonicPage()
@Component({
  selector: 'page-partenaires',
  templateUrl: 'partenaires.html',
})
export class PartenairesPage implements OnInit, OnDestroy {

  data_part:PartenaireData = new PartenaireData([], []);
  data_parti_Subscription:Subscription;
  data_collect_Subscription:Subscription;

  // old
  part_tab : String[] = [];
  col_tab : String[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private partenaireProvider:PartenaireProvider) {
  }

  ngOnInit(): void {
    // particulier
    this.data_parti_Subscription = this.partenaireProvider.get_part().subscribe(result => {
      this.part_tab = result;
      this.data_part.setAll_part(result);
    }, error => console.error("erreur in subscribe part= "+error));
    // collectivité
    this.data_collect_Subscription = this.partenaireProvider.get_col().subscribe(result => {
      this.col_tab = result;
      this.data_part.setAll_col(result);
    }, error => console.error("erreur in subscribe col = "+error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartenairesPage');
  }

  ngOnDestroy(): void {
    this.data_parti_Subscription.unsubscribe();
    this.data_collect_Subscription.unsubscribe();
  }






}
