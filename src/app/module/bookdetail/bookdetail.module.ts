import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookdetailRoutingModule } from './bookdetail-routing.module';
import { BookdetailReadComponent } from '../../page/bookdetail/bookdetail-read/bookdetail-read.component';
import { BookdetailCreateComponent } from '../../page/bookdetail/bookdetail-create/bookdetail-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookdetailReadComponent,
    BookdetailCreateComponent
  ],
  imports: [
    CommonModule,
    BookdetailRoutingModule,
    FormsModule
  ]
})
export class BookdetailModule { }
