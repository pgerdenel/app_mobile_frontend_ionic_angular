import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";


@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {


  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  rootPage:any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lottieConfig = {
      path: 'assets/lottie/lottie.json',
      renderer: 'canvas',
      autoplay: true,
      loop: false
    };

    setTimeout(() => {
      this.navCtrl.pop();
    }, 6000);

    /*setTimeout(() => {
      stop();
      this.rootPage = SplashPage;
    })*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }

}
