import {Component} from '@angular/core';
import {IconService} from '@ant-design/icons-angular';
import {AccountBookFill} from '@ant-design/icons-angular/icons';
import {AdmComponentBase} from '../../common/adm-component-base';


@Component({
  selector: 'adm-header',
  templateUrl: './adm-header.component.html',
  styleUrls: ['./adm-header.component.scss'],

})
export class AdmHeaderComponent extends AdmComponentBase {
  menus: any[] = [];

  constructor(
    readonly iconService: IconService
  ) {
    super();
    iconService.addIcon(AccountBookFill)

  }


}
