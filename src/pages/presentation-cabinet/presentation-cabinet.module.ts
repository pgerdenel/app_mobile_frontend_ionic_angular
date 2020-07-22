import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentationCabinetPage } from './presentation-cabinet';

@NgModule({
  declarations: [
    PresentationCabinetPage,
  ],
  imports: [
    IonicPageModule.forChild(PresentationCabinetPage),
  ],
})
export class PresentationCabinetPageModule {}
