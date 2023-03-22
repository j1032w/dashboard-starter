import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UiFormComponent} from './form/ui-form.component';
import {UiGridComponent} from './grid/ui-grid.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },


  {
    path: 'form',
    component: UiFormComponent,
    data: {title: 'Form'}
  },

  {
    path: 'grid',
    component: UiGridComponent,
    data: {title: 'Grid'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementRoutingModule {
}
