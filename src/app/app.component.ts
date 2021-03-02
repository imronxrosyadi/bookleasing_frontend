import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastService } from './service/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bookstore-imronrosyadi';

  successObs: Subscription;
  errorObs: Subscription;

  constructor(private msg: MessageService, private toast: ToastService) { }

  ngOnInit(): void {
    this.successObs = this.toast.successObs.subscribe(val => {

    });
  }
}
