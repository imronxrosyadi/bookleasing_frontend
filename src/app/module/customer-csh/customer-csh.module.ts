import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCshRoutingModule } from './customer-csh-routing.module';
import { CustomerReadComponent } from '../../page/customer-csh/customer-read/customer-read.component';
import { CustomerCreateComponent } from '../../page/customer-csh/customer-create/customer-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerReadComponent,
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    CustomerCshRoutingModule,
    FormsModule
  ]
})
export class CustomerCshModule { }
