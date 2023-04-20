import { Injectable } from '@angular/core';
import { DasSidebarItem, SidebarItemTypeEnum } from './das-sidebar-item';

@Injectable({ providedIn: 'root' })
export class DasSidebarService {

  sidebarItems = [
    new DasSidebarItem({ text: 'Dashboard', icon: 'monitor', path: '/dashboard' }),


    new DasSidebarItem({
      text: 'Chart',
      icon: 'trending-up',
      path: '/chart',
      childTemplate: 'chartSetting',
      type: SidebarItemTypeEnum.WithChildTemplate
    }),

    new DasSidebarItem({
      text: 'Grid',
      icon: 'grid',
      path: '/grid',
    }),

    new DasSidebarItem({
      text: 'User Interface',
      icon: 'layout',
      type: SidebarItemTypeEnum.WithChildrenItems,
      childItems: [
        new DasSidebarItem({ text: 'Animation', path: '/user-interface/animation' }),
        new DasSidebarItem({ text: 'Drag and Drop', path: '/user-interface/drag-drop' }),
        new DasSidebarItem({ text: 'Query Builder', path: '/user-interface/query-builder' }),
        new DasSidebarItem({ text: 'Responsive Design', path: '/user-interface/responsive' }),
        new DasSidebarItem({ text: 'Virtual Scroll', path: '/user-interface/virtual-scroll' })
      ]
    }),


    new DasSidebarItem({
      text: 'Components',
      icon: 'package',
      type: SidebarItemTypeEnum.WithChildrenItems,
      childItems: [
        new DasSidebarItem({ text: 'Form', path: '/component/form' }),
        new DasSidebarItem({ text: 'Multiple Purpose', path: '/component/multiple-purpose' }),
        new DasSidebarItem({ text: 'Notification', path: '/component/notification' })
      ]
    })


    // new DasSidebarItem({
    //   text: 'Icons',
    //   icon: 'key',
    //   childItems: [
    //     new DasSidebarItem({ text: 'Brands', path: '/icons/brand' }),
    //     new DasSidebarItem({ text: 'Flags', path: '/icons/flag' }),
    //     new DasSidebarItem({ text: 'Font Awesome', path: '/icons/font-awesome' }),
    //     new DasSidebarItem({ text: 'SVG Icons', path: '/icons/svg' })
    //
    //
    //   ]
    // })

  ];


}


