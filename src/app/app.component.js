var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SplashPage } from "../pages/splash/splash";
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import { AndroidFullScreen } from "@ionic-native/android-full-screen/ngx";
/*import {Plugins} from "@capacitor/core";*/
/*const { SplashScreenc } = Plugins;*/
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, navigationBar, androidFullScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.navigationBar = navigationBar;
        this.androidFullScreen = androidFullScreen;
        this.animationSpeed = 1;
        this.rootPage = HomePage;
        this.splashPage = SplashPage;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Hide the splash (you should do this on app launch)
            /*SplashScreenc.hide();*/
            // cache la navigation bar  android
            /*let autoHide: boolean = true;
            this.navigationBar.setUp(autoHide);
            this.navigationBar.hideNavigationBar().then((result) => {
              console.log("success hide navigation bar");
            })
            .catch((err) => {
              console.error("error hide navigation bar= "+err);
            });
      
           this.androidFullScreen.isImmersiveModeSupported()
              .then(() => console.log('Immersive mode supported'))
              .catch(err => console.log(err));*/
            // cache la statut bar android
            _this.statusBar.hide();
            _this.splashScreen.hide();
            // ANDROID
            if (_this.platform.is('android')) {
                console.info("platform: ", "android detected " + _this.platform.version().str + " version " + _this.platform.version().num);
            }
            else if (_this.platform.is('ios')) {
                console.info("platform: ", "ios detected " + _this.platform.version().str + " version " + _this.platform.version().num);
                // a mettre en fulls creen
            }
            else {
                console.info("platform: ", "should be WEB Browser " + _this.platform.version().str + " version " + _this.platform.version().num);
            }
            var profileModal = _this.modalCtrl.create(SplashPage);
            profileModal.present().then(function (result) {
                console.log("modal ok");
            })
                .catch(function (error) {
                console.log("modal error " + error);
            });
            /*setTimeout(() => {
              this.rootPage = HomePage;
            }, 6000);*/
        });
    };
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen,
            ModalController,
            NavigationBar,
            AndroidFullScreen])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map