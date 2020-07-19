import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import {UIRouterModule} from "@uirouter/angular";

import {  CustomHttpInterceptor } from './commons/services/interceptors/token.interceptor';

import { APP_STATES } from './commons/utils/states';

import { AppComponent } from './app.component';

import { AuthModule } from './components/auth/auth.module';
import { BoardModule } from './components/board/board.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(APP_STATES),
    AuthModule,
    BoardModule,
    // NgbModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
