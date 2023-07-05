import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { debounceTime, filter, Subject, takeUntil } from 'rxjs';

import { DasBaseComponent } from '../das-component-base.component';

@Component({
  selector: 'das-auto-size',
  templateUrl: './das-auto-size.component.html',
  styleUrls: ['./das-auto-size.component.scss']
})
export class DasAutoSizeComponent extends DasBaseComponent implements OnInit {
  @Output() resized = new EventEmitter<ElementSizeInterface>();

  height = '300px';
  width = '300px';

  isContentHidden = false;

  private resizedSubject$ = new Subject<ResizedEvent>();

  constructor(private readonly elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    this.resizedSubject$
      .pipe(
        takeUntil(this.destroyed$),
        debounceTime(100),
        filter($event => !!$event.newRect.width && !!$event.newRect.height)
      )
      .subscribe(() => {
        this.isContentHidden = true;

        setTimeout(() => {
          if (this.elementRef.nativeElement.clientHeight && this.elementRef.nativeElement.clientWidth) {
            this.height = `${this.elementRef.nativeElement.clientHeight - 1}px`;
            this.width = `${this.elementRef.nativeElement.clientWidth - 1}px`;

            this.resized.emit({
              height: this.elementRef.nativeElement.clientHeight - 2,
              width: this.elementRef.nativeElement.clientWidth - 2
            });
          }

          this.isContentHidden = false;
        });
      });
  }

  onResized($event: ResizedEvent) {
    this.resizedSubject$.next($event);
  }
}

export interface ElementSizeInterface {
  height: number;
  width: number;
}
