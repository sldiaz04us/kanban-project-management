import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { QuillModule } from 'ngx-quill';

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
import { IssueDetailModalComponent } from './components/issue-detail-modal/issue-detail-modal.component';
import { IssueTypeComponent } from './components/issue-type/issue-type.component';
import { IssueActionsComponent } from './components/issue-actions/issue-actions.component';
import { IssueTitleComponent } from './components/issue-title/issue-title.component';
import { IssueDescriptionComponent } from './components/issue-description/issue-description.component';
import { IssueStatusComponent } from './components/issue-status/issue-status.component';
import { IssueReporterComponent } from './components/issue-reporter/issue-reporter.component';
import { IssueAssigneesComponent } from './components/issue-assignees/issue-assignees.component';
import { IssuePriorityComponent } from './components/issue-priority/issue-priority.component';
import { IssueTimeElapsedPipe } from './pipes/issue-time-elapsed.pipe';

@NgModule({
  declarations: [
    IssueCardComponent,
    IssueStatusPipe,
    IssueCreateModalComponent,
    IssueTypeSelectComponent,
    IssueReporterSelectComponent,
    IssueAssigneesSelectComponent,
    IssuePrioritySelectComponent,
    IssueDetailModalComponent,
    IssueTypeComponent,
    IssueActionsComponent,
    IssueTitleComponent,
    IssueDescriptionComponent,
    IssueStatusComponent,
    IssueReporterComponent,
    IssueAssigneesComponent,
    IssuePriorityComponent,
    IssueTimeElapsedPipe,
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
    NzDividerModule,
    NzDropDownModule,
    TextFieldModule,
    QuillModule
  ],
  exports: [IssueCardComponent, IssueStatusPipe]
})
export class IssuesModule { }
