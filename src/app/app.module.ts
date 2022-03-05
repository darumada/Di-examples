import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IconModule } from '@b-ui/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// https://center-dev.kazdream.kz/center/ru/feature/visa/advanced-search

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    IconModule.forRoot('assets/sprites/sprite.svg'),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
