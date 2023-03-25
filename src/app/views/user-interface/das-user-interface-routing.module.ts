import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiAnimationComponent } from './animation/ui-animation.component';

import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';
import { UiVirtualScrollComponent } from './virtual-scroll/ui-virtual-scroll.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'animation',
    pathMatch: 'full'
  },

  {
    path: 'animation',
    component: UiAnimationComponent,
    data: { label: 'Animation' }
  },

  {
    path: 'drag-drop',
    component: UiDragDropComponent,
    data: { label: 'Drag and Drop' }
  },

  {
    path: 'virtual-scroll',
    component: UiVirtualScrollComponent,
    data: { label: 'Virtual Scroll' }
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasUserInterfaceRoutingModule {
}
