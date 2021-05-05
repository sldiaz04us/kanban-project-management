import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { IconsProviderModule } from 'src/app/icons-provider.module';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { BoardFilterComponent } from './components/board-filter/board-filter.component';
import { BoardKanbanComponent } from './components/board-kanban/board-kanban.component';
import { BoardKanbanColumnComponent } from './components/board-kanban-column/board-kanban-column.component';
import { IssuesModule } from '@features/issues/issues.module';

@NgModule({
  declarations: [
    BoardHeaderComponent,
    BoardFilterComponent,
    BoardKanbanComponent,
    BoardKanbanColumnComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzAvatarModule,
    NzToolTipModule,
    NzDividerModule,
    IssuesModule
  ],
  exports: [
    BoardHeaderComponent,
    BoardFilterComponent,
    BoardKanbanComponent,
  ]
})
export class BoardModule { }
