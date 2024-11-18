import { Routes } from '@angular/router';

export const VIEWS_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },

  {
    path: 'form',
    loadComponent: () => import('./form/comp-form.component').then(m => m.CompFormComponent),
    data: { label: 'Form' }
  },

  {
    path: 'multiple-purpose',
    loadComponent: () =>
      import('./multiple-purpose/comp-multiple-purpose.component').then(m => m.CompMultiplePurposeComponent),
    data: { label: 'Multiple Purpose Component' }
  },

  {
    path: 'notification',
    loadComponent: () => import('./notification/comp-notification.component').then(m => m.CompNotificationComponent),
    data: { label: 'Notification' }
  }
];
