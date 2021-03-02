import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genders } from 'src/app/model/genders';
import { Profiles } from 'src/app/model/profiles';
import { Users } from '../../../model/users';
import { ProfileService } from '../../../service/profile.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {

  listUser: Users[];
  selectedUser = new Users();
  proCode: string;
  proName: string;
  proPhone: string;
  proEmail: string;
  proAddress: string;
  genderCode: string;

  constructor(private userService: UserService, private route: Router, 
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(all => {
      this.listUser = all.dataModel;
      this.selectedUser = all.dataModel[0];
      console.log(this.listUser);
    })
  }

  addProfile(): void {
    let gender = new Genders();
    gender.genderCode = this.genderCode;

    let user = new Users();
    user.username = this.selectedUser.username;

    let profile = new Profiles();
    profile.profileName = this.proName;
    profile.profileCode = this.proCode;
    profile.profilePhone = this.proPhone
    profile.profileEmail = this.proEmail;
    profile.profileAddress = this.proAddress;
    profile.genderId = gender;
    profile.userId = user;

    this.profileService.addProfile(profile).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-profiles');
    })
  }
}
