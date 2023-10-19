import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModelComponent } from './components/confirm-model/confirm-model.component';
import { AppAngularMaterialModule } from '../angular-material-module/angular-material-modules';



@NgModule({
  declarations: [
    ConfirmModelComponent
  ],
  imports: [
    CommonModule,
    AppAngularMaterialModule,
  ],
  exports: [
    ConfirmModelComponent
  ]
})
export class SharedModule { }
