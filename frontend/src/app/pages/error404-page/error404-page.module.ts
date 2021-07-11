import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { Error404PageRoutingModule } from './error404-page-routing.module';
import { Error404PageComponent } from './error404-page.component';


@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    Error404PageRoutingModule,
    NzResultModule,
    NzButtonModule
  ]
})
export class Error404PageModule { }
