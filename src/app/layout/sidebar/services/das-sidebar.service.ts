import { Injectable } from '@angular/core';
import { DasSidebarItem } from './das-sidebar-item';

@Injectable({ providedIn: 'root' })
export class DasSidebarService {

  selectItem(selectedItem: DasSidebarItem) {
    for (const sidebarItem of this.sidebarItems) {
      sidebarItem.selected = false;
      for (const childItem of sidebarItem.childItems) {
        sidebarItem.selected = false;
      }
    }

    selectedItem.selected = true;
  }


  sidebarItems = [
    new DasSidebarItem({ text: 'Dashboard', icon: 'monitor', path: '/dashboard' }),

    new DasSidebarItem({ text: 'Chart', icon: 'trending-up', path: '/multiple/child/grand-child' }),

    new DasSidebarItem({
      text: 'User Interface',
      icon: 'layout',
      childItems: [
        new DasSidebarItem({ text: 'Animation', path: '/user-interface/animation' }),
        new DasSidebarItem({ text: 'Drag and Drop', path: '/user-interface/drag-drop' }),

        new DasSidebarItem({ text: 'Virtual Scroll', path: '/user-interface/virtual-scroll' })
      ]
    }),


    new DasSidebarItem({
      text: 'Components',
      icon: 'package',
      childItems: [
        new DasSidebarItem({ text: 'Button', path: '/component/button' }),
        new DasSidebarItem({ text: 'Form', path: '/component/form' }),
        new DasSidebarItem({ text: 'Grid', path: '/component/grid' }),
        new DasSidebarItem({ text: 'Notification', path: '/component/notification' })
      ]
    }),

    new DasSidebarItem({
      text: 'Icons',
      icon: 'key',
      childItems: [
        new DasSidebarItem({ text: 'Brands', path: '/icons/brand' }),
        new DasSidebarItem({ text: 'Flags', path: '/icons/flag' }),
        new DasSidebarItem({ text: 'Font Awesome', path: '/icons/font-awesome' }),
        new DasSidebarItem({ text: 'SVG', path: '/icons/svg' })


      ]
    })

  ];


}


