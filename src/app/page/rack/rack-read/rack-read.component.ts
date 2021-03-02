import { Component, OnInit } from '@angular/core';
import { Racks } from 'src/app/model/racks';
import { RackService } from 'src/app/service/rack.service';

@Component({
  selector: 'app-rack-read',
  templateUrl: './rack-read.component.html',
  styleUrls: ['./rack-read.component.css']
})
export class RackReadComponent implements OnInit {

  constructor(private rackService: RackService) { }

  listRack: Racks[];

  ngOnInit(): void {
    this.rackService.getAllRack().subscribe(all => {
      console.log(all.dataModel);
      this.listRack = all.dataModel;
    })
  }

}
