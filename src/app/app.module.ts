import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  LandingPageComponent,
  NavbarComponent,
  ListPostsComponent,
  PostDetailComponent,
  LoginPageComponent,
  PostShareComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    PostShareComponent,
    NavbarComponent,
    ListPostsComponent,
    LandingPageComponent,
    PostDetailComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
