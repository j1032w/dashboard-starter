import { Options } from 'chartjs-plugin-datalabels/types/options';

declare module 'chart.js' {
  interface PluginOptionsByType {
    datalabels?: Options | undefined; // You can specify a more precise type if available
  }
}
