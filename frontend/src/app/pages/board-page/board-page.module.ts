import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzAlertModule } from 'ng-zorro-antd/alert';

import { BoardPageRoutingModule } from './board-page-routing.module';
import { BoardPageComponent } from './board-page.component';
import { BoardModule } from '@features/board/board.module';
import { ProjectModule } from '@features/project/project.module';
import { IssuesModule } from '@features/issues/issues.module';


@NgModule({
  declarations: [BoardPageComponent],
  imports: [
    BoardPageRoutingModule,
    CommonModule,
    BoardModule,
    ProjectModule,
    IssuesModule,
    NzAlertModule
  ],
  exports: [BoardPageComponent]
})
export class BoardPageModule { }
