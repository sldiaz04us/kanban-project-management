import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Project } from '@core/interfaces/project';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent {
  @Input() currentProject$: Observable<Project>;

  constructor() { }

}
