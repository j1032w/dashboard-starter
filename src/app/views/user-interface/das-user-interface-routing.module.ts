import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';
import { UiFormComponent } from './form/ui-form.component';
import { UiGridComponent } from './grid/ui-grid.component';
import { UiAnimationComponent } from './animation/ui-animation.component';
import { DasUserInterfaceComponent } from './user-interface.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'animation',
    pathMatch: 'full'
  },

  {
    path: "animation",
    component: UiAnimationComponent,
    data: { label: "Animation"},
  },

  {
    path: "drag-drop",
    component: UiDragDropComponent,
    data: { label: "Drag and Drop"},
  },

  {
    path: "form",
    component: UiFormComponent,
    data: { label: "Form"},
  },

  {
    path: "grid",
    component: UiGridComponent,
    data: { label: "Grid"},
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasUserInterfaceRoutingModule {
}
