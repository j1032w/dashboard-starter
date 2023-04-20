import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, takeUntil, tap, throwError, timer } from 'rxjs';
import { DAS_SPINNER_KEY } from '../components/das-spinner/services/das-http-state.service';
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


  post$(
    url: string,
    body?: any,
    spinnerId = '',
    isHandleError = true
  ): Observable<any> {
    const cacheKey = `${url}-${JSON.stringify(body)}`;

    const cachedResponse = this.cache.get(cacheKey);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    const headers = this.buildSpinnerHeader(spinnerId);

    return this.httpClient.post(`${this.dasConfig.dasDataApi}${url}`, body, headers)
      .pipe(
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

  private buildSpinnerHeader(spinnerId: string): { headers: HttpHeaders } {
    let headers = new HttpHeaders();

    if (spinnerId) {
      headers = headers.set(DAS_SPINNER_KEY, spinnerId);
    }

    return { headers };
  }


  private readonly handleError = (errResponse: HttpErrorResponse, isHandleError = true) => {
    if (!isHandleError) {
      return throwError(errResponse);
    }

    this.toastService.showError(errResponse.message);

    return of(errResponse);

  };
}
