import { Component, OnInit } from '@angular/core';
import { Authors } from 'src/app/model/authors';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-author-read',
  templateUrl: './author-read.component.html',
  styleUrls: ['./author-read.component.css']
})
export class AuthorReadComponent implements OnInit {

  constructor(private authorService: AuthorService) { }

  listAuthor: Authors[];

  ngOnInit(): void {
    this.authorService.getAllAuthor().subscribe(all => {
      console.log(all.dataModel);
      this.listAuthor = all.dataModel;
    })
  }

}
