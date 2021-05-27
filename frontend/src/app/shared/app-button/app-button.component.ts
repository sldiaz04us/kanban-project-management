import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {
  @Input() type = 'button';
  @Input() className = 'btn-primary';
  @Input() icon: string;
  @Input() iconSize = 18;
  @Input() iconBeforeContent = true;
  @Input() isWorking: boolean;
  @Input() isActive: boolean;
  @Input() disabled: boolean;

  constructor() { }
}
