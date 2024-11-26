import { Component } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { CardModule } from 'primeng/card';
import { CompFloatingLabelFormComponent } from './floating-label-form/comp-floating-label-form.component';
import { CompFormHorizontalComponent } from './horizontal-form/comp-form-horizontal.component';

@Component({
    selector: 'das-comp-form',
    templateUrl: './comp-form.component.html',
    styleUrls: ['./comp-form.component.scss'],
    standalone: true,
    imports: [NgScrollbar, CardModule, CompFloatingLabelFormComponent, CompFormHorizontalComponent]
})
export class CompFormComponent {}
