import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainChoiceBoxComponent } from './main-choice-box/main-choice-box';

@NgModule({
	declarations: [
	  MainChoiceBoxComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
	imports: [
	  FormsModule,
	  ReactiveFormsModule,
	  CommonModule
  ],
	exports: [
	  MainChoiceBoxComponent
  ]
})
export class ComponentsModule {}
