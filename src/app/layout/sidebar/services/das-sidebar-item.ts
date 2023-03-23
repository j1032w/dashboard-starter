export class DasSidebarItem {
  text = '';
  icon = '';
  selected = false;
  path = '';
  childItems: DasSidebarItem [] = []

  constructor(data?: Partial<DasSidebarItem>) {
    Object.assign(this, data);
  }
}
