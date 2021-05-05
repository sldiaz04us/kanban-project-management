import { NgModule } from '@angular/core';

import { BoardPageRoutingModule } from './board-page-routing.module';
import { BoardPageComponent } from './board-page.component';
import { BoardModule } from '@features/board/board.module';


@NgModule({
  declarations: [BoardPageComponent],
  imports: [
    BoardPageRoutingModule,
    BoardModule
  ],
  exports: [BoardPageComponent]
})
export class BoardPageModule { }
