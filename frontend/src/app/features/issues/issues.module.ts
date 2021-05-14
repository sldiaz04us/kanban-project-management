import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { issueReducer } from './state/issue.reducer';
import { IssueEffects } from './state/issue.effects';
import { IssueStatusPipe } from './pipes/issue-status.pipe';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    IssueCardComponent,
    IssueStatusPipe
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzAvatarModule,
    NzToolTipModule,
    StoreModule.forFeature('issue', issueReducer),
    EffectsModule.forFeature([IssueEffects]),
    SharedModule
  ],
  exports: [IssueCardComponent, IssueStatusPipe]
})
export class IssuesModule { }
