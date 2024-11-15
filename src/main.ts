import '@angular/compiler';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { DasSpinnerInterceptorService } from './app/common/components/das-spinner/services/das-spinner-interceptor.service';
import { DasCommonModule } from './app/common/das-common.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,

      DasCommonModule
    ),
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
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch(err => console.error(err));
