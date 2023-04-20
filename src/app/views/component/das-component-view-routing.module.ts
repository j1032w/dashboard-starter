import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompMultiplePurposeComponent } from './multiple-purpose/comp-multiple-purpose.component';
import { CompFormComponent } from './form/comp-form.component';
import { CompNotificationComponent } from './notification/comp-notification.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'base',
    pathMatch: 'full'
  },

  {
    path: "form",
    component: CompFormComponent,
    data: { label: "Form"},
  },


  {
    path: "multiple-purpose",
    component: CompMultiplePurposeComponent,
    data: { label: "Multiple Purpose Component"},
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
