export class DasSidebarItem {
  text = '';
  icon = '';
  selected = false;
  path = '';
  childItems: DasSidebarItem [] = [];
  childTemplate: string;

  expanded = false;


  constructor(data?: Partial<DasSidebarItem>) {
    Object.assign(this, data);
  }
}
