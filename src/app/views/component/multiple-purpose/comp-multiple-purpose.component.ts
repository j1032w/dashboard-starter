import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';

@Component({
    selector: 'das-comp-multiple-purpose',
    templateUrl: './comp-multiple-purpose.component.html',
    styleUrls: ['./comp-multiple-purpose.component.scss'],
    standalone: true,
    imports: [AvatarModule, BadgeModule, RatingModule, SelectButtonModule, TabViewModule]
})
export class CompMultiplePurposeComponent {
  selectButtonStateOptions = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];
}
