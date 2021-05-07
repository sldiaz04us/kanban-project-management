import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { projectReducer } from './state/project.reducer';
import { ProjectEffects } from './state/project.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('projects', projectReducer),
    EffectsModule.forFeature([ProjectEffects])
  ]
})
export class ProjectModule { }
