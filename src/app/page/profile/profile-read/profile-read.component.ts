import { Component, OnInit } from '@angular/core';
import { Profiles } from 'src/app/model/profiles';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile-read',
  templateUrl: './profile-read.component.html',
  styleUrls: ['./profile-read.component.css']
})
export class ProfileReadComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  listProfiles : Profiles[];

  ngOnInit(): void {
    this.profileService.getAllProfiles().subscribe(val => {
      console.log(val.dataModel);
      this.listProfiles = val.dataModel;
    })
  }

}
