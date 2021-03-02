import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from '../../page/book/book-create/book-create.component';
import { BookReadComponent } from '../../page/book/book-read/book-read.component';

const routes: Routes = [
  {
    path : 'list-books',
    component : BookReadComponent
  },
  {
    path : 'modif-book',
    component : BookCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
