import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRouterModule } from '@uirouter/angular';

import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsideComponent } from './aside/aside.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    BaseComponent, 
    DashboardComponent, 
    AsideComponent
  ],
  imports: [
    CommonModule,
    UIRouterModule,
    NgbModule
  ]
})
export class BoardModule { }
