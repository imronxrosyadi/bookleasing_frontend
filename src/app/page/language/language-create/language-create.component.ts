import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from 'src/app/model/language';
import { Profiles } from 'src/app/model/profiles';
import { AuthService } from 'src/app/service/auth.service';
import { LanguageService } from 'src/app/service/language.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-language-create',
  templateUrl: './language-create.component.html',
  styleUrls: ['./language-create.component.css']
})
export class LanguageCreateComponent implements OnInit {

  langCode: string;
  langName: string;
  profileCode: string;

  constructor(private langService: LanguageService, private auth: AuthService,
    private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.profileService.getPfl(this.auth.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addLanguage(): void {
    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let lang = new Languages();
    lang.langCode = this.langCode;
    lang.langName = this.langName;
    lang.profileId = profile;

    this.langService.addLanguage(lang).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-languages');
    })
  }

}
