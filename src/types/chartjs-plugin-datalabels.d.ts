import {ChartType} from 'chart.js';
import {Options} from 'chartjs-plugin-datalabels/types/options';


declare module 'chart.js' {
  interface PluginOptionsByType<TType extends ChartType = ChartType> {
    datalabels?: Options | undefined; // You can specify a more precise type if available
  }
}
