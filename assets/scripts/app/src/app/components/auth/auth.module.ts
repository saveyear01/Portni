import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BaseComponent } from './base/base.component';

import {UIRouterModule} from "@uirouter/angular";



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, BaseComponent
  ],
  imports: [
    CommonModule,
    UIRouterModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
