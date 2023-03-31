import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({providedIn: 'root'})
export class DasYahooFinanceService {

  private socket: any;

  constructor() {
    this.socket = io('/api');

    this.socket.on("connect_error", (err:any) => {
      console.log(err);
    });
  }


  subscribeToStock(symbol: string): Observable<any> {
    const channel = `ticker/${symbol}`;
    this.socket.emit('subscribe', channel);

    return new Observable((observer) => {
      this.socket.on(channel, (data: any) => {
        observer.next(data);
      });
    });
  }
}
