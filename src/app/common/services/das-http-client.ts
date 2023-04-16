import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, Observable, takeUntil, throwError } from 'rxjs';
import { DAS_COMMON_SPINNER } from './das-constant';
import { DasServiceBaes } from './das-service-baes';
import { DasToastService } from './das-toast.service';

@Injectable({providedIn: 'root'})
export class DasHttpClient extends DasServiceBaes{

  constructor(private readonly httpClient: HttpClient,
              private readonly toastService: DasToastService) {
    super();
  }


  post$(uri: string, params = null, isHandleError = true): Observable<any> {
    return this.httpClient.post(uri, params).pipe(
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

    return throwError(errResponse);
  };
}
