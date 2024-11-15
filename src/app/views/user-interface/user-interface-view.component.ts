import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'das-user-interface-view',
    templateUrl: './user-interface-view.component.html',
    styleUrls: ['./user-interface-view.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class UserInterfaceViewComponent {}
