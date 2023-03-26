import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasLayoutComponent } from './layout/das-layout.component';
import { DasChartMainComponent } from './views/chart/das-chart-main.component';
import { DasDashboardMainComponent } from './views/dashboard/das-dashboard-main.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: '',
    component: DasLayoutComponent,
    data: {
      label: 'Home'
    },

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch:'full' },

      { path: 'dashboard', component: DasDashboardMainComponent, data: { label: 'Dashboard' } },

      { path: 'chart', component: DasChartMainComponent, data: { label: 'Chart' } },


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
