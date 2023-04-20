import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, takeUntil, tap, throwError, timer } from 'rxjs';
import { DasConfig } from './das-config';
import { DasServiceBaes } from './das-service-baes';
import { DasToastService } from './das-toast.service';

@Injectable({ providedIn: 'root' })
export class DasHttpClient extends DasServiceBaes {

  private readonly timeWindow = 2000; // 2 seconds


  private readonly cache: Map<string, any> = new Map<string, any>();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly toastService: DasToastService,
    private readonly dasConfig: DasConfig
  ) {
    super();
  }


  post$(url: string, body?: any, isHandleError = true): Observable<any> {
    const cacheKey = `${url}-${JSON.stringify(body)}`;

    const cachedResponse = this.cache.get(cacheKey);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return this.httpClient.post(`${this.dasConfig.dasDataApi}${url}`, body).pipe(
      takeUntil(this.ngUnsubscribe),
      tap(response => {
        this.storeToCache(cacheKey, response);
      }),
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err, isHandleError);
      })
    );
  }



  private readonly storeToCache = (cacheKey: string, response: any) => {
    this.cache.set(cacheKey, response);

    timer(this.timeWindow)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.cache.delete(cacheKey);
      });
  };


  private readonly handleError = (errResponse: HttpErrorResponse, isHandleError = true) => {
    if (!isHandleError) {
      return throwError(errResponse);
    }

    this.toastService.showError(errResponse.message);

    return of(errResponse);

  };
}
