import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/model/books';
import { Categories } from 'src/app/model/categories';
import { Profiles } from 'src/app/model/profiles';
import { Publishers } from 'src/app/model/publishers';
import { AuthService } from 'src/app/service/auth.service';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProfileService } from 'src/app/service/profile.service';
import { PublisherService } from 'src/app/service/publisher.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookCode: string;
  bookName: string;
  bookPrice: number;
  bookPublish: number;
  profileCode: string;

  listCat: Categories[];
  selectedCat = new Categories();
  listPub: Publishers[];
  selectedPub = new Publishers();

  constructor(private bookService: BookService, private catService: CategoryService, 
    private pubService: PublisherService, private auth: AuthService,
    private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.catService.getAllCategory().subscribe(all => {
      this.listCat = all.dataModel;
      this.selectedCat = all.dataModel[0];
      console.log(this.listCat);
    })
    this.pubService.getAllPublisher().subscribe(all => {
      this.listPub = all.dataModel;
      this.selectedPub = all.dataModel[0]
      console.log(this.listPub);
    })
    this.profileService.getPfl(this.auth.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addBook(): void {
    let category = new Categories();
    category.categoryCode = this.selectedCat.categoryCode;

    let publisher = new Publishers();
    publisher.publisherCode = this.selectedPub.publisherCode;

    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let book = new Books();
    book.bookCode = this.bookCode;
    book.bookName = this.bookName;
    book.bookPrice = this.bookPrice;
    book.bookPublish = this.bookPublish;
    book.bookCategory = category;
    book.bookPublisher = publisher;
    book.profileId = profile;

    this.bookService.addBook(book).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-books');
    })
  }

}
