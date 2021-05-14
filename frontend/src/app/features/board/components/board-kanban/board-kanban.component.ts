import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { IssueStatus } from '@core/interfaces/issue';

@Component({
  selector: 'app-board-kanban',
  templateUrl: './board-kanban.component.html',
  styleUrls: ['./board-kanban.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardKanbanComponent implements OnInit {
  issuesStatuses: IssueStatus[] = [
    IssueStatus.BACKLOG,
    IssueStatus.IN_PROGRESS,
    IssueStatus.IN_REVIEW,
    IssueStatus.DONE,
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
