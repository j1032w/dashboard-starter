import { Component, Input, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs';

import { DasBaseComponent } from '../das-component-base.component';
import { DasHttpProgressStateEnum } from './services/das-http-progress-state.enum';
import { DasHttpStateService, IHttpState } from './services/das-http-state.service';
import { NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
    selector: 'das-spinner',
    templateUrl: './das-spinner.component.html',
    styleUrls: ['./das-spinner.component.scss'],
    standalone: true,
    imports: [NgIf, MatProgressSpinner]
})
export class DasSpinnerComponent extends DasBaseComponent implements OnInit {
  @Input() spinnerId: string;

  isLoading = false;

  constructor(private readonly httpStateService: DasHttpStateService) {
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
