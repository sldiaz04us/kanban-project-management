import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectCreatePageComponent } from './project-create-page/project-create-page.component';
import { ProjectEditPageComponent } from './project-edit-page/project-edit-page.component';
import { ProjectListPageComponent } from './project-list-page/project-list-page.component';
import { ProjectPeoplePageComponent } from './project-people-page/project-people-page.component';

const routes: Routes = [
  { path: ':id/settings/details', component: ProjectEditPageComponent },
  { path: 'settings/people', component: ProjectPeoplePageComponent },
  { path: 'new', component: ProjectCreatePageComponent },
  { path: 'all', component: ProjectListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPagesRoutingModule { }
