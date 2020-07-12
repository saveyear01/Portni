import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UIRouterModule} from "@uirouter/angular";

import { APP_STATES } from './commons/utils/states';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(APP_STATES),
    AuthModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
