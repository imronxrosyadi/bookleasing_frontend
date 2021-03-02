import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ReturnTransactions } from '../../../model/return-transactions';
import { ReturnService } from '../../../service/return.service';

@Component({
  selector: 'app-return-csh-read',
  templateUrl: './return-csh-read.component.html',
  styleUrls: ['./return-csh-read.component.css']
})
export class ReturnCshReadComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(private returnService: ReturnService, private auth: AuthService) { }

  listReturn: ReturnTransactions[];

  ngOnInit(): void {
    if(this.auth.getRoleCode() == 'ADM') {
      this.isAdmin = true;
    } else if (this.auth.getRoleCode() == 'CSH') {
      
    }

    this.returnService.getReturn().subscribe(val => {
      this.listReturn = val.dataModel;
      console.log(this.listReturn);
    });
  }

}
