import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleReadComponent } from '../../page/role/role-read/role-read.component';
import { RoleCreateComponent } from '../../page/role/role-create/role-create.component';


@NgModule({
  declarations: [
    RoleReadComponent,
    RoleCreateComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
