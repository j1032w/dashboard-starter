import { Injectable } from '@angular/core';
import { DasSidebarItem } from './das-sidebar-item';

@Injectable({ providedIn: 'root' })
export class DasSidebarService {

  selectItem(selectedItem:DasSidebarItem){
    for (const sidebarItem of this.sidebarItems) {
      sidebarItem.selected = false;
      for (const childItem of sidebarItem.childItems) {
        sidebarItem.selected = false;
      }
    }

    selectedItem.selected = true;
  }


  sidebarItems = [
    new DasSidebarItem({ text: 'Dashboard', icon: 'monitor', path:'/dashboard' }),

    new DasSidebarItem({ text: 'Chart', icon: 'trending-up' , path:'/multiple/child/grand-child'}),

    new DasSidebarItem({
      text: 'UI Interface',
      icon: 'layout',
      childItems: [
        new DasSidebarItem({ text: 'Animation', icon:'eye', path:'/user-interface/animation' }),
        new DasSidebarItem({ text: 'Drag and Drop', icon:'move', path:'/user-interface/drag'  }),
        new DasSidebarItem({ text: 'Grid', icon: 'grid' , path:'/user-interface/grid' }),
        new DasSidebarItem({ text: 'Virtual Scroll', icon:'file-text', path:'/user-interface/virtual-scroll' }),
      ]
    }),


    new DasSidebarItem({
      text: 'Component',
      icon: 'package',
      childItems: [
        new DasSidebarItem({ text: 'Button', path:'/components/button'  }),
        new DasSidebarItem({ text: 'Form', path:'/components/form' }),
        new DasSidebarItem({ text: 'Notification', path:'/components/notification'})
      ]
    }),

    new DasSidebarItem({
      text: 'Icons',
      icon: 'key',
      childItems: [
        new DasSidebarItem({ text: 'Brands', path:'/icons/brand'}),
        new DasSidebarItem({ text: 'Flags', path:'/icons/flag'}),
        new DasSidebarItem({ text: 'Font Awesome', path:'/icons/font-awesome' }),
        new DasSidebarItem({ text: 'SVG', path:'/icons/svg' }),




      ]
    })

  ];


}


