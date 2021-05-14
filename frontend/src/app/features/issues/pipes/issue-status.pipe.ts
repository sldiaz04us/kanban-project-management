import { Pipe, PipeTransform } from '@angular/core';

import { IssueStatus, IssueStatusDisplay } from '@core/interfaces/issue';

@Pipe({
  name: 'issueStatus'
})
export class IssueStatusPipe implements PipeTransform {

  transform(issueStatus: IssueStatus): string {
    return IssueStatusDisplay[issueStatus].toUpperCase();
  }

}
