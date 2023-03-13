import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {DasComponentBase} from '../../common/components/das-component-base.component';
import {DasSidebarItem} from './services/das-sidebar-item';
import {DasSidebarService} from './services/das-sidebar.service';


@Component({
  selector: 'das-sidebar',
  templateUrl: './das-sidebar.component.html',
  styleUrls: ['./das-sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({height: 0})),
      state('down', style({height: '*'})),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class DasSidebarComponent extends DasComponentBase implements OnInit {

  sidebarItems: DasSidebarItem[] = [];

  constructor(
    public readonly sidebarService: DasSidebarService,
  ) {
    super();
  }


  ngOnInit(): void {
    this.sidebarItems = this.sidebarService.fetchItems();
  }


}
