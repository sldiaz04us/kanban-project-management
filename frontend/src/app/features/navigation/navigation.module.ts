import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NavigationSidebarComponent } from './components/navigation-sidebar/navigation-sidebar.component';
import { NavigationToolbarComponent } from './components/navigation-toolbar/navigation-toolbar.component';



@NgModule({
  declarations: [
    NavigationSidebarComponent,
    NavigationToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconsProviderModule,
    NzMenuModule,
    NzDropDownModule,
    NzDividerModule,
    NzToolTipModule,
    NzButtonModule,
    NzAvatarModule,
    NzModalModule
  ],
  exports: [
    NavigationSidebarComponent,
    NavigationToolbarComponent
  ]
})
export class NavigationModule { }
