import {Component, OnInit} from '@angular/core';
import {DasComponentBase} from '../../components/das-component-base.component';
import {BreadcrumbService} from './services/breadcrumb.service';


@Component({
  selector: 'das-breadcrumb',
  templateUrl: './das-breadcrumb.component.html',
  styleUrls: ['./das-breadcrumb.component.scss']
})
export class DasBreadcrumbComponent extends DasComponentBase implements OnInit {

  constructor(public readonly breadcrumbService:BreadcrumbService) {
    super();


  }

  ngOnInit() {

  }
}
