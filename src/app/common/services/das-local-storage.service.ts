import { Injectable } from '@angular/core';
import {AppConfig} from '../../app-config';



@Injectable({ providedIn: 'root' })
export class DasLocalStorageService {
  private storage: any;

  constructor(private readonly appConfig: AppConfig) {
    this.storage = localStorage;
  }

  readonly setItem = (key: string, data: any) => {
    const dataString = JSON.stringify(data);
    this.storage.setItem(this.getStorageKey(key), dataString);
  };

  readonly getItem = (key: string): any => {
    const dataString = this.storage.getItem(this.getStorageKey(key));
    return JSON.parse(dataString ?? '{}');
  };

  readonly removeItem = (key: string) => {
    this.storage.removeItem(this.getStorageKey(key));
  };

  private readonly getStorageKey = (key: string) => `${key}-${this.appConfig.version}`;
}
