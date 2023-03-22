import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FeatherModule} from 'angular-feather';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DasIconsModule} from './components/das-icons.module';
import {DasLayoutModule} from './layout/layout.module';
import {UiElementModule} from './ui-elements/ui-element.module';
import {DasDashboardViewModule} from './views/dashboard/das-dashboard-view.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DasIconsModule,
    DasLayoutModule,
    UiElementModule,
    FeatherModule,
    FormsModule,
    DasDashboardViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
