import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasLayoutComponent } from './layout/das-layout.component';
import { DasDashboardViewComponent } from './views/dashboard/das-dashboard-view.component';


const routes: Routes = [
  {
    path: 'multiple',
    component: DasDashboardViewComponent,
    data: { label: 'multiple' },
    children: [
      {
        path: 'child',
        component: DasDashboardViewComponent,
        data: { label: 'child' },
        children: [
          {
            path: 'grand-child',
            component: DasDashboardViewComponent,
            data: { label: 'grand-child' }
          }
        ]
      }
    ]
  },


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: '',
    component: DasLayoutComponent,
    data: {
      label: 'Home'
    },

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch:'full' },

      { path: 'dashboard', component: DasDashboardViewComponent, data: { label: 'Dashboard' } },


      {
        path: 'user-interface',
        data: { label: 'User Interface' },
        loadChildren: () => import('./views/user-interface/das-user-interface.module')
          .then((m) => m.DasUserInterfaceModule)

      },

      {
        path: 'component',
        data: { label: 'Components' },
        loadChildren: () => import('./views/component/das-component-view.module')
          .then((m) => m.DasComponentViewModule)

      }
    ]
  }


  //{path: '**', redirectTo: '/dashboard', pathMatch: 'full', data: { label: "Home"}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
