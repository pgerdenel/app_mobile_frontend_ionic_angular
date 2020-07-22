import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleriePage } from './gallerie';
/*import {ComponentsModule} from "../../components/components.module";*/

@NgModule({
  declarations: [
    GalleriePage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    IonicPageModule.forChild(GalleriePage)
  ],
})
export class GalleriePageModule {}
