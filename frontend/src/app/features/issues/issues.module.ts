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


@NgModule({
  declarations: [
    IssueCardComponent
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzAvatarModule,
    NzToolTipModule,
    StoreModule.forFeature('issues', issueReducer),
    EffectsModule.forFeature([IssueEffects])
  ],
  exports: [IssueCardComponent]
})
export class IssuesModule { }
