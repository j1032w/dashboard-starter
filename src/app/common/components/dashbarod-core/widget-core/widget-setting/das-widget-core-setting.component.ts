import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { DasComponentBase } from '../../../das-component-base.component';
import { DasDashboardCoreService } from '../../services/das-dashboard-core.service';
import { DasWidgetOption } from '../../services/das-widget-option';


@Component({
  selector: 'das-dashboard-widget-setting',
  templateUrl: './das-widget-core-setting.component.html',
  styleUrls: ['./das-widget-core-setting.component.scss']
})
export class DasWidgetCoreSettingComponent extends DasComponentBase implements OnInit {
  @Input() widgetOption: DasWidgetOption;

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  @ViewChild('settingModal', { static: true }) settingModel: Dialog;

  formGroup: FormGroup;

  constructor(public readonly dashboardService: DasDashboardCoreService,
  private readonly formBuilder:FormBuilder) {
    super();
  }


  ngOnInit() {
    this.formGroup=this.formBuilder.group({
      title: [this.widgetOption.title]
    });

  }

  hide() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  save(){
    this.widgetOption.title = this.formGroup.get('title')?.value;
    this.hide();
  }
}
