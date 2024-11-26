import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';




@Injectable({ providedIn: 'root' })
export class DasConfig {
  version: string;
  dasWebApi: string;

  localStorageWidgetOptionsKey = 'dasWidgetOptions';

  constructor() {
    this.version = `${environment.dasOptions.version}`;
    this.dasWebApi = `${environment.dasOptions.dasWebApi}`;
  }
}
