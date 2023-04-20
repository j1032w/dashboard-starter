import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DasHttpProgressStateEnum } from './das-http-progress-state.enum';


export const DAS_SPINNER_KEY = 'das-spinner-key';


@Injectable({ providedIn: 'root' })
export class DasHttpStateService {
  state$ = new BehaviorSubject<IHttpState>({} as IHttpState);
}


export interface IHttpState {
  startTime?: number;
  spinnerId: string;
  state: DasHttpProgressStateEnum;
}
