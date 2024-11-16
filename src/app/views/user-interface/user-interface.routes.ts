import { Routes } from '@angular/router';

import { UiAnimationComponent } from './animation/ui-animation.component';
import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';
import { UiQueryBuilderComponent } from './query-builder/ui-query-builder.component';
import { UiResponsiveComponent } from './responsive/ui-responsive.component';
import { UiVirtualScrollComponent } from './virtual-scroll/ui-virtual-scroll.component';

export const VIEWS_USER_INTERFACE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'animation',
    pathMatch: 'full'
  },

  {
    path: 'animation',
    component: UiAnimationComponent,
    data: { label: 'Animation' }
  },

  {
    path: 'drag-drop',
    component: UiDragDropComponent,
    data: { label: 'Drag and Drop' }
  },

  {
    path: 'query-builder',
    component: UiQueryBuilderComponent,
    data: { label: 'Query Builder' }
  },

  {
    path: 'virtual-scroll',
    component: UiVirtualScrollComponent,
    data: { label: 'Virtual Scroll' }
  },

  {
    path: 'responsive',
    component: UiResponsiveComponent,
    data: { label: 'Responsive Design' }
  }
];
