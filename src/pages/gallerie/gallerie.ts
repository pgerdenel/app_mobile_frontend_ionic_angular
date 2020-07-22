import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {GalleryProvider} from "../../providers/gallery/gallery";
import {Subscription} from "rxjs";
import {url_base_https_aws} from "../../constant/constant";

/**
 * Gallery d'images pour les plus gros projets
 */

@IonicPage()
@Component({
  selector: 'page-gallerie',
  templateUrl: 'gallerie.html',
})
export class GalleriePage implements OnInit, OnDestroy {

  // var
  array_image:string[];
  array_image_Subscription:Subscription;
  host_url_referer:string = url_base_https_aws+"/";

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverController: PopoverController, private galleryProvider: GalleryProvider) {

  }

  ngOnInit() {
    this.array_image_Subscription = this.galleryProvider.getImageGallery()
      .subscribe(result => {
        //console.log("result img array = "+JSON.stringify(result));
        this.array_image = result;
      }, error => console.error("erreur in subscribe= "+error));
  }

  ngOnDestroy(): void {
    this.array_image_Subscription.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleriePage');
  }

  /*
  async show(ev: any) {
    const popover = await this.popoverController.create({
      component: TestComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }*/

}
