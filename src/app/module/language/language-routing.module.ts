import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageCreateComponent } from '../../page/language/language-create/language-create.component';
import { LanguageReadComponent } from '../../page/language/language-read/language-read.component';

const routes: Routes = [
  {
    path : 'list-languages',
    component: LanguageReadComponent,
  },
  {
    path : 'modif-language',
    component: LanguageCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
