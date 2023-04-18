import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, of, takeUntil, throwError } from 'rxjs';
import { DasConfig } from './das-config';
import { DasServiceBaes } from './das-service-baes';
import {DasToastService } from './das-toast.service';

@Injectable({ providedIn: 'root' })
export class DasHttpClient extends DasServiceBaes {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly toastService:DasToastService,
    private readonly dasConfig: DasConfig
  ) {
    super();
  }


  post$(uri: string, params = null, isHandleError = true): Observable<any> {
    return this.httpClient.post(`${this.dasConfig.dasDataApi}${uri}`, params).pipe(
      takeUntil(this.ngUnsubscribe),
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err, isHandleError);
      })
    );
  }


  handleError = (errResponse: HttpErrorResponse, isHandleError = true) => {
    if (!isHandleError) {
      return throwError(errResponse);
    }

    this.toastService.showError(errResponse.message);

    return of(errResponse);

  };
}
