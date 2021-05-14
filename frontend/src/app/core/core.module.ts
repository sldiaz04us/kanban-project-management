import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';



@NgModule({
  declarations: [
    SvgDefinitionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SvgDefinitionsComponent]
})
export class CoreModule { }
