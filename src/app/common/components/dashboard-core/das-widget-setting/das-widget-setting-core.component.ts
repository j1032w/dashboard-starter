import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DasBaseComponent } from '../../das-component-base.component';
import { DasDashboardCoreEventService } from '../services/das-dashboard-core-event.service';
import { DasWidgetOption } from '../services/das-widget-option';

@Component({
  selector: 'das-widget-setting-core',
  templateUrl: './das-widget-setting-core.component.html',
  styleUrls: ['./das-widget-setting-core.component.scss']
})
export class DasWidgetSettingCoreComponent extends DasBaseComponent implements OnInit {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();
  @Input() style: any = { width: '50rem', height: '20rem' };

  @Output() apply = new EventEmitter();
  @Output() showModal = new EventEmitter();

  @ContentChild('contentTemplate') contentTemplate: TemplateRef<any>;

  formGroup: FormGroup;

  constructor(
    protected readonly formBuilder: FormBuilder,
    protected readonly dashboardCoreService: DasDashboardCoreEventService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: [this.widgetOption.title]
    });
  }

  onHide() {
    this.widgetOption.isSettingModalVisible = false;
  }

  onShow() {
    this.showModal.emit();
  }

  applySetting() {
    this.widgetOption.title = this.formGroup.get('title')?.value;
    this.dashboardCoreService.emitWidgetSettingChanged(this.widgetOption);
    this.apply.emit();
    this.onHide();
  }
}
