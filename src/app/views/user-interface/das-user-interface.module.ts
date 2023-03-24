import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatherModule } from 'angular-feather';
import { DasUserInterfaceComponent } from './user-interface.component';
import { UiAnimationComponent } from './ui-animation/ui-animation.component';


@NgModule({
  declarations: [
    DasUserInterfaceComponent,
    UiAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FeatherModule,
    FormsModule

  ],
  providers: []

})
export class DasUserInterfaceModule {
}
