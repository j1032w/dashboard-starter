import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DasConfig {
  version: string;
  dasDataApi: string;

  localStorageWidgetOptionsKey = 'dasWidgetOptions';

  constructor() {
    this.version = `${environment.dasOptions.version}`;
    this.dasDataApi = `${environment.dasOptions.dasDataApi}`;
  }
}
