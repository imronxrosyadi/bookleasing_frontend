import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from 'src/app/model/bookdetails';
import { BookdetailService } from 'src/app/service/bookdetail.service';

@Component({
  selector: 'app-bookdetail-read',
  templateUrl: './bookdetail-read.component.html',
  styleUrls: ['./bookdetail-read.component.css']
})
export class BookdetailReadComponent implements OnInit {

  constructor(private bookDtlService: BookdetailService, private route: ActivatedRoute) { }

  listBookDtl: BookDetails[];

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.bookDtlService.getDetailBook(val.bookCode).subscribe(val => {
        console.log(val);
        this.listBookDtl = val.dataModel;
      });
    })
  }

}
