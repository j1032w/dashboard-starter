import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// Though the abstract class shouldn't be injectable
// but the Angular decorator has to be here, otherwise ng cli raised an error:
// error NG2007: Class is using Angular features but is not decorated. Please add an explicit Angular decorator.
@Injectable()
export abstract class DasServiceBaes implements OnDestroy {
  protected readonly destroyed$ = new Subject();

  ngOnDestroy() {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
