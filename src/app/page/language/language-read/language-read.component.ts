import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/model/language';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-language-read',
  templateUrl: './language-read.component.html',
  styleUrls: ['./language-read.component.css']
})
export class LanguageReadComponent implements OnInit {

  constructor(private langService: LanguageService) { }

  listLang: Languages[];

  ngOnInit(): void {
    this.langService.getAllLanguage().subscribe(all => {
      console.log(all.dataModel);
      this.listLang = all.dataModel;
    });
  }

}
