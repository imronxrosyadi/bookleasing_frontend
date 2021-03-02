import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCreateComponent } from '../../page/customer-csh/customer-create/customer-create.component';
import { CustomerReadComponent } from '../../page/customer-csh/customer-read/customer-read.component';

const routes: Routes = [
  {
    path : 'list-customers-csh',
    component : CustomerReadComponent
  },
  {
    path : 'modif-customer-csh',
    component : CustomerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCshRoutingModule { }
