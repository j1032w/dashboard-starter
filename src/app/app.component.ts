import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  username = '';

  @Input() title = '';



  constructor() {

  }

  resetUsername($event: Event) {
    this.username = 'abc';
  }
}
