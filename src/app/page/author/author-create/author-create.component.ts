import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authors } from 'src/app/model/authors';
import { Profiles } from 'src/app/model/profiles';
import { AuthService } from 'src/app/service/auth.service';
import { AuthorService } from 'src/app/service/author.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  authorCode: string;
  authorName: string;
  profileCode: string;

  constructor(private authorService: AuthorService, private auth: AuthService,
    private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.profileService.getPfl(this.auth.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addAuthor(): void {
    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let author = new Authors();
    author.authorCode = this.authorCode;
    author.authorName = this.authorName;
    author.profileId = profile;

    this.authorService.addAuthor(author).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-authors');
    })
  }

}
