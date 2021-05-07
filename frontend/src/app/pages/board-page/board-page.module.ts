import { NgModule } from '@angular/core';

import { BoardPageRoutingModule } from './board-page-routing.module';
import { BoardPageComponent } from './board-page.component';
import { BoardModule } from '@features/board/board.module';
import { ProjectModule } from '@features/project/project.module';


@NgModule({
  declarations: [BoardPageComponent],
  imports: [
    BoardPageRoutingModule,
    BoardModule,
    ProjectModule
  ],
  exports: [BoardPageComponent]
})
export class BoardPageModule { }
