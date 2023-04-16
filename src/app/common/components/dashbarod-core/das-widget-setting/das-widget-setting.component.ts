import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';
import { DasWidgetOption } from '../services/das-widget-option';



@Component({
  selector: 'das-widget-setting',
  templateUrl: './das-widget-setting.component.html',
  styleUrls: ['./das-widget-setting.component.scss']
})
export class DasWidgetSettingComponent implements OnInit {
  @Input() widgetOption: DasWidgetOption;

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  @ViewChild('settingModal', { static: true }) settingModel: Dialog;

  formGroup: FormGroup;

  constructor(protected readonly formBuilder: FormBuilder,
              protected readonly dashboardCoreService:DasDashboardCoreService) {
    this.formGroup = this.formBuilder.group({
      title: ['']
    });
  }


  ngOnInit() {
    this.formGroup.patchValue({'title': this.widgetOption.title});

  }

  hide() {
    this.widgetOption.isSettingModalVisible = false;
    this.isVisibleChange.emit(false);
  }

  apply() {
    this.widgetOption.title = this.formGroup.get('title')?.value;
    this.dashboardCoreService.emitWidgetSettingChanged(this.widgetOption);
    this.hide();
  }
}
