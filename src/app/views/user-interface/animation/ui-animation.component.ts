import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import {
  backInLeft,
  backInRight,
  bounce,
  flash,
  flipInX,
  flipInY,
  hinge,
  jackInTheBox,
  shakeX,
  shakeY,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutLeft
} from 'ng-animate';

const animationParams = { params: { timing: 0.3 } };

@Component({
  animations: [
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, animationParams)),
      transition(':leave', useAnimation(slideOutLeft, animationParams))
    ]),

    trigger('animator', [
      transition('* => backInRight', useAnimation(backInRight)),
      transition('* => backInLeft', useAnimation(backInLeft)),

      transition('* => flash', useAnimation(flash)),
      transition('* => bounce', useAnimation(bounce)),

      transition('* => flipInX', useAnimation(flipInX)),
      transition('* => flipInY', useAnimation(flipInY)),

      transition('* => shakeX', useAnimation(shakeX)),
      transition('* => shakeY', useAnimation(shakeY)),

      transition('* => slideInDown', useAnimation(slideInDown)),
      transition('* => slideInLeft', useAnimation(slideInLeft)),
      transition('* => slideInRight', useAnimation(slideInRight)),
      transition('* => slideInUp', useAnimation(slideInUp)),

      transition('* => hinge', useAnimation(hinge)),
      transition('* => jackInTheBox', useAnimation(jackInTheBox))
    ])
  ],
  selector: 'das-ui-animation',
  styleUrls: ['./ui-animation.component.scss'],
  templateUrl: './ui-animation.component.html'
})
export class UiAnimationComponent {
  animator = 'none';
}
