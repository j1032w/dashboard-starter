import { Component } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';

import { DasLayoutService } from '../services/das-layout.service';


@Component({
  selector: 'das-header',
  templateUrl: './das-header.component.html',
  styleUrls: ['./das-header.component.scss']

})
export class DasHeaderComponent extends DasComponentBase {


  constructor(public readonly layoutService: DasLayoutService) {
    super();

  }

  openLink(url:string){
    window.open(url, "_blank");
  }


}
