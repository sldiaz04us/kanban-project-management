import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { QuillModule } from 'ngx-quill';

import { projectReducer } from './state/project.reducer';
import { ProjectEffects } from './state/project.effects';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectPeopleAddModalComponent } from './components/project-people-add-modal/project-people-add-modal.component';
import { ProjectActionsComponent } from './components/project-actions/project-actions.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { SharedModule } from '@shared/shared.module';
import { ProjectNotSelectedComponent } from './components/project-not-selected/project-not-selected.component';
import { ProjectLeadSelectComponent } from './components/project-lead-select/project-lead-select.component';

@NgModule({
  declarations: [
    ProjectHeaderComponent,
    ProjectFormComponent,
    ProjectPeopleAddModalComponent,
    ProjectActionsComponent,
    ProjectNotSelectedComponent,
    ProjectLeadSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('project', projectReducer),
    EffectsModule.forFeature([ProjectEffects]),
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    QuillModule,
    NzAvatarModule,
    NzDropDownModule,
    NzEmptyModule,
    IconsProviderModule,
    SharedModule
  ],
  exports: [
    ProjectHeaderComponent,
    ProjectFormComponent,
    ProjectPeopleAddModalComponent,
    ProjectActionsComponent,
    ProjectNotSelectedComponent,
    ProjectLeadSelectComponent,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ]
})
export class ProjectModule { }
