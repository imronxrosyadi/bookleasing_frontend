import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookdetailCreateComponent } from '../../page/bookdetail/bookdetail-create/bookdetail-create.component';
import { BookdetailReadComponent } from '../../page/bookdetail/bookdetail-read/bookdetail-read.component';

const routes: Routes = [
  {
    path : 'list-bookdetails/:bookCode',
    component : BookdetailReadComponent
  },
  {
    path : 'modif-bookdetail/:id',
    component : BookdetailCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookdetailRoutingModule { }
