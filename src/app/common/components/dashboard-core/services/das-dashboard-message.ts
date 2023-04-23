import { DasWidgetOption } from './das-widget-option';


export interface DasDashboardMessage {
  eventType: DasDashboardEventTypeEnum;
  widgetOption?: DasWidgetOption;
}


export enum DasDashboardEventTypeEnum {
  WidgetResized,
  WidgetSettingChanged,
  WidgetSettingModalVisibleChanged,
  Resized
}
