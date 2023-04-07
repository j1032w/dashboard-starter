export class DasDashboardEvent {
  eventType: DasDashboardEventTypeEnum;
  componentClass: string;
}


export enum DasDashboardEventTypeEnum {
  Flip,
  Refresh,
  Resize

}
