import { Component, ElementRef } from '@angular/core';

@Component({
  template: ''
})
export class DasWidgetContentBase {

  constructor(protected readonly elementRef: ElementRef) {

  }

  readonly repaint = () => {
    setTimeout(() => {
      // check if the element is visible
      if (this.elementRef.nativeElement.offsetParent !== null) {
        this.repaintComponent();
      }
    });
  };

  protected repaintComponent = () => {

  };

}
