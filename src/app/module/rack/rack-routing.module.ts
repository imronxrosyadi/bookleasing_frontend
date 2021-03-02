import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RackCreateComponent } from '../../page/rack/rack-create/rack-create.component';
import { RackReadComponent } from '../../page/rack/rack-read/rack-read.component';

const routes: Routes = [
  {
    path : 'list-racks',
    component : RackReadComponent
  },
  {
    path : 'modif-rack',
    component : RackCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RackRoutingModule { }
