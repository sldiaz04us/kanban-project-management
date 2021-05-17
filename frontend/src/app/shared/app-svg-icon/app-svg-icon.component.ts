import { Component, HostBinding, Inject, Input } from '@angular/core';

import { LOCATION } from '@ng-web-apis/common';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './app-svg-icon.component.html',
  styles: [`
    :host { display: flex}
  `]
})
export class AppSvgIconComponent {
  @Input() name: string;
  @Input() size = 16;
  @Input() fill = 'currentColor';
  @HostBinding('style') get style(): CSSStyleDeclaration {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
    } as CSSStyleDeclaration
  };

  constructor(@Inject(LOCATION) readonly location: Location) { }

  get iconUrl(): string {
    return `${this.location.href}#${this.name}`;
  }

}
