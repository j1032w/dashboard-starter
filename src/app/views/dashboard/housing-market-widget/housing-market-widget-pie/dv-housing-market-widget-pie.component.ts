import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DxPieChartComponent } from 'devextreme-angular';
import { DasWidgetContentBase } from '../../../../common/components/dashbarod-core/services/das-widget-content-base';
import { BuildingTypePercentageInterface } from '../services/dv-housing-market.service';

@Component({
  selector: 'das-dv-housing-market-widget-pie',
  templateUrl: './dv-housing-market-widget-pie.component.html',
  styleUrls: ['./dv-housing-market-widget-pie.component.scss']
})
export class DvHousingMarketWidgetPieComponent extends DasWidgetContentBase implements OnInit{
  @ViewChild('pieChart') pieChartComponent: DxPieChartComponent;


  @Input() dataSource:BuildingTypePercentageInterface[] = [];

  title = 'Housing Market by Building Type';

  ngOnInit() {
    this.repaintComponent = this.pieChartComponent.instance.render;
  }

  customizeLabel(arg: any) {
    return `${arg.argument} ${(arg.percent * 100).toFixed(1)}%`;
  }
}
