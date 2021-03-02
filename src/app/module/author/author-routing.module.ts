import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorCreateComponent } from '../../page/author/author-create/author-create.component';
import { AuthorReadComponent } from '../../page/author/author-read/author-read.component';

const routes: Routes = [
  {
    path : 'list-authors',
    component: AuthorReadComponent
  },
  {
    path : 'modif-author',
    component: AuthorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
