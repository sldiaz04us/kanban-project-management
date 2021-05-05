import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Issue, IssueStatus, IssueStatusDisplay } from '@core/interfaces/issue';
import { IssueService } from '@core/services/issue.service';

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

  constructor(private issueService: IssueService) {
  }

  ngOnInit(): void {
    this.issues$ = this.issueService.getIssuesByStatus(this.status);
  }

}
