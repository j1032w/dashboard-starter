import { Component } from '@angular/core';

@Component({
  selector: 'das-comp-base',
  templateUrl: './comp-base.component.html',
  styleUrls: ['./comp-base.component.scss']
})
export class CompBaseComponent {

  selectButtonStateOptions = [{ label: 'Off', value: 'off' }, { label: 'On', value: 'on' }];


}
