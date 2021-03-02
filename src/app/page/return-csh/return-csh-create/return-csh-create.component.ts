import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnTransactions } from '../../../model/return-transactions';
import { ReturnService } from '../../../service/return.service';
import { Payments } from '../../../model/payments';
import { Profiles } from '../../../model/profiles';
import { TransactionDetails } from '../../../model/transaction-details';
import { AuthService } from '../../../service/auth.service';
import { PaymentService } from '../../../service/payment.service';
import { ProfileService } from '../../../service/profile.service';
import { TransactionDetailService } from '../../../service/transaction-detail.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-return-csh-create',
  templateUrl: './return-csh-create.component.html',
  styleUrls: ['./return-csh-create.component.css']
})
export class ReturnCshCreateComponent implements OnInit {

  listPayment: Payments[];
  selectedPayment = new Payments();
  listDtlBorrow: TransactionDetails[];
  selectedDtlBorrow = new TransactionDetails();
  profileCode: string;
  borrowDone: string;
  borrowLatePrice: number;
  returnPrice: number;

  constructor(private payService: PaymentService, private authService: AuthService,
    private trDtlService: TransactionDetailService, private profileService: ProfileService,
    private returnService: ReturnService, private route: Router, private toast: ToastService) { }

  ngOnInit(): void {
    this.trDtlService.getAllTransactionDetail().subscribe(all => {
      this.listDtlBorrow = all.dataModel;
      this.selectedDtlBorrow = all.dataModel[0];
      console.log(this.listDtlBorrow);
    })

    this.payService.getAllPayment().subscribe(all => {
      this.listPayment = all.dataModel;
      this.selectedPayment = all.dataModel[0];
      console.log(this.listPayment);
    });

    this.profileService.getPfl(this.authService.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addReturnTr(): void {
    let trDtl = new TransactionDetails();
    trDtl.borrowDtlCode = this.selectedDtlBorrow.borrowDtlCode;
    let payment = new Payments();
    payment.payCode = this.selectedPayment.payCode;
    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let returnTr = new ReturnTransactions();
    returnTr.trDetailId = trDtl;
    returnTr.borrowDone = this.borrowDone.replace("T", "\ ");
    returnTr.borrowLatePrice = this.borrowLatePrice;
    returnTr.returnPrice = this.returnPrice;
    returnTr.payId = payment;
    returnTr.profileId = profile;

    this.returnService.addReturn(returnTr).subscribe(val => {
      console.log(val);
      this.toast.successToast("Return Transaction Success!");
      this.route.navigateByUrl('/list-returns-csh');
    })
  }

}
