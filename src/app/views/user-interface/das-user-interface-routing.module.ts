import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UiAnimationComponent } from './ui-animation/ui-animation.component';



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


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasUserInterfaceRoutingModule {
}
