export interface DasGridColumnInterface {
  caption: string;
  cellTemplate?: DasGridCellTemplateEnum;
  dataField: string;
  dataType: DasGridColumnTypeEnum;
  width?: number;
  visible?: boolean;

}

// dxDataGrid requires lower case
export enum DasGridColumnTypeEnum {
  String = 'string',
  Number = 'number',
  Date = 'date',

}


export enum DasGridCellTemplateEnum{
  Currency = 'Currency',
  Date = 'Date',
  DecimalOptionalTwo= 'DecimalOptionalTwo',
  Integer = 'Integer',
  Percentage = 'Percentage',
  String = 'String',

}
