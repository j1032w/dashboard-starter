import { Component, Input, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs';

import { DasBaseComponent } from '../das-component-base.component';
import { DasHttpProgressStateEnum } from './services/das-http-progress-state.enum';
import { DasHttpStateService, IHttpState } from './services/das-http-state.service';

@Component({
  selector: 'das-spinner',
  templateUrl: './das-spinner.component.html',
  styleUrls: ['./das-spinner.component.scss']
})
export class DasSpinnerComponent extends DasBaseComponent implements OnInit {
  @Input() spinnerId: string;

  isLoading = false;

  constructor(private httpStateService: DasHttpStateService) {
    super();
  }

  ngOnInit() {
    this.httpStateService.state$
      .pipe(
        takeUntil(this.destroyed$),
        filter(httpState => httpState.spinnerId === this.spinnerId)
      )
      .subscribe((progress: IHttpState) => {
        this.isLoading = progress.state === DasHttpProgressStateEnum.start;
      });
  }
}
