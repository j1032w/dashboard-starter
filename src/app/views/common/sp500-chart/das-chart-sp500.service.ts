import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BehaviorSubject, Observable } from 'rxjs';
import { DasServiceBaes } from '../../../common/services/das-service-baes';

import sp500AnnualReturns from './mock-data/sp500-annual-returns.json';

@Injectable({ providedIn: 'root' })
export class DasChartSp500Service extends DasServiceBaes {
  private chartOptionsSubject: BehaviorSubject<ChartConfiguration['options']>;
  public chartOptions$: Observable<ChartConfiguration['options']>;


  public setTitleVisible(value: boolean): void {
    this.isTitleVisible = value;
    this.optionData.plugins.legend.title.display = value;
    this.chartOptionsSubject.next(this.optionData);
  }


  set isTitleVisible(value: boolean) {
    this._isTitleVisible = value;
    //this.optionData.plugins.title.display = value;
  }

  get isTitleVisible(): boolean {
    return this._isTitleVisible;
  }

  private _isTitleVisible = true;

  title = '';

  isLegendVisible = true;

  private optionData = {
    responsive: true,
    plugins: {
      legend: {
        title: {
          display: true,
          text: 'S&P 500 Historical Annual Returns',
          font: {
            size: 24
          }
        },

        labels: {
          usePointStyle: true,
          font: {
            size: 14
          }
        }
      },

      datalabels: {
        display: false,
      },
    },

    scales: {
      yAxisLeft: {
        type: 'linear' as const,
        position: 'left' as const,
      },

      yAxisRight: {
        type: 'linear' as const,
        position: 'right' as const,
        max: 100,
        grid: {
          display: false,
        },
      }
    }
  };

  public chartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [
          1139.97, 1267.64, 1379.61, 1643.8, 1931.38, 2061.07, 2094.65, 2449.08, 2746.21, 2913.36, 3217.86, 4273.41,
          4097.49, 3997.67
        ],
        label: 'Average Closing',
        type: 'bar',
        yAxisID: 'yAxisLeft'
      },
      {
        data: [12.78, 0.01, 13.41, 29.6, 11.39, -0.73, 9.54, 19.42, -6.24, 28.88, 16.26, 26.89, -19.44, 3.42],
        label: 'Annual Change Percent',
        type: 'line',
        yAxisID: 'yAxisRight'
      }
    ],
    labels: [
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023'
    ]
  };


  constructor() {
    super();

    this.chartOptionsSubject = new BehaviorSubject<ChartConfiguration['options']>(this.optionData);
    this.chartOptions$ = this.chartOptionsSubject.asObservable();
    this.isTitleVisible = true;
  }

  getSp500Data(): Sp500AnnualHistory[] {
    const data: Sp500AnnualHistory[] = [];
    for (const sp500AnnualReturn of sp500AnnualReturns.data) {
      data.push({
        year: sp500AnnualReturn.year,
        averageClosingPrice: sp500AnnualReturn.averageClosingPrice,
        annualChangePercent: sp500AnnualReturn.annualChange
      });
    }

    return data;
  }
}

export interface Sp500AnnualHistory {
  year: string;

  averageClosingPrice: number;

  annualChangePercent: number;
}
