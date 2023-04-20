import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, takeUntil } from 'rxjs';
import { DasComponentBase } from '../../das-component-base.component';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';
import { DasDashboardEventInterface, DasDashboardEventTypeEnum } from '../services/das-dashboard-event-interface';
import { DasWidgetOption } from '../services/das-widget-option';


@Component({
  selector: 'das-widget-setting-core',
  templateUrl: './das-widget-setting-core.component.html',
  styleUrls: ['./das-widget-setting-core.component.scss']
})
export class DasWidgetSettingCoreComponent extends DasComponentBase implements OnInit {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();
  @Input() style: any = { width: '50rem', height: '20rem' };

  @Output() apply = new EventEmitter();
  @Output() show   = new EventEmitter();

  @ContentChild('contentTemplate') contentTemplate: TemplateRef<any>;

  formGroup: FormGroup;

  constructor(
    protected readonly formBuilder: FormBuilder,
    protected readonly dashboardCoreService: DasDashboardCoreService
  ) {
    super();

  }


  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: [this.widgetOption.title]
    });


    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((data: DasDashboardEventInterface) =>
          data.widgetOption.id === this.widgetOption.id &&
          data.eventType === DasDashboardEventTypeEnum.WidgetSettingModalVisibleChanged
        )
      )
      .subscribe((data) => {
        this.onModelShow(data.widgetOption.isSettingModalVisible);
      });

  }

  onHide() {
    this.widgetOption.isSettingModalVisible = false;
  }

  onShow() {
    this.show.emit();
  }

  applySetting() {
    this.widgetOption.title = this.formGroup.get('title')?.value;
    this.dashboardCoreService.emitWidgetSettingChanged(this.widgetOption);
    this.apply.emit();
    this.onHide();
  }

  // will be overridden by child
  protected readonly onModelShow = (_isVisible: boolean) => {

  };


}
