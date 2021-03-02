import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileReadComponent } from '../../page/profile/profile-read/profile-read.component';
import { ProfileCreateComponent } from '../../page/profile/profile-create/profile-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileReadComponent,
    ProfileCreateComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
