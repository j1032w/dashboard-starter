import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';
import {IconService} from '@ant-design/icons-angular';
import {AccountBookFill} from '@ant-design/icons-angular/icons';
import {AdmComponentBase} from '../../common/adm-component-base';
import {AdmNavigationService} from '../services/adm-sidebar.service';



@Component({
  selector: 'adm-sidebar',
  templateUrl: './adm-sidebar.component.html',
  styleUrls: ['./adm-sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({height: 0})),
      state('down', style({height: '*'})),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class AdmSidebarComponent extends AdmComponentBase{
  menus: any[] = [];

  constructor(
    public readonly sidebarService: AdmNavigationService,
    readonly iconService: IconService
  ) {
    super();
    iconService.addIcon(AccountBookFill)
    this.menus = sidebarService.getMenuList();
  }



  getSideBarState() {
    return this.sidebarService.getSidebarState();
  }

  toggle(currentMenu: any): void {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu: any) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarService.hasBackgroundImage;
  }
}
