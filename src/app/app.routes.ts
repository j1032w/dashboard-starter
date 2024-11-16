import { Routes } from '@angular/router';

import { DasLayoutComponent } from './layout/das-layout.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: '',
    component: DasLayoutComponent,
    data: { label: 'Home' },

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'dashboard',

        loadComponent: () => import('./views/dashboard/dashboard-view.component').then(m => m.DashboardViewComponent),

        data: { label: 'Dashboard' }
      },

      {
        path: 'chart',

        loadComponent: () => import('./views/chart/das-chart-view.component').then(m => m.DasChartViewComponent),

        data: { label: 'Chart' }
      },

      {
        path: 'grid',

        loadComponent: () => import('./views/grid/das-grid-view.component').then(m => m.DasGridViewComponent),

        data: { label: 'Grid' }
      },

      {
        path: 'user-interface',
        data: { label: 'User Interface' },
        loadChildren: () =>
          import('./views/user-interface/user-interface.routes').then(m => m.VIEWS_USER_INTERFACE_ROUTES)
      },

      {
        path: 'component',
        data: { label: 'Components' },
        loadChildren: () => import('./views/component/component-view.routes').then(m => m.VIEWS_COMPONENT_ROUTES)
      }
    ]
  },

  { path: '**', redirectTo: '/dashboard', pathMatch: 'full', data: { label: 'Home' } }
];
