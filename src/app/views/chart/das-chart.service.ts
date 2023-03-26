import { Injectable } from '@angular/core';

import sp500AnnualReturns from './mock-data/sp500-annual-returns.json';


@Injectable({providedIn: 'root'})
export class DasChartService {
  getSp500Data(): Sp500AnnualHistory[] {
    const data:Sp500AnnualHistory[] = [];
    for (const sp500AnnualReturn of sp500AnnualReturns.data) {
      data.push({
        year: sp500AnnualReturn.year,
        averageClosingPrice: sp500AnnualReturn.averageClosingPrice,
        annualChangePercent: sp500AnnualReturn.annualChange
      })
    }

    return data;
  }
}


export interface Sp500AnnualHistory {
  year: string;

  averageClosingPrice: number;

  annualChangePercent: number;
}




