import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentReadComponent } from '../../page/payment/payment-read/payment-read.component';
import { PaymentCreateComponent } from '../../page/payment/payment-create/payment-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentReadComponent,
    PaymentCreateComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule
  ]
})
export class PaymentModule { }
