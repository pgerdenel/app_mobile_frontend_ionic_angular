import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentationServicePage } from './presentation-service';

@NgModule({
  declarations: [
    PresentationServicePage,
  ],
  imports: [
    IonicPageModule.forChild(PresentationServicePage),
  ],
})
export class PresentationServicePageModule {}
