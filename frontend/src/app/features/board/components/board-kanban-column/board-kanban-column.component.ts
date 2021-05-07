import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Issue, IssueStatus, IssueStatusDisplay } from '@core/interfaces/issue';
import { State } from '@core/interfaces/app.state';
import { getIssuesByStatus } from '@features/issues/state/issue.selectors';
import { IssuePageActions } from '@features/issues/state/actions';

@Component({
  selector: '[app-board-kanban-column]',
  templateUrl: './board-kanban-column.component.html',
  styleUrls: ['./board-kanban-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardKanbanColumnComponent implements OnInit {
  @Input() status: IssueStatus;
  issues$: Observable<Issue[]>;

  IssueStatusDisplay = IssueStatusDisplay;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(IssuePageActions.loadIssues());
    this.issues$ = this.store.select(getIssuesByStatus, { status: this.status });
  }

}
