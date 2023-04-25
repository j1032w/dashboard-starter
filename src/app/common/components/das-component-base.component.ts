import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  template: ''
})
export abstract class DasComponentBase implements OnDestroy{
  protected readonly destroyed$ = new Subject();

  ngOnDestroy() {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

}
