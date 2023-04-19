import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, takeUntil } from 'rxjs';
import { DasComponentBase } from '../../das-component-base.component';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';
import { DasDashboardEventInterface, DasDashboardEventTypeEnum } from '../services/das-dashboard-event-interface';
import { DasWidgetOption } from '../services/das-widget-option';


@Component({
  selector: 'das-widget-setting',
  templateUrl: './das-widget-setting-core.component.html',
  styleUrls: ['./das-widget-setting-core.component.scss']
})
export class DasWidgetSettingCoreComponent extends DasComponentBase implements OnInit {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();

  formGroup: FormGroup;

  constructor(
    protected readonly formBuilder: FormBuilder,
    protected readonly dashboardCoreService: DasDashboardCoreService
  ) {
    super();
    this.formGroup = this.formBuilder.group({
      title: ['']
    });
  }


  ngOnInit() {
    this.formGroup.patchValue({ 'title': this.widgetOption.title });

    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((data: DasDashboardEventInterface) =>
          data.widgetOption.id === this.widgetOption.id &&
          data.eventType === DasDashboardEventTypeEnum.WidgetSettingModalVisibleChanged
        )
      )
      .subscribe((data) => {
        this.settingModelVisibleChange(data.widgetOption.isSettingModalVisible);
      });

  }

  hide() {
    this.widgetOption.isSettingModalVisible = false;
    this.dashboardCoreService.emitWidgetSettingChanged(this.widgetOption);
  }

  apply() {
    this.widgetOption.title = this.formGroup.get('title')?.value;
    this.dashboardCoreService.emitWidgetSettingChanged(this.widgetOption);
    this.hide();
  }

  // will be overridden by child
  protected readonly settingModelVisibleChange = (_isVisible: boolean) => {

  };


}
