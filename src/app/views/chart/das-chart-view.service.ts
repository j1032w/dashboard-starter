import { Injectable } from '@angular/core';

import sp500AnnualReturns from './mock-data/sp500-annual-returns.json';


@Injectable({ providedIn: 'root' })
export class DasChartViewService {



  set isTitleVisible(value: boolean) {
    this._isTitleVisible = value;
    this.title = value ? this.defaultTitle : '';
  }

  get isTitleVisible(): boolean {
    return this._isTitleVisible;
  }

  private _isTitleVisible = true;

  title = '';

  isLegendVisible = true;

  private readonly defaultTitle = 'S&P 500 Historical Annual Returns';

  constructor() {
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




