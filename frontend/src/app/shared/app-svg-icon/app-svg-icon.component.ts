import { Component, Inject, Input } from '@angular/core';

import { LOCATION } from '@ng-web-apis/common';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './app-svg-icon.component.html'
})
export class AppSvgIconComponent {
  @Input() name: string;
  @Input() size = 16;
  @Input() fill = 'currentColor';

  constructor(@Inject(LOCATION) readonly location: Location) { }

  get iconUrl(): string {
    return `${this.location.href}#${this.name}`;
  }

}
