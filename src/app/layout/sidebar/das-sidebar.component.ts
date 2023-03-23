import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import { matExpansionAnimations } from '@angular/material/expansion';
import { takeUntil } from 'rxjs';
import {DasComponentBase} from '../../components/das-component-base.component';

import {DasSidebarItem} from './services/das-sidebar-item';
import {DasSidebarService} from './services/das-sidebar.service';


@Component({
  selector: 'das-sidebar',
  templateUrl: './das-sidebar.component.html',
  styleUrls: ['./das-sidebar.component.scss'],
  animations: [matExpansionAnimations.bodyExpansion],
})
export class DasSidebarComponent extends DasComponentBase implements OnInit {


  constructor(
    public readonly sidebarService: DasSidebarService,
  ) {
    super();
  }


  ngOnInit(): void {

  }


}
