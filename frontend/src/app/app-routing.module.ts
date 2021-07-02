import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/board'
  },
  {
    path: 'board',
    loadChildren: () => import('./pages/board-page/board-page.module').then(m => m.BoardPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/project-pages/project-pages.module').then(m => m.ProjectPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
