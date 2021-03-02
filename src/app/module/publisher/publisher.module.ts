import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { PublisherReadComponent } from '../../page/publisher/publisher-read/publisher-read.component';
import { PublisherCreateComponent } from '../../page/publisher/publisher-create/publisher-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublisherReadComponent,
    PublisherCreateComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule,
    FormsModule
  ]
})
export class PublisherModule { }
