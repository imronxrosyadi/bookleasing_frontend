import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit, OnDestroy {

  successObs: Subscription;
  errorObs: Subscription;
  isCashier: boolean = false;
  constructor(private auth: AuthService, private router: Router, 
    private toast: ToastService, private msg: MessageService) { }

  ngOnInit(): void {
    if(this.auth.getRoleCode() == 'ADM') {
      // this.router.navigateByUrl('/dashboard-admin');
    } else if (this.auth.getRoleCode() == 'CSH') {
      this.isCashier = true;
      // this.router.navigateByUrl('/dashboard-cashier');
    }
    this.successObs = this.toast.successObs.subscribe(val => {
      this.msg.add({ severity: 'success', summary: 'Success', detail: val });
    });
    this.errorObs = this.toast.errorObs.subscribe(val => {
      this.msg.add({ severity: 'error', summary: 'Error', detail: val });
    })
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    this.successObs.unsubscribe();
    this.errorObs.unsubscribe();
  }
}
