import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/model/customers';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {

  isAdmin: boolean = false;
  constructor(private auth: AuthService, private custService: CustomerService) { }

  listCust: Customers[];

  ngOnInit(): void {
    if(this.auth.getRoleCode() == 'ADM') {
      this.isAdmin = true;
    } else if (this.auth.getRoleCode() == 'CSH') {
      
    }

    this.custService.getAllCustomer().subscribe(all => {
      console.log(all.dataModel);
      this.listCust = all.dataModel;
    })
  }

}
