import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookReadComponent } from '../../page/book/book-read/book-read.component';
import { BookCreateComponent } from '../../page/book/book-create/book-create.component';
import { FormsModule } from '@angular/forms';
import localeId from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    BookReadComponent,
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ],
  providers: [ { provide : LOCALE_ID, useValue: 'id-ID' } ]
})
export class BookModule { }
