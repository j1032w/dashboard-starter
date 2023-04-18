export interface DasGridColumnInterface {
  dataField: string;
  caption: string;
  width?: number;
  dataType: DasGridColumnTypeEnum;

}


export enum DasGridColumnTypeEnum {
  String = 'string',
  Number = 'number',
  Date = 'date',

}
