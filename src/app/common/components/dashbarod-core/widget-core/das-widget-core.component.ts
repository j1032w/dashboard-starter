import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { fadeOut, flipInX, flipInY, flipOutX } from 'ng-animate';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';
import { DasWidgetOption } from '../services/das-widget-option';


@Component({
  selector: 'das-widget-core',
  templateUrl: './das-widget-core.component.html',
  styleUrls: ['./das-widget-core.component.scss'],
  animations: [
    // trigger('flip', [
    //   transition(
    //     'front <=> back', [
    //
    //       animate(
    //         '0.0001s',
    //         style({
    //           backgroundColor: '#f8f9fa', // $gray-100
    //           margin: '2px',
    //           border: '1px solid gray'
    //         })
    //       ),
    //
    //       useAnimation(flipInX, { params: { timing: 2 } }),
    //
    //           animate('1s 0s ease-out',
    //             keyframes([
    //               style({
    //                 transform: 'perspective(400px) rotateY(0deg)',
    //                 offset: 0
    //               }),
    //               style({
    //                 transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateX(80deg)',
    //                 offset: 0.4
    //               }),
    //               style({
    //                 transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateX(100deg)',
    //                 offset: 0.5
    //               }),
    //               style({
    //                 transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateX(180deg)',
    //                 offset: 0.8
    //               }),
    //               style({
    //                 transform: 'perspective(400px) scale3d(1, 1, 1) rotateX(180deg)',
    //                 offset: 1
    //               })
    //             ]))
    //         ]),
    //     ]
    //   ),






    // trigger('flip', [
    //   state('front', style({
    //     transform: 'rotateY(0deg)'
    //   })),
    //   state('back', style({
    //     // transform: 'rotateY(180deg)'
    //   })),
    //   transition('front <=> back', [
    //           animate(
    //             '0.0001s',
    //             style({
    //               backgroundColor: '#f8f9fa', // $gray-100
    //               margin: '2px',
    //               border: '1px solid gray'
    //             })
    //           ),
    //     animate('1s 0s ease-out',
    //       keyframes([
    //         style({
    //           transform: 'perspective(400px) rotateY(0deg)',
    //           offset: 0
    //         }),
    //         style({
    //           transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
    //           offset: 0.4
    //         }),
    //         style({
    //           transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
    //           offset: 0.5
    //         }),
    //         style({
    //           transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(180deg)',
    //           offset: 0.8
    //         }),
    //         style({
    //           transform: 'perspective(400px) scale3d(1, 1, 1) rotateY(180deg)',
    //           offset: 1
    //         })
    //       ]))
    //   ]),
    //   transition('back => front', [
    //           // animate(
    //           //   '0.0001s',
    //           //   style({
    //           //     backgroundColor: '#f8f9fa', // $gray-100
    //           //     margin: '2px',
    //           //     border: '1px solid gray'
    //           //   })
    //           // ),
    //     animate('1s 0s ease-in',
    //       keyframes([
    //         style({
    //           backgroundColor: '#f8f9fa', // $gray-100
    //           margin: '2px',
    //           border: '1px solid gray',
    //           transform: 'perspective(400px) rotateY(0deg)',
    //           offset: 0
    //         }),
    //         style({
    //           transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(-80deg)',
    //           offset: 0.4
    //         }),
    //         style({
    //           transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(-100deg)',
    //           offset: 0.5
    //         }),
    //         style({
    //           transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(-180deg)',
    //           offset: 0.8
    //         }),
    //         style({
    //           transform: 'perspective(400px) scale3d(1, 1, 1) rotateY(-180deg)',
    //           offset: 1
    //         })
    //       ]))
    //   ])
    // ])


    // trigger('flip', [
    //   state('front', style({
    //     transform: 'none'
    //   })),
    //   state('back', style({
    //      transform: 'rotateX(180deg)'
    //   })),
    //
    //   transition('front <=> back', [
    //     animate(
    //       '0.0001s',
    //       style({
    //         backgroundColor: '#f8f9fa', // $gray-100
    //         margin: '2px',
    //         border: '1px solid gray'
    //       })
    //     ),
    //     animate('1800ms')
    //   ])
    //
    // ])

    trigger('flip', [
      state('shown',
        style({
         transform: 'rotate(0)',
         backgroundColor: 'white', // $gray-100
      })),
      state('hidden',
        style({
         transform: 'rotateY(90deg)',
          border: '1px solid gray',
          margin: '2px',
          // backfaceVisibility: "hidden",
         backgroundColor: '#f8f9fa', // $gray-100
      })),

      state('back', style({
        // transform: 'rotateY(-180deg)',
        // backgroundColor: '#f8f9fa', // $gray-100
      })),
      transition('hidden => shown', useAnimation(flipInY, { params: { timing: 2 } })),
      transition('shown => hidden', useAnimation(flipInY, { params: { timing: 2 } }))
      ]    )
  ]
})
export class DasWidgetCoreComponent {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();

  @ContentChild('frontTemplate') frontTemplate: TemplateRef<any>;
  @ContentChild('backTemplate') backTemplate: TemplateRef<any>;
  @ContentChild('settingTemplate') settingTemplate: TemplateRef<any>;

  isSettingVisible = false;

  constructor(public readonly dashboardService: DasDashboardCoreService) {
  }

  flip() {
    this.widgetOption.isFrontShown = !this.widgetOption.isFrontShown;
  }

  showSettingModal() {
    this.isSettingVisible = true;
  }


}
