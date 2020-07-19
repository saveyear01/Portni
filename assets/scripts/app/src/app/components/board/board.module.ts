import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRouterModule } from '@uirouter/angular';

import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsideComponent } from './aside/aside.component';




@NgModule({
  declarations: [
    BaseComponent, 
    DashboardComponent, 
    AsideComponent
  ],
  imports: [
    CommonModule,
    UIRouterModule
  ]
})
export class BoardModule { }
