import {Injectable} from '@angular/core';
import {DasSidebarItem} from './das-sidebar-item';

@Injectable({providedIn: 'root'})
export class DasSidebarService {


  fetchItems(): DasSidebarItem[] {
    return [
      new DasSidebarItem({
        text: 'Dashboard',
        icon: 'monitor',
        subItems: [
          new DasSidebarItem({text: 'Dashboard1'}),
          new DasSidebarItem({text: 'Dashboard2'}),
        ]
      }),

      new DasSidebarItem({
        text: 'Component',
        icon: 'package',
        subItems: [
          new DasSidebarItem({text: 'Grids'}),
          new DasSidebarItem({text: 'Forms'}),
          new DasSidebarItem({text: 'Message'}),
          new DasSidebarItem({text: 'SVG Icons'}),
        ]
      }),

    ]
  }

}


