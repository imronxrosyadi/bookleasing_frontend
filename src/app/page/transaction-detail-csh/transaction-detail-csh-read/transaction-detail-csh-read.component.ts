import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionDetails } from 'src/app/model/transaction-details';
import { TransactionDetailService } from 'src/app/service/transaction-detail.service';

@Component({
  selector: 'app-transaction-detail-csh-read',
  templateUrl: './transaction-detail-csh-read.component.html',
  styleUrls: ['./transaction-detail-csh-read.component.css']
})
export class TransactionDetailCshReadComponent implements OnInit {

  constructor(private trDtlService: TransactionDetailService, private route: ActivatedRoute) { }

  listTrDtl: TransactionDetails[];

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.trDtlService.getDetailTransaction(val.receipt).subscribe(val => {
        console.log(val);
        this.listTrDtl = val.dataModel;
      });
    })

    // this.trDtlService.getAllTransactionDetail().subscribe(val => {
    //   this.listTrDtl = val.dataModel;
    //   console.log(this.listTrDtl);
    // })
  }

}
