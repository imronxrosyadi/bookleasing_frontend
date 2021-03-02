import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryCreateComponent } from '../../page/category/category-create/category-create.component';
import { CategoryReadComponent } from '../../page/category/category-read/category-read.component';

const routes: Routes = [
  {
    path: 'list-categories',
    component: CategoryReadComponent
  },
  {
    path: 'modif-category',
    component: CategoryCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
