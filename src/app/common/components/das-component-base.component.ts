import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  template: ''
})
export abstract class DasComponentBase implements OnDestroy{
  protected readonly ngUnsubscribe$ = new Subject();

  ngOnDestroy() {
    this.ngUnsubscribe$.next(null);
    this.ngUnsubscribe$.complete();
  }

}
