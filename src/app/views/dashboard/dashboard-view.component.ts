import { Component, OnInit } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { DasDashboardCoreService } from '../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { DasWidgetOption } from '../../common/components/dashbarod-core/services/das-widget-option';
import { DvDemoWidgetComponent } from './demo-widget/dv-demo-widget.component';
import { DvSp500WidgetComponent } from './sp500-widget/dv-sp500-widget.component';


@Component({
  selector: 'das-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
  providers: [DasDashboardCoreService]
})
export class DashboardViewComponent extends DasComponentBase implements OnInit {

  defaultWidgetOptions: DasWidgetOption[] = [];


  constructor(private readonly dasDashboardService: DasDashboardCoreService
  ) {
    super();

    dasDashboardService.widgetMap.set('DvSp500WidgetComponent', DvSp500WidgetComponent);
    dasDashboardService.widgetMap.set('DvDemoWidgetComponent', DvDemoWidgetComponent);


    const widgetData = [{
      'originalRows': 8,
      'isSettingModalVisible': false,
      'cols': 5,
      'rows': 7,
      'x': 0,
      'y': 0,
      'id': 11,
      'widgetClassName': 'DvSp500WidgetComponent',
      'title': 'Sp500 Annual Returns',
      'isMinimized': false,
      'isShowRefreshButton': false,
      'isShowFlipButton': false,
      'isFrontShown': true
    },
      {
        'originalRows': 4,
        'isSettingModalVisible': false,
        'cols': 7,
        'rows': 9,
        'x': 5,
        'y': 0,
        'id': 1,
        'widgetClassName': 'DvDemoWidgetComponent',
        'title': 'Id: 1',
        'isMinimized': false,
        'isShowRefreshButton': false,
        'isShowFlipButton': false,
        'isFrontShown': true
      },
      {
        'originalRows': 4,
        'isSettingModalVisible': false,
        'cols': 3,
        'rows': 7,
        'x': 0,
        'y': 7,
        'id': 4,
        'widgetClassName': 'DvDemoWidgetComponent',
        'title': 'Id: 4',
        'isMinimized': false,
        'isShowRefreshButton': false,
        'isShowFlipButton': false,
        'isFrontShown': true
      },
      {
        'originalRows': 4,
        'isSettingModalVisible': false,
        'cols': 7,
        'rows': 5,
        'x': 5,
        'y': 9,
        'id': 6,
        'widgetClassName': 'DvDemoWidgetComponent',
        'title': 'Id: 6',
        'isMinimized': false,
        'isShowRefreshButton': false,
        'isShowFlipButton': false,
        'isFrontShown': true
      },
      {
        'originalRows': 4,
        'isSettingModalVisible': false,
        'cols': 2,
        'rows': 7,
        'x': 3,
        'y': 7,
        'id': 7,
        'widgetClassName': 'DvDemoWidgetComponent',
        'title': 'Id: 7',
        'isMinimized': false,
        'isShowRefreshButton': false,
        'isShowFlipButton': false,
        'isFrontShown': true
      }];




    for (const widgetDatum of widgetData) {
      this.defaultWidgetOptions.push(new DasWidgetOption(widgetDatum));
    }

  }


  ngOnInit() {

  }

}




