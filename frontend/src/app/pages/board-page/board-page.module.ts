import { NgModule } from '@angular/core';

import { BoardPageRoutingModule } from './board-page-routing.module';
import { BoardPageComponent } from './board-page.component';
import { BoardModule } from '@features/board/board.module';
import { ProjectModule } from '@features/project/project.module';
import { IssuesModule } from '@features/issues/issues.module';


@NgModule({
  declarations: [BoardPageComponent],
  imports: [
    BoardPageRoutingModule,
    BoardModule,
    ProjectModule,
    IssuesModule
  ],
  exports: [BoardPageComponent]
})
export class BoardPageModule { }
