import { inject, Injectable } from '@angular/core';

@Injectable()
export class LocalStorageServiceMock {
  store:any = {};

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value:string) {
    this.store[key] = value;
  }

  removeItem(key:string) {
    delete this.store[key];
  }
}
