import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { slideInLeft, slideOutLeft } from 'ng-animate';
import { DasSettingService } from './common/services/das-setting.service';
import { DasLayoutService } from './layout/services/das-layout.service';

const animationParams = { params: { timing: 0.3 } };

@Component({
  selector: 'das-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, animationParams)),
      transition(':leave', useAnimation(slideOutLeft, animationParams))
    ])
  ]
})
export class AppComponent implements OnInit {


  constructor(
    public readonly dasLayoutService: DasLayoutService,
    public readonly dasSettingService: DasSettingService
  ) {


  }

  ngOnInit() {
    setTimeout(()=>{
      this.dasSettingService.isPauseAnimation = false;
    }, 300)

  }


}
