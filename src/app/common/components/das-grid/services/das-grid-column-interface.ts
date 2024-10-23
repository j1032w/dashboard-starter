export interface DasGridColumnInterface {
  caption: string;
  cellTemplate?: DasGridCellTemplateEnum;
  dataField: string;
  dataType: AgGridCellDataTypeEnum;
  width?: number;
  visible: boolean;
}


export enum AgGridCellDataTypeEnum {
  Text = 'text',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date'
}

export enum DasGridCellTemplateEnum {
  Currency = 'Currency',
  Date = 'Date',
  DecimalOptionalTwo = 'DecimalOptionalTwo',
  Integer = 'Integer',
  Percentage = 'Percentage'
}
