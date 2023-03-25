import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatherModule } from 'angular-feather';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasIconsModule } from './components/das-icons.module';
import { DasLayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DasLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DasIconsModule,
    FeatherModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
