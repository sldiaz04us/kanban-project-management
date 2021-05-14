import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSvgIconComponent } from './app-svg-icon/app-svg-icon.component';



@NgModule({
  declarations: [
    AppSvgIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AppSvgIconComponent]
})
export class SharedModule { }
