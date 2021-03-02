import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from '../../page/user/user-create/user-create.component';
import { UserReadComponent } from '../../page/user/user-read/user-read.component';

const routes: Routes = [
  {
    path : 'list-users',
    component : UserReadComponent
  },
  {
    path : 'modif-user',
    component : UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
