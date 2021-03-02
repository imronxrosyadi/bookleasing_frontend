import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { BookDetails } from '../../../model/bookdetails';
import { Customers } from '../../../model/customers';
import { Payments } from '../../../model/payments';
import { Profiles } from '../../../model/profiles';
import { TransactionDetails } from '../../../model/transaction-details';
import { TransactionHelper } from '../../../model/transaction-helper';
import { Transactions } from '../../../model/transactions';
import { AuthService } from '../../../service/auth.service';
import { BookdetailService } from '../../../service/bookdetail.service';
import { PaymentService } from '../../../service/payment.service';
import { ProfileService } from '../../../service/profile.service';
import { ToastService } from '../../../service/toast.service';
import { TransactionService } from '../../../service/transaction.service';

@Component({
  selector: 'app-transaction-csh-create',
  templateUrl: './transaction-csh-create.component.html',
  styleUrls: ['./transaction-csh-create.component.css']
})
export class TransactionCshCreateComponent implements OnInit {

  listPayment: Payments[];
  selectedPayment = new Payments();
  listBookDtl: BookDetails[];
  selectedBookDtl = new BookDetails();
  listCust: Customers[];
  selectedCustomer = new Customers();
  borrowEndDate: string;
  dtlBookCode: string;
  dataDetails: string[][] = [];
  borrowDate: string;
  custCode: string;
  profileCode: string;


  constructor(private paymentService: PaymentService, private bookDtlService: BookdetailService, 
    private profileService: ProfileService, private authService: AuthService, 
    private transactionService: TransactionService, private route: Router, 
    private toast: ToastService, private custService: CustomerService) { }

  ngOnInit(): void {

    this.custService.getAllCustomer().subscribe(all => {
      this.listCust = all.dataModel;
      this.selectedCustomer = all.dataModel[0];
    })
    this.paymentService.getAllPayment().subscribe(all => {
      this.listPayment = all.dataModel;
      this.selectedPayment = all.dataModel[0];
      console.log(this.listPayment);
    });

    this.bookDtlService.getAllBookDetail().subscribe(all => {
      this.listBookDtl = all.dataModel;
      this.selectedBookDtl = all.dataModel[0];
      console.log(this.listBookDtl);
    });

    this.profileService.getPfl(this.authService.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });

  }

  addDetail(): void {
    this.dataDetails.push([this.borrowEndDate, this.selectedBookDtl.bookDtlCode]);
    console.log(this.dataDetails);
  }

  addTransaction(): void {
    let customer = new Customers();
    customer.custCode = this.selectedCustomer.custCode;
    let profile = new Profiles();
    profile.profileCode = this.profileCode;
    let payment = new Payments();
    payment.payCode = this.selectedPayment.payCode;

    let transaction = new Transactions();
    transaction.borrowStart = this.borrowDate.replace("T", "\ ");
    transaction.profileId = profile;
    transaction.customerId = customer;
    transaction.paymentId = payment;

    let dtlList: TransactionDetails[] = [];
    for(let i: number = 0; i<this.dataDetails.length; i++) {
      let bookDtl = new BookDetails();
      bookDtl.bookDtlCode = this.dataDetails[i][1];
      let trDtl = new TransactionDetails();
      trDtl.borrowEnd = this.dataDetails[i][0].replace("T", "\ ");
      trDtl.bookDtlId = bookDtl;
      dtlList.push(trDtl);
    }
    
    let trHelper = new TransactionHelper();
    trHelper.transaction = transaction;
    trHelper.transactionDetailsList = dtlList;

    console.log(trHelper);

    this.transactionService.addTransaction(trHelper).subscribe(val => {
      this.toast.successToast("Transaction Success!");
      console.log(val);
      this.route.navigateByUrl('/list-transactions-csh');
    });
  }

}