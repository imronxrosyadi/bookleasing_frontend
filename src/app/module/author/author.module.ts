import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorReadComponent } from '../../page/author/author-read/author-read.component';
import { AuthorCreateComponent } from '../../page/author/author-create/author-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorReadComponent,
    AuthorCreateComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    FormsModule
  ]
})
export class AuthorModule { }
