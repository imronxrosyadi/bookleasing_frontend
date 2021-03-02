import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { BorrowCshModule } from '../borrow-csh/borrow-csh.module';
import { BorrowDetailCshModule } from '../borrow-detail-csh/borrow-detail-csh.module';
import { ReturnCshModule } from '../return-csh/return-csh.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    BorrowCshModule,
    BorrowDetailCshModule,
    ReturnCshModule
  ]
})
export class TransactionModule { }
