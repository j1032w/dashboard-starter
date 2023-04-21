import { Component } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { DasDashboardCoreService } from '../../common/components/dashboard-core/services/das-dashboard-core.service';
import { DasWidgetOption } from '../../common/components/dashboard-core/services/das-widget-option';
import { DvDemoAWidgetComponent } from './demo-widget-a/dv-demo-a-widget.component';
import { DvDemoBWidgetComponent } from './demo-widget-b/dv-demo-b-widget.component';
import { DvDemoCWidgetComponent } from './demo-widget-c/dv-demo-c-widget.component';
import { DvDemoDWidgetComponent } from './demo-widget-d/dv-demo-d-widget.component';
import { DvHousingMarketWidgetComponent } from './housing-market-widget/dv-housing-market-widget.component';
import { DvLocWidgetComponent } from './line-of-code-widget/dv-loc-widget.component';
import { DvSp500WidgetComponent } from './sp500-widget/dv-sp500-widget.component';


@Component({
  selector: 'das-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
  providers: [DasDashboardCoreService]
})
export class DashboardViewComponent extends DasComponentBase {

  defaultWidgetOptions: DasWidgetOption[] = [];


  constructor(private readonly dasDashboardService: DasDashboardCoreService
  ) {
    super();

    dasDashboardService.widgetMap.set(
      'DvHousingMarketWidgetComponent',
      {
        name: 'Housing Market',
        type: DvHousingMarketWidgetComponent,
        cols: 4,
        rows: 9

      }
    );

    dasDashboardService.widgetMap.set(
      'DvSp500WidgetComponent',
      {
        name: 'Sp500 Annual Returns',
        type: DvSp500WidgetComponent,
        cols: 5,
        rows: 7
      }
    );

    dasDashboardService.widgetMap.set(
      'DvLocWidgetComponent',
      {
        name: 'Dashboard starter UI LOC',
        type: DvLocWidgetComponent,
        cols: 3,
        rows: 5,
        isShowFlipButton: false
      }
    );

    dasDashboardService.widgetMap.set(
      'DvDemoAWidgetComponent',
      {
        name: 'Widget A',
        type: DvDemoAWidgetComponent,
        cols: 3,
        rows: 5
      }
    );

    dasDashboardService.widgetMap.set(
      'DvDemoBWidgetComponent',
      {
        name: 'Widget B',
        type: DvDemoBWidgetComponent,
        cols: 3,
        rows: 5
      }
    );

    dasDashboardService.widgetMap.set(
      'DvDemoCWidgetComponent',
      {
        name: 'Widget C',
        type: DvDemoCWidgetComponent,
        cols: 3,
        rows: 5
      }
    );
    dasDashboardService.widgetMap.set(
      'DvDemoDWidgetComponent',
      {
        name: 'Widget D',
        type: DvDemoDWidgetComponent,
        cols: 3,
        rows: 5
      }
    );


    const widgetOptionData = [{
      'hasContent': true,
      'originalRows': 8,
      'isSettingModalVisible': false,
      'title': 'Sp500 Annual Returns',
      'cols': 5,
      'rows': 8,
      'x': 4,
      'y': 0,
      'id': 0,
      'widgetClassName': 'DvSp500WidgetComponent',
      'settingData': { 'isTitleVisible': false },
      'isMinimized': false,
      'isFrontShown': true
    },
      {
      'hasContent': true,
      'originalRows': 5,
      'isSettingModalVisible': false,
      'title': 'Widget A',
      'cols': 2,
      'rows': 5,
      'x': 0,
      'y': 8,
      'id': 1,
      'widgetClassName': 'DvDemoAWidgetComponent',
      'settingData': {},
      'isMinimized': false,
      'isFrontShown': true
    },
      {
      'hasContent': true,
      'originalRows': 7,
      'isSettingModalVisible': false,
      'title': 'Widget C',
      'cols': 3,
      'rows': 6,
      'x': 9,
      'y': 7,
      'id': 4,
      'widgetClassName': 'DvDemoCWidgetComponent',
      'settingData': {},
      'isMinimized': false,
      'isFrontShown': true
    },
      {
      'hasContent': true,
      'originalRows': 5,
      'isSettingModalVisible': false,
      'title': 'Widget A',
      'cols': 3,
      'rows': 5,
      'x': 2,
      'y': 8,
      'id': 5,
      'widgetClassName': 'DvDemoAWidgetComponent',
      'settingData': {},
      'isMinimized': false,
      'isFrontShown': true
    },
      {
      'hasContent': true,
      'originalRows': 5,
      'isSettingModalVisible': false,
      'title': 'Dashboard starter UI LOC',
      'cols': 3,
      'rows': 7,
      'x': 9,
      'y': 0,
      'id': 7,
      'widgetClassName': 'DvLocWidgetComponent',
      'isShowFlipButton': false,
      'settingData': {},
      'isMinimized': false,
      'isFrontShown': true
    },
      {
      'hasContent': true,
      'originalRows': 9,
      'isSettingModalVisible': false,
      'title': 'Housing Market',
      'cols': 4,
      'rows': 8,
      'x': 0,
      'y': 0,
      'id': 8,
      'widgetClassName': 'DvDemoBWidgetComponent',
      'settingData': {},
      'isMinimized': false,
      'isFrontShown': true
    },
      {
      'hasContent': true,
      'originalRows': 5,
      'isSettingModalVisible': false,
      'title': 'Widget A',
      'cols': 4,
      'rows': 5,
      'x': 5,
      'y': 8,
      'id': 9,
      'widgetClassName': 'DvDemoAWidgetComponent',
      'settingData': {},
      'isMinimized': false,


      'isFrontShown': true
    }];


    for (let i = 0; i < widgetOptionData.length; i++) {
      const widgetOption = new DasWidgetOption(widgetOptionData[i]);
      widgetOption.id = i;
      this.defaultWidgetOptions.push(widgetOption);
    }

  }


}




