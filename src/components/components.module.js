var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainChoiceBoxComponent } from './main-choice-box/main-choice-box';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
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
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map