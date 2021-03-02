import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionCshCreateComponent } from '../../page/transaction-csh/transaction-csh-create/transaction-csh-create.component';
import { TransactionCshReadComponent } from '../../page/transaction-csh/transaction-csh-read/transaction-csh-read.component';

const routes: Routes = [
  {
    path : 'list-transactions-csh',
    component : TransactionCshReadComponent
  },
  {
    path : 'modif-transaction-csh',
    component : TransactionCshCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowCshRoutingModule { }
