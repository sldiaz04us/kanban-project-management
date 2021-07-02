import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { getCurrentUser } from '@features/user/state/user.selectors';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'app-project-create-page',
  templateUrl: './project-create-page.component.html',
  styleUrls: ['./project-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCreatePageComponent implements OnInit {
  currentUser$: Observable<User>;

  constructor(private store: Store<{}>, private titleService: Title) {
    this.titleService.setTitle('Create project - Kanban Project Management');
  }

  ngOnInit(): void {
    this.currentUser$ = this.store.select(getCurrentUser)
      .pipe(filter(user => Boolean(user)));
  }

}
