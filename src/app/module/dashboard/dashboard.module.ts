import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardAdminComponent } from '../../layout/dashboard-admin/dashboard-admin.component';
import { DashboardCashierComponent } from '../../layout/dashboard-cashier/dashboard-cashier.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    DashboardCashierComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToastModule
  ],
  providers : [MessageService]
})
export class DashboardModule { }
