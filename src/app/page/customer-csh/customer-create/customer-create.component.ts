import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/model/customers';
import { Genders } from 'src/app/model/genders';
import { Profiles } from 'src/app/model/profiles';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';
import { ProfileService } from 'src/app/service/profile.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  custCode: string;
  custName: string;
  custPhone: string;
  custEmail: string;
  custAddress: string;
  genderCode: string;
  profileCode: string;

  constructor(private custService: CustomerService, private route: Router, 
    private profileService: ProfileService, private auth: AuthService,
    private toast: ToastService) { }

  ngOnInit(): void {
    this.profileService.getPfl(this.auth.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addCustomer(): void {
    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let gender = new Genders();
    gender.genderCode = this.genderCode;

    let cust = new Customers();
    cust.custCode = this.custCode;
    cust.custName = this.custName;
    cust.custPhone = this.custPhone;
    cust.custEmail = this.custEmail;
    cust.custAddress = this.custAddress;
    cust.genderId = gender;
    cust.profileId = profile;

    this.custService.addCustomer(cust).subscribe(val => {
      console.log(val);
      this.toast.successToast("Added Customer Success!");
      this.route.navigateByUrl('/list-customers-csh');
    })
  }

}
