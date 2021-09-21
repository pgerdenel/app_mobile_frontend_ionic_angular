import { Component } from '@angular/core';
import {ModalController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {SplashPage} from "../pages/splash/splash";
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import {AndroidFullScreen} from "@ionic-native/android-full-screen/ngx";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  /*rootPage:any = HomePage;*/
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  rootPage:any = HomePage;
  splashPage:any = SplashPage;

  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              public modalCtrl: ModalController,
              private navigationBar: NavigationBar,
              private androidFullScreen: AndroidFullScreen
  ) {

    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {

      // cache la statut bar android
      this.statusBar.hide();
      this.splashScreen.hide();

      // ANDROID
      if (this.platform.is('android')) {
        console.info("platform: ", "android detected "+this.platform.version().str+" version "+this.platform.version().num);
      }
      // IOS
      else if(this.platform.is('ios')) {
        console.info("platform: ", "ios detected "+this.platform.version().str+" version "+this.platform.version().num);
        // a mettre en fulls creen
      }
      else {
        console.info("platform: ", "should be WEB Browser "+this.platform.version().str+" version "+this.platform.version().num);
      }

      let profileModal = this.modalCtrl.create(SplashPage);
      profileModal.present().then((result) => {
        console.log("modal ok");
      })
      .catch((error) => {
        console.log("modal error "+error);
      });

      /*setTimeout(() => {
        this.rootPage = HomePage;
      }, 6000);*/

    });
  }

}

