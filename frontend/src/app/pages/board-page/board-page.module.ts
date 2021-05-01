import { NgModule } from '@angular/core';

import { BoardPageRoutingModule } from './board-page-routing.module';
import { BoardPageComponent } from './board-page.component';


@NgModule({
  imports: [BoardPageRoutingModule],
  declarations: [BoardPageComponent],
  exports: [BoardPageComponent]
})
export class BoardPageModule { }
