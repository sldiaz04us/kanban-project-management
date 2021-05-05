import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [
    IssueCardComponent
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzAvatarModule,
    NzToolTipModule
  ],
  exports: [IssueCardComponent]
})
export class IssuesModule { }
