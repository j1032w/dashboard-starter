import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CompFormComponent } from './form/comp-form.component';
import { CompGridComponent } from './grid/comp-grid.component';









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
    path: "button",
    component: CompFormComponent,
    data: { label: "Form"},
  },

  {
    path: "notification",
    component: CompFormComponent,
    data: { label: "Grid"},
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasComponentViewRoutingModule {
}
