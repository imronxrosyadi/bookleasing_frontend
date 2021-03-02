import { Component, OnInit } from '@angular/core';
import { Transactions } from '../../../model/transactions';
import { TransactionService } from 'src/app/service/transaction.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-transaction-csh-read',
  templateUrl: './transaction-csh-read.component.html',
  styleUrls: ['./transaction-csh-read.component.css']
})
export class TransactionCshReadComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(private transactionService: TransactionService, private auth: AuthService) { }

  listTr: Transactions[];

  ngOnInit(): void {
    if(this.auth.getRoleCode() == 'ADM') {
      this.isAdmin = true;
    } else if (this.auth.getRoleCode() == 'CSH') {
      
    }

    this.transactionService.getTransaction().subscribe(val => {
      this.listTr = val.dataModel;
      console.log(this.listTr);
    });
  }

}
