import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IPermissionsForUserResult } from './permissions-for-user-result';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  //private permissionsApiUrl = 'http://nlkvintapt11/di-api-v0/permissions'
  private permissionsApiUrl = 'http://localhost/di-api-v0/permissions'

  constructor(private http: HttpClient) {}

  getPermissionsByUserId(userId: number): Observable<IPermissionsForUserResult> {
    return this.http.get<IPermissionsForUserResult>(this.permissionsApiUrl + "?userid=" + userId + "&apikey=jeremy");
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
