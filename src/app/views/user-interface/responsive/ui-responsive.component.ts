import { Component } from '@angular/core';

@Component({
  selector: 'das-ui-responsive',
  templateUrl: './ui-responsive.component.html',
  styleUrls: ['./ui-responsive.component.scss']
})
export class UiResponsiveComponent {

  visible = true;

  colClass = 'col-lg-12';

  dialogSize = 'Large';

  header = 'large';

  width='1200px';
  constructor() {
    this.setSize('large');
  }

  setSize(size: string) {
    switch (size) {
      case 'small':
        this.colClass = 'col-12';
        this.header = 'Small';
        this.width = '400px';
        break;

      case 'medium':
        this.colClass = 'col-lg-6';
        this.header = 'Medium';
        this.width = '700px';
        break;

      default:
        this.colClass = 'col-xl-4';
        this.header = 'Large';
        this.width = '900px';
    }

    this.visible = true;


  }

}
