import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { Publishers } from 'src/app/model/publishers';
import { AuthService } from 'src/app/service/auth.service';
import { ProfileService } from 'src/app/service/profile.service';
import { PublisherService } from 'src/app/service/publisher.service';

@Component({
  selector: 'app-publisher-create',
  templateUrl: './publisher-create.component.html',
  styleUrls: ['./publisher-create.component.css']
})
export class PublisherCreateComponent implements OnInit {

  pubCode: string;
  pubName: string;
  profileCode: string;

  constructor(private pubService: PublisherService, private auth: AuthService,
    private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.profileService.getPfl(this.auth.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addPublisher(): void {
    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let pub = new Publishers();
    pub.publisherCode = this.pubCode;
    pub.publisherName = this.pubName;
    pub.profileId = profile;

    this.pubService.addPublisher(pub).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-publishers');
    })
  }

}
