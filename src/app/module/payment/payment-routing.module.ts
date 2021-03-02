import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentCreateComponent } from '../../page/payment/payment-create/payment-create.component';
import { PaymentReadComponent } from '../../page/payment/payment-read/payment-read.component';

const routes: Routes = [
  {
    path : 'list-payments',
    component : PaymentReadComponent
  },
  {
    path : 'modif-payment',
    component : PaymentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
