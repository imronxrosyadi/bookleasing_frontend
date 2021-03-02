import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/model/books';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  constructor(private bookService: BookService, private actRoute: ActivatedRoute) { }

  listBook: Books[];

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(all => {
      console.log(all.dataModel);
      this.listBook = all.dataModel;
    });
  }




  // getHeader(index: number): void {
  //   let id = this.listBook[index].id;
  //   this.route.navigateByUrl('/modif-bookdetail/:id')
  // }

}
