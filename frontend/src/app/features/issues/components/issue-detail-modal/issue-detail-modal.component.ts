import { Component, Input } from '@angular/core';

import { NzModalRef } from 'ng-zorro-antd/modal';

import { interval, Observable } from 'rxjs';

import { Issue } from '@core/interfaces/issue';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'issue-detail-modal',
  templateUrl: './issue-detail-modal.component.html',
  styleUrls: ['./issue-detail-modal.component.scss']
})
export class IssueDetailModalComponent {
  @Input() issue$: Observable<Issue>;
  @Input() assignees$: Observable<User[]>;

  refreshCount = interval(10000);

  constructor(private modalRef: NzModalRef) { }

  closeModal(): void {
    this.modalRef.destroy();
  }

}
