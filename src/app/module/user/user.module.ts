import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserReadComponent } from '../../page/user/user-read/user-read.component';
import { UserCreateComponent } from '../../page/user/user-create/user-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserReadComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
