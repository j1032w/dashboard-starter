import {NgModule} from '@angular/core';
import {FeatherModule} from 'angular-feather';
import {Camera, Github, Heart} from 'angular-feather/icons';


const icons = {
  Camera,
  Heart,
  Github
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ]
})
export class DasIconsModule {
}
