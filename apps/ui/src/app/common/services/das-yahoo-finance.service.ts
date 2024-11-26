import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class DasYahooFinanceService {
  private socket: any;

  constructor() {
    this.socket = io('/api');

    this.socket.on('connect_error', (err: any) => {
      console.log(err);
    });
  }
}
