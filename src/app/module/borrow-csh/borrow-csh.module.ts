import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowCshRoutingModule } from './borrow-csh-routing.module';
import { TransactionCshReadComponent } from '../../page/transaction-csh/transaction-csh-read/transaction-csh-read.component';
import { TransactionCshCreateComponent } from '../../page/transaction-csh/transaction-csh-create/transaction-csh-create.component';
import { FormsModule } from '@angular/forms';
import localeId from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeId, 'id');


@NgModule({
  declarations: [
    TransactionCshReadComponent,
    TransactionCshCreateComponent
  ],
  imports: [
    CommonModule,
    BorrowCshRoutingModule,
    FormsModule
  ],
  providers: [ { provide : LOCALE_ID, useValue: 'id-ID' } ]
})
export class BorrowCshModule { }
