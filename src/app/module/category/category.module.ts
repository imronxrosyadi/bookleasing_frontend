import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryReadComponent } from '../../page/category/category-read/category-read.component';
import { CategoryCreateComponent } from '../../page/category/category-create/category-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryReadComponent,
    CategoryCreateComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
