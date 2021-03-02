import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { LanguageReadComponent } from '../../page/language/language-read/language-read.component';
import { LanguageCreateComponent } from '../../page/language/language-create/language-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LanguageReadComponent,
    LanguageCreateComponent
  ],
  imports: [
    CommonModule,
    LanguageRoutingModule,
    FormsModule
  ]
})
export class LanguageModule { }
