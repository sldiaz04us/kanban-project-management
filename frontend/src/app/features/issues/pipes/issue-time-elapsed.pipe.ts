import { Pipe, PipeTransform } from '@angular/core';

import { DateUtil } from '@core/utils/date';

@Pipe({
  name: 'issueTimeElapsed'
})
export class IssueTimeElapsedPipe implements PipeTransform {

  transform(date: string, _refreshCount?: number): string {
    const issueUpdatedAt = new Date(date);

    const days = DateUtil.getDays(issueUpdatedAt);
    if (days > 0) {
      return days === 1 ? `${days} day ago` : `${days} days ago`
    }

    const hours = DateUtil.getHours(issueUpdatedAt);
    if (hours > 0) {
      return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`
    }

    const minutes = DateUtil.getMinutes(issueUpdatedAt);
    if (minutes > 0) {
      return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`
    }

    const seconds = DateUtil.getSeconds(issueUpdatedAt);
    return seconds === 1 ? `${seconds} second ago` : `${seconds} seconds ago`
  }

}
