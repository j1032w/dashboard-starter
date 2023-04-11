import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { DasComponentBase } from '../../../common/components/das-component-base.component';
import { DasWidgetOption } from '../../../common/components/dashbarod-core/services/das-widget-option';


@Component({
  selector: 'dv-demo-widget-setting',
  templateUrl: './dv-demo-widget-setting.component.html',
  styleUrls: ['./dv-demo-widget-setting.component.scss']
})
export class DvDemoWidgetSettingComponent extends DasComponentBase implements OnInit {
  @Input() widgetOption: DasWidgetOption;

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  @ViewChild('settingModal', { static: true }) settingModel: Dialog;

  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }


  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: [this.widgetOption.title]
    });

  }

  hide() {
    this.widgetOption.isSettingModalVisible = false;
    this.isVisibleChange.emit(false);
  }

  save() {
    this.widgetOption.title = this.formGroup.get('title')?.value;
    this.hide();
  }
}
