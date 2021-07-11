import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404-page/error404-page.module').then(m => m.Error404PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
