import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './layout/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './page/login/login.component';

const routes : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    redirectTo : '/login', pathMatch : 'full'
  },
  {
    path : '',
    loadChildren : ()=> import('./module/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path : '',
    component : DashboardAdminComponent,
    loadChildren : ()=> import('./module/master/master.module').then(m=> m.MasterModule)
  },
  {
    path : '',
    component : DashboardAdminComponent,
    loadChildren : ()=> import('./module/transaction/transaction.module').then(m=> m.TransactionModule)
  },
  {
    path : '**',
    component : LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
