import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { issueReducer } from './state/issue.reducer';
import { IssueEffects } from './state/issue.effects';
import { IssueStatusPipe } from './pipes/issue-status.pipe';
import { SharedModule } from '@shared/shared.module';
import { IssueCreateModalComponent } from './components/issue-create-modal/issue-create-modal.component';
import { IssueTypeSelectComponent } from './components/issue-create-modal/issue-type-select/issue-type-select.component';
import { IssueReporterSelectComponent } from './components/issue-create-modal/issue-reporter-select/issue-reporter-select.component';
import { IssuePrioritySelectComponent } from './components/issue-create-modal/issue-priority-select/issue-priority-select.component';
import { IssueAssigneesSelectComponent } from './components/issue-create-modal/issue-assignees-select/issue-assignees-select.component';


@NgModule({
  declarations: [
    IssueCardComponent,
    IssueStatusPipe,
    IssueCreateModalComponent,
    IssueTypeSelectComponent,
    IssueReporterSelectComponent,
    IssueAssigneesSelectComponent,
    IssuePrioritySelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    StoreModule.forFeature('issue', issueReducer),
    EffectsModule.forFeature([IssueEffects]),
    SharedModule,
    NzAvatarModule,
    NzToolTipModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzInputModule,
    NzDividerModule
  ],
  exports: [IssueCardComponent, IssueStatusPipe]
})
export class IssuesModule { }
