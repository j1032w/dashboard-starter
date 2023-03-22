import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},

  {
    path: 'product/:id/:brand',
    component: DashboardComponent,

    data: {title: 'Dashboard'}
  },

  {
    path: 'product',
    component: DashboardComponent,
    data: {title: 'Dashboard'}
  },


  {
    path: 'ui-elements',
    data: {title: 'UI Elements'},
    loadChildren: () => import('./ui-elements/ui-element-routing.module')
      .then((m) => m.UiElementRoutingModule)

  },

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
