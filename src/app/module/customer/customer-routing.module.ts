import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerReadComponent } from '../../page/customer/customer-read/customer-read.component';

const routes: Routes = [
  {
    path : 'list-customers',
    component : CustomerReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
