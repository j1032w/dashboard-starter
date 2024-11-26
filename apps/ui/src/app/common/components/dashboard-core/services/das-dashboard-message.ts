import { DasWidgetOption } from './das-widget-option';

export type DasDashboardMessage = {
  eventType: DasDashboardEventTypeEnum;
  widgetOption?: DasWidgetOption;
}

export enum DasDashboardEventTypeEnum {
  WidgetResized,
  WidgetSettingChanged,
  Resized
}
