import { Component, OnInit } from '@angular/core';
import {ToastModule} from 'primeng/toast';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastService } from 'src/app/service/toast.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard-cashier',
  templateUrl: './dashboard-cashier.component.html',
  styleUrls: ['./dashboard-cashier.component.css']
})
export class DashboardCashierComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, 
    private toast: ToastService, private msg: MessageService) { }

  ngOnInit(): void {
    // this.callToast();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  // callToast(): void {
  //   this.toast.successObs.subscribe(val => {
  //     this.msg.add({ severity: 'success', summary: 'Success', detail: val });
  //   });

  //   this.toast.errorObs.subscribe(val => {
  //     this.msg.add({ severity: 'error', summary: 'Error', detail: val });
  //   })

  
  // }

}
