import { DasWidgetOption } from './das-widget-option';


export interface DasDashboardEventInterface {
  eventType: DasDashboardEventTypeEnum;
  widgetOption: DasWidgetOption;
}


export enum DasDashboardEventTypeEnum {
  WidgetResized
}
