import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DasBaseComponent } from '../../das-component-base.component';
import { DasWidgetOption } from './das-widget-option';

@Component({
  template: ''
})
export class DasWidgetSettingBaseComponent extends DasBaseComponent implements OnInit {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();

  formGroup: FormGroup;

  constructor(protected readonly formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: [this.widgetOption.title]
    });
  }
}
