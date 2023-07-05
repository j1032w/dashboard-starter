import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideInLeft, slideOutLeft } from 'ng-animate';
import { MessageService } from 'primeng/api';

import { DasSettingService } from '../common/services/das-setting.service';
import { DasLayoutService } from './services/das-layout.service';

const animationParams = { params: { timing: 0.3 } };

@Component({
  selector: 'das-layout',
  templateUrl: './das-layout.component.html',
  styleUrls: ['./das-layout.component.scss'],
  providers: [MessageService],
  animations: [
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, animationParams)),
      transition(':leave', useAnimation(slideOutLeft, animationParams))
    ])
  ]
})
export class DasLayoutComponent implements OnInit {
  constructor(
    public readonly dasLayoutService: DasLayoutService,
    public readonly dasSettingService: DasSettingService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.dasSettingService.isPauseAnimation = false;
    }, 300);
  }
}
