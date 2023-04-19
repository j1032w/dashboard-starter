import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DasComponentBase } from '../../das-component-base.component';
import { DasWidgetOption } from './das-widget-option';

@Component({
  template: ''
})
export class DasWidgetSettingBase extends DasComponentBase implements OnInit {
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
