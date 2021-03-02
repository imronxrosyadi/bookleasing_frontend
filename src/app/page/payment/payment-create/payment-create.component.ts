import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payments } from 'src/app/model/payments';
import { Profiles } from 'src/app/model/profiles';
import { AuthService } from '../../../service/auth.service';
import { PaymentService } from '../../../service/payment.service';
import { ProfileService } from '../../../service/profile.service';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {

  payCode: string;
  payName: string;
  profileCode: string;

  constructor(private payService: PaymentService, private auth: AuthService,
    private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.profileService.getPfl(this.auth.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addPayment(): void {
    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let pay = new Payments();
    pay.payCode = this.payCode;
    pay.payName = this.payName;
    pay.profileId = profile;

    this.payService.addPayment(pay).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-payments');
    })
  }

}
