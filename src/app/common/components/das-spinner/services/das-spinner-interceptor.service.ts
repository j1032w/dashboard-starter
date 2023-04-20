import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { DasHttpProgressStateEnum } from './das-http-progress-state.enum';
import { DAS_SPINNER_KEY, DasHttpStateService } from './das-http-state.service';


// https://dev.to/elasticrash/angular-display-a-spinner-on-any-component-that-does-an-http-request-2gm2

@Injectable({ providedIn: 'root' })
export class DasSpinnerInterceptorService implements HttpInterceptor {

  private exceptions: string[] = [
    'login'
  ];

  constructor(private readonly httpStateService: DasHttpStateService) {
  }

  /**
   * Intercepts all requests
   * There is an exception list for specific URL patterns that we don't want the application to act
   * automatically
   *
   * The interceptor also reports back to the httpStateService when a certain requests started and ended
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.exceptions.every((term: string) => request.url.indexOf(term) === -1)) {
      return next.handle(request);
    }

    const spinnerId = request.headers.get(DAS_SPINNER_KEY);
    if (!spinnerId) {
      return next.handle(request);
    }

    // start the spinner
    this.httpStateService.state$.next({
      startTime: Date.now(),
      spinnerId,
      state: DasHttpProgressStateEnum.start
    });


    const headers = request.headers.delete(DAS_SPINNER_KEY);
    const newRequest = request.clone({ headers });

    return next.handle(newRequest)
      .pipe(
        delay(1000),
        finalize(() => {
        this.httpStateService.state$.next({
          spinnerId,
          state: DasHttpProgressStateEnum.end
        });
      }));
  }
}
