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
import { Validators} from '@angular/forms';
import { GetDataProvider } from '../providers/get_data/get_data';

import { HttpClientModule } from '@angular/common/http';

import { IonicImageViewerModule } from "ionic-img-viewer";
import {HomePageModule} from "../pages/home/home.module";
import { SetDataProvider } from '../providers/set-data/set-data';
import { HomeProvider } from '../providers/home/home';
import { PrezProvider } from '../providers/prez/prez';
import { SvcProvider } from '../providers/svc/svc';
import { GalleryProvider } from '../providers/gallery/gallery';
import { ContactProvider } from '../providers/contact/contact';
import { PartenaireProvider } from '../providers/partenaire/partenaire';
import { LottieAnimationViewModule } from 'ng-lottie';
import {SplashPage} from "../pages/splash/splash";

import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import {AndroidFullScreen} from "@ionic-native/android-full-screen/ngx";

@NgModule({
  declarations: [
    MyApp
    /* A COMMENTER JUSQU'A LA FIN POUR PASSER EN PROD*/
    ,PresentationCabinetPage,
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
    LottieAnimationViewModule.forRoot()
    /*A COMMENTER JUSQU'A LA FIN POUR PASSER EN PROD */
    , HomePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    /*A COMMENTER JUSQU'A LA FIN POUR PASSER EN LAB <== NON */
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
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
export class AppModule {
}
