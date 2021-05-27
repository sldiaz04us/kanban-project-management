import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSvgIconComponent } from './app-svg-icon/app-svg-icon.component';
import { AppButtonComponent } from './app-button/app-button.component';



@NgModule({
  declarations: [
    AppSvgIconComponent,
    AppButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppSvgIconComponent,
    AppButtonComponent
  ]
})
export class SharedModule { }
