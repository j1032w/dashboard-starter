import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DevExtremeModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';


const providers: any[] = [
  { provide: APP_BASE_HREF, useValue: '/' }

];

const imports: any[] = [
  BrowserModule,
  CommonModule,
  DevExtremeModule,
  DxChartModule,
  DxDataGridModule,
  HttpClientModule,
  HttpClientTestingModule,

  RouterTestingModule.withRoutes([])
];

export const CommonTestConfig = {
  imports,
  providers
};
