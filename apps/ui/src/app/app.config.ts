import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import {provideToastr} from 'ngx-toastr';
import { appRoutes } from './app.routes';
import { DasSpinnerInterceptorService } from './common/components/das-spinner/services/das-spinner-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DasSpinnerInterceptorService,
      multi: true
    },
    provideCharts(withDefaultRegisterables(DataLabelsPlugin), {
      defaults: {
        // For consistent rendering across CI and local envs
        font: { family: 'Arial' }
      }
    }),

    provideToastr({
      closeButton: true,
      newestOnTop: false,
      positionClass: 'toast-bottom-center',
      progressBar: true,
      tapToDismiss: false,
      timeOut: 4000,
    }),

    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(appRoutes)
  ]
};


