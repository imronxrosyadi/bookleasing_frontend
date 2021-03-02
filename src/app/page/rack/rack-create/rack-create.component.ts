import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { Racks } from 'src/app/model/racks';
import { AuthService } from 'src/app/service/auth.service';
import { ProfileService } from 'src/app/service/profile.service';
import { RackService } from 'src/app/service/rack.service';

@Component({
  selector: 'app-rack-create',
  templateUrl: './rack-create.component.html',
  styleUrls: ['./rack-create.component.css']
})
export class RackCreateComponent implements OnInit {

  rackCode: string;
  rackRow: string;
  rackColumn: number;
  profileCode: string;

  constructor(private rackService: RackService, private auth: AuthService,
    private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.profileService.getPfl(this.auth.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addRack(): void {
    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let rack = new Racks();
    rack.rackCode = this.rackCode;
    rack.rackRow = this.rackRow;
    rack.rackColumn = this.rackColumn;
    rack.profileId = profile;

    this.rackService.addRack(rack).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-racks')
    })
  }

}
