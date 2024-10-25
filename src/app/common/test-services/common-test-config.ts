import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {BaseChartDirective} from 'ng2-charts';
import { DasCommonModule } from '../das-common.module';

// The compoonet use angular-resize-event needs the mock to pass the test
window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }));

const providers = [
  { provide: APP_BASE_HREF, useValue: '/' }
];

const imports = [
  BrowserAnimationsModule,
  BrowserModule,
  CommonModule,
  DasCommonModule,
  HttpClientModule,
  HttpClientTestingModule,
  RouterTestingModule.withRoutes([]),
  BaseChartDirective
];

export const CommonTestConfig = {
  imports,
  providers
};
