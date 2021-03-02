import { Component, OnInit } from '@angular/core';
import { Payments } from 'src/app/model/payments';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment-read',
  templateUrl: './payment-read.component.html',
  styleUrls: ['./payment-read.component.css']
})
export class PaymentReadComponent implements OnInit {

  constructor(private payService: PaymentService) { }

  listPayment: Payments[];

  ngOnInit(): void {
    this.payService.getAllPayment().subscribe(all => {
      console.log(all.dataModel);
      this.listPayment = all.dataModel;
    })
  }

}
