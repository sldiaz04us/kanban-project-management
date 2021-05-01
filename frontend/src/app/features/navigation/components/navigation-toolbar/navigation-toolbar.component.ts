import { Component } from '@angular/core';

import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.scss']
})
export class NavigationToolbarComponent {
  isSidebarCollapsed = false;

  constructor(private navigationService: NavigationService) { }

  onCollapseSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.navigationService.collapseSidebar(this.isSidebarCollapsed);
  }

}
