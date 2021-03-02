import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnCshRoutingModule } from './return-csh-routing.module';
import { ReturnCshReadComponent } from '../../page/return-csh/return-csh-read/return-csh-read.component';
import { ReturnCshCreateComponent } from '../../page/return-csh/return-csh-create/return-csh-create.component';
import { FormsModule } from '@angular/forms';
import localeId from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeId, 'id');


@NgModule({
  declarations: [
    ReturnCshReadComponent,
    ReturnCshCreateComponent
  ],
  imports: [
    CommonModule,
    ReturnCshRoutingModule,
    FormsModule
  ],
  providers: [ { provide : LOCALE_ID, useValue: 'id-ID' } ]
})
export class ReturnCshModule { }
