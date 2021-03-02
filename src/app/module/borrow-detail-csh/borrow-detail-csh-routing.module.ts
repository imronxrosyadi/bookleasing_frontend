import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionDetailCshReadComponent } from 'src/app/page/transaction-detail-csh/transaction-detail-csh-read/transaction-detail-csh-read.component';

const routes: Routes = [
  {
    path : 'list-transactiondetails-csh/:receipt',
    component : TransactionDetailCshReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowDetailCshRoutingModule { }
