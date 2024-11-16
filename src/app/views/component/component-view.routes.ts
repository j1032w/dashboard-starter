import { Routes } from '@angular/router';

import { CompFormComponent } from './form/comp-form.component';
import { CompMultiplePurposeComponent } from './multiple-purpose/comp-multiple-purpose.component';
import { CompNotificationComponent } from './notification/comp-notification.component';

export const VIEWS_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },

  {
    path: 'form',
    component: CompFormComponent,
    data: { label: 'Form' }
  },

  {
    path: 'multiple-purpose',
    component: CompMultiplePurposeComponent,
    data: { label: 'Multiple Purpose Component' }
  },

  {
    path: 'notification',
    component: CompNotificationComponent,
    data: { label: 'Notification' }
  }
];
