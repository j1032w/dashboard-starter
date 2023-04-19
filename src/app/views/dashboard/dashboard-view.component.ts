import { Component } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { DasDashboardCoreService } from '../../common/components/dashboard-core/services/das-dashboard-core.service';
import { DasWidgetOption } from '../../common/components/dashboard-core/services/das-widget-option';
import { DvDemoAWidgetComponent } from './demo-widget-a/dv-demo-a-widget.component';
import { DvDemoBWidgetComponent } from './demo-widget-b/dv-demo-b-widget.component';
import { DvDemoCWidgetComponent } from './demo-widget-c/dv-demo-c-widget.component';
import { DvDemoDWidgetComponent } from './demo-widget-d/dv-demo-d-widget.component';
import { DvHousingMarketWidgetComponent } from './housing-market-widget/dv-housing-market-widget.component';
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
      'originalRows': 8,
      'isSettingModalVisible': false,
      'cols': 5,
      'rows': 7,
      'x': 0,
      'y': 0,
      'widgetClassName': 'DvSp500WidgetComponent',
      'title': 'Sp500 Annual Returns',
      'isMinimized': false,
      'isShowRefreshButton': false,
      'isShowFlipButton': false,
      'isFrontShown': true,
      settingData: { isTitleVisible: false }
    },
      {
        'originalRows': 4,
        'isSettingModalVisible': false,
        'cols': 7,
        'rows': 9,
        'x': 5,
        'y': 0,
        'widgetClassName': 'DvDemoAWidgetComponent',
        'title': 'Widget A',
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
        'widgetClassName': 'DvDemoBWidgetComponent',
        'title': 'Widget B',
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
        'widgetClassName': 'DvDemoCWidgetComponent',
        'title': 'Demo C',
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
        'widgetClassName': 'DvDemoDWidgetComponent',
        'title': 'Demo D',
        'isMinimized': false,
        'isShowRefreshButton': false,
        'isShowFlipButton': false,
        'isFrontShown': true
      }];


    for (let i = 0; i < widgetOptionData.length; i++) {
      const widgetOption = new DasWidgetOption(widgetOptionData[i]);
      widgetOption.id = i;
      this.defaultWidgetOptions.push(widgetOption);
    }

  }


}




