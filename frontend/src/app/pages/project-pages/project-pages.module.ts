import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { IconsProviderModule } from 'src/app/icons-provider.module';
import { ProjectPagesRoutingModule } from './project-pages-routing.module';
import { ProjectCreatePageComponent } from './project-create-page/project-create-page.component';
import { ProjectModule } from '@features/project/project.module';
import { ProjectEditPageComponent } from './project-edit-page/project-edit-page.component';
import { ProjectPeoplePageComponent } from './project-people-page/project-people-page.component';
import { ProjectListPageComponent } from './project-list-page/project-list-page.component';


@NgModule({
  declarations: [
    ProjectCreatePageComponent,
    ProjectEditPageComponent,
    ProjectPeoplePageComponent,
    ProjectListPageComponent
  ],
  imports: [
    CommonModule,
    ProjectPagesRoutingModule,
    ProjectModule,
    IconsProviderModule,
    NzTableModule,
    NzAlertModule
  ]
})
export class ProjectPagesModule { }
