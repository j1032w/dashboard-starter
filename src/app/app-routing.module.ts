import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DasDashboardViewComponent} from './views/dashboard/das-dashboard-view.component';


const routes: Routes = [
  {
    path: "multiple",
    component: DasDashboardViewComponent,
    data: { breadCrumb: "Home"},
    children: [
      {
        path: "child",
        component: DasDashboardViewComponent,
        data: { breadCrumb: "child"},
        children: [
          {
            path: "grand-child",
            component: DasDashboardViewComponent,
            data: { breadCrumb: "grand-child"}
          }
        ]
      }
    ]
  },



  {path: 'dashboard', component: DasDashboardViewComponent, data: {title: 'Dashboard'}},


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
