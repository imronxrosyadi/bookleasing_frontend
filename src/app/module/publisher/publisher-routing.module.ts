import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublisherCreateComponent } from '../../page/publisher/publisher-create/publisher-create.component';
import { PublisherReadComponent } from '../../page/publisher/publisher-read/publisher-read.component';

const routes: Routes = [
  {
    path : 'list-publishers',
    component : PublisherReadComponent
  },
  {
    path : 'modif-publisher',
    component : PublisherCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
