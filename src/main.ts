import '@angular/compiler';

import { enableProdMode } from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  provideCharts,
  withDefaultRegisterables
} from 'ng2-charts';
import {AppComponent} from './app/app.component';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
