import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompBaseComponent } from './base/comp-base.component';
import { CompFormComponent } from './form/comp-form.component';
import { CompGridComponent } from './grid/comp-grid.component';
import { CompNotificationComponent } from './notification/comp-notification.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },

  {
    path: "form",
    component: CompFormComponent,
    data: { label: "Form"},
  },

  {
    path: "grid",
    component: CompGridComponent,
    data: { label: "Grid"},
  },

  {
    path: "base",
    component: CompBaseComponent,
    data: { label: "Base Component"},
  },

  {
    path: "notification",
    component: CompNotificationComponent,
    data: { label: 'Notification'},
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasComponentViewRoutingModule {
}
