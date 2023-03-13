export class DasSidebarItem {
  text = '';
  icon = '';
  selected = false;
  url = '';
  subItems: DasSidebarItem [] = []

  constructor(data?: Partial<DasSidebarItem>) {
    Object.assign(this, data);
  }
}
