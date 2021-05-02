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

@NgModule({
  declarations: [
    BoardHeaderComponent,
    BoardFilterComponent
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
    NzDividerModule
  ],
  exports: [BoardHeaderComponent, BoardFilterComponent]
})
export class BoardModule { }
