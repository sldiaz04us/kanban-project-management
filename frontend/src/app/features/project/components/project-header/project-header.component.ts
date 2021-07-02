import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Project } from '@core/interfaces/project';
import { getCurrentProject } from '@features/project/state/project.selectors';


@Component({
  selector: 'project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  currentProject$: Observable<Project>;


  constructor(private store: Store<{}>) { }

  ngOnInit(): void {
    this.currentProject$ = this.store.select(getCurrentProject)
      .pipe(filter(project => Boolean(project)))
  }

}
