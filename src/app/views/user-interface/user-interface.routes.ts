import { Routes } from '@angular/router';

export const VIEWS_USER_INTERFACE_ROUTES: Routes = [
  { path: '', redirectTo: 'animation', pathMatch: 'full' },

  {
    path: 'animation',
    loadComponent: () => import('./animation/ui-animation.component').then(m => m.UiAnimationComponent),
    data: { label: 'Animation' }
  },

  {
    path: 'drag-drop',
    loadComponent: () => import('./drag-drop/ui-drag-drop.component').then(m => m.UiDragDropComponent),
    data: { label: 'Drag and Drop' }
  },

  {
    path: 'query-builder',
    loadComponent: () => import('./query-builder/ui-query-builder.component').then(m => m.UiQueryBuilderComponent),
    data: { label: 'Query Builder' }
  },

  {
    path: 'virtual-scroll',
    loadComponent: () => import('./virtual-scroll/ui-virtual-scroll.component').then(m => m.UiVirtualScrollComponent),
    data: { label: 'Virtual Scroll' }
  },

  {
    path: 'responsive',
    loadComponent: () => import('./responsive/ui-responsive.component').then(m => m.UiResponsiveComponent),
    data: { label: 'Responsive Design' }
  }
];
