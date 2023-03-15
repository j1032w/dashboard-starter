import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  //{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  //{path: '**', redirectTo: 'dashboard'},

  {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},

  {
    path: 'ui-elements',
    data: {
      title: 'UI Elements'
    },
    loadChildren: () => import('./ui-elements/ui-element.module')
      .then((m) => m.UiElementModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
