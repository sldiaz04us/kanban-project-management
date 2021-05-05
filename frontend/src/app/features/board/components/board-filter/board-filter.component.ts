import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '@core/services/user.service';
import { User } from '@core/interfaces/user';
import { Observable } from 'rxjs';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-board-filter',
  templateUrl: './board-filter.component.html',
  styleUrls: ['./board-filter.component.scss']
})
export class BoardFilterComponent implements OnInit {
  filterForm!: FormGroup;
  users$: Observable<User[]>;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.users$ = this.userService.users$;
  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      filterQuery: [null]
    });

    this.filterForm.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(value => console.log(value));
  }

}
