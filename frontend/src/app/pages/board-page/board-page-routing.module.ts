import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardPageComponent } from './board-page.component';

const routes: Routes = [
  { path: '', component: BoardPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardPageRoutingModule { }
