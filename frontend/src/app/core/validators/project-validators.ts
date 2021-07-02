import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProjectService } from '@features/project/services/project.service';
import { Project } from '@core/interfaces/project';


@Injectable({
  providedIn: "root"
})
export class ProjectValidators {

  constructor(private projectService: ProjectService) { }

  uniqueProjectNameValidator(currentProject: Project, editMode: boolean): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.projectService.isProjectNameTaken(control.value).pipe(
        map(isTaken => (isTaken.length && editMode && isTaken[0].id !== currentProject.id) || (isTaken.length && !editMode) ? { uniqueProjectName: true } : null),
        catchError(() => of(null))
      )
    }
  }

  uniqueProjectKeyValidator(currentProject: Project, editMode: boolean): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.projectService.isProjectKeyTaken(control.value).pipe(
        map(isTaken => (isTaken.length && editMode && isTaken[0].id !== currentProject.id) || (isTaken.length && !editMode) ? { uniqueProjectKey: true } : null),
        catchError(() => of(null))
      )
    }
  }

}
