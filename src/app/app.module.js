var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PresentationCabinetPage } from '../pages/presentation-cabinet/presentation-cabinet';
import { PresentationServicePage } from '../pages/presentation-service/presentation-service';
import { ActualitesPage } from '../pages/actualites/actualites';
import { GalleriePage } from '../pages/gallerie/gallerie';
import { PartenairesPage } from '../pages/partenaires/partenaires';
import { ContactPage } from '../pages/contact/contact';
import { AuthProvider } from '../providers/auth/auth';
import { Validators } from '@angular/forms';
import { GetDataProvider } from '../providers/get_data/get_data';
import { HttpClientModule } from '@angular/common/http';
import { IonicImageViewerModule } from "ionic-img-viewer";
import { HomePageModule } from "../pages/home/home.module";
import { SetDataProvider } from '../providers/set-data/set-data';
import { HomeProvider } from '../providers/home/home';
import { PrezProvider } from '../providers/prez/prez';
import { SvcProvider } from '../providers/svc/svc';
import { GalleryProvider } from '../providers/gallery/gallery';
import { ContactProvider } from '../providers/contact/contact';
import { PartenaireProvider } from '../providers/partenaire/partenaire';
import { LottieAnimationViewModule } from 'ng-lottie';
import { SplashPage } from "../pages/splash/splash";
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import { AndroidFullScreen } from "@ionic-native/android-full-screen/ngx";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                PresentationCabinetPage,
                ActualitesPage,
                PresentationServicePage,
                GalleriePage,
                PartenairesPage,
                ContactPage,
                SplashPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                HttpClientModule,
                IonicImageViewerModule,
                LottieAnimationViewModule.forRoot(),
                HomePageModule,
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                PresentationCabinetPage,
                ActualitesPage,
                PresentationServicePage,
                GalleriePage,
                PartenairesPage,
                ContactPage,
                SplashPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                AuthProvider,
                GetDataProvider,
                Validators,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                SetDataProvider,
                HomeProvider,
                PrezProvider,
                SvcProvider,
                GalleryProvider,
                ContactProvider,
                PartenaireProvider,
                NavigationBar,
                AndroidFullScreen
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
