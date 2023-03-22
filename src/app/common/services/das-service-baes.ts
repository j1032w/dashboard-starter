import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';


// Though the abstract class shouldnf't be injectable
// but have to add an Angular decorator, otherwise ng cli raised an error:
// error NG2007: Class is using Angular features but is not decorated. Please add an explicit Angular decorator.
@Injectable()
export abstract class DasServiceBaes implements OnDestroy{
  protected readonly ngUnsubscribe = new Subject();

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

}

