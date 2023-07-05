import { Component } from '@angular/core';

@Component({
  selector: 'das-comp-multiple-purpose',
  templateUrl: './comp-multiple-purpose.component.html',
  styleUrls: ['./comp-multiple-purpose.component.scss']
})
export class CompMultiplePurposeComponent {
  selectButtonStateOptions = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];
}
