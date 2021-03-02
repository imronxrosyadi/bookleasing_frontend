import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleCreateComponent } from '../../page/role/role-create/role-create.component';
import { RoleReadComponent } from '../../page/role/role-read/role-read.component';

const routes: Routes = [
  {
    path : 'list-roles',
    component : RoleReadComponent
  },
  {
    path : 'modif-role',
    component : RoleCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
