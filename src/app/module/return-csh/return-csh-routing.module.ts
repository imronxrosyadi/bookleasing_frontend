import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnCshCreateComponent } from '../../page/return-csh/return-csh-create/return-csh-create.component';
import { ReturnCshReadComponent } from '../../page/return-csh/return-csh-read/return-csh-read.component';

const routes: Routes = [
  {
    path : 'list-returns-csh',
    component : ReturnCshReadComponent
  },
  {
    path : 'modif-return-csh',
    component : ReturnCshCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnCshRoutingModule { }
