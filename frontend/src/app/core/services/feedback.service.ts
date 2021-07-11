import { Injectable } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private notification: NzNotificationService, private message: NzMessageService) { }

  createNotification(type: string, title: string, content: string = '', position: NzNotificationPlacement = 'bottomLeft') {
    this.notification.create(
      type,
      title,
      content,
      { nzPlacement: position }
    );
  }

  createMessage(type: string, content: string) {
    this.message.create(type, content);
  }
}
