import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DasDashboardViewComponent} from './views/dashboard/das-dashboard-view.component';


const routes: Routes = [
  {
    path: "multiple",
    component: DasDashboardViewComponent,
    data: { label: "multiple"},
    children: [
      {
        path: "child",
        component: DasDashboardViewComponent,
        data: { label: "child"},
        children: [
          {
            path: "grand-child",
            component: DasDashboardViewComponent,
            data: { label: "grand-child"}
          }
        ]
      }
    ]
  },



  {path: 'dashboard', component: DasDashboardViewComponent, data: {label: 'Dashboard'}},


  {
    path: 'ui-elements',
    data: {title: 'UI Elements'},
    loadChildren: () => import('./ui-elements/ui-element-routing.module')
      .then((m) => m.UiElementRoutingModule)

  },

  {path: '', redirectTo: '/dashboard', pathMatch: 'full', data: { label: "Home"}},
  //{path: '**', redirectTo: '/dashboard', pathMatch: 'full', data: { label: "Home"}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
