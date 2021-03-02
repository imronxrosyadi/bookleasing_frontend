import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RackRoutingModule } from './rack-routing.module';
import { RackReadComponent } from '../../page/rack/rack-read/rack-read.component';
import { RackCreateComponent } from '../../page/rack/rack-create/rack-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RackReadComponent,
    RackCreateComponent
  ],
  imports: [
    CommonModule,
    RackRoutingModule,
    FormsModule
  ]
})
export class RackModule { }
