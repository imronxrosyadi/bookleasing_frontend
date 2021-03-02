import { Component, OnInit } from '@angular/core';
import { Publishers } from 'src/app/model/publishers';
import { PublisherService } from 'src/app/service/publisher.service';

@Component({
  selector: 'app-publisher-read',
  templateUrl: './publisher-read.component.html',
  styleUrls: ['./publisher-read.component.css']
})
export class PublisherReadComponent implements OnInit {

  constructor(private pubService: PublisherService) { }

  listPub: Publishers[];

  ngOnInit(): void {
    this.pubService.getAllPublisher().subscribe(all => {
      console.log(all.dataModel);
      this.listPub = all.dataModel;
    });
  }

}
