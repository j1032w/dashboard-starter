export enum SidebarItemTypeEnum {
  Default,

  WithChildrenItems,
  WithChildTemplate
}


export class DasSidebarItem {
  text = '';
  icon = '';
  selected = false;
  path: string|null = null;
  childItems: DasSidebarItem [] = [];
  childTemplate: string;

  expanded = false;

  type: SidebarItemTypeEnum = SidebarItemTypeEnum.Default;

  constructor(data?: Partial<DasSidebarItem>) {
    Object.assign(this, data);
  }
}
