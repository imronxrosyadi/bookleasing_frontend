import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowDetailCshRoutingModule } from './borrow-detail-csh-routing.module';
import { TransactionDetailCshReadComponent } from 'src/app/page/transaction-detail-csh/transaction-detail-csh-read/transaction-detail-csh-read.component';
import localeId from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    TransactionDetailCshReadComponent
  ],
  imports: [
    CommonModule,
    BorrowDetailCshRoutingModule
  ],
  providers: [ { provide : LOCALE_ID, useValue: 'id-ID' } ]
})
export class BorrowDetailCshModule { }
