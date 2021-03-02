import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/model/categories';
import { Profiles } from 'src/app/model/profiles';
import { AuthService } from '../../../service/auth.service';
import { CategoryService } from '../../../service/category.service';
import { ProfileService } from '../../../service/profile.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categoryCode: string;
  categoryName: string;
  profileCode: string;

  constructor(private categoryService: CategoryService, private auth: AuthService,
    private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.profileService.getPfl(this.auth.getIdUser()).subscribe(val => {
      this.profileCode = val.dataModel.profileCode;
    });
  }

  addCategory(): void {
    let profile = new Profiles();
    profile.profileCode = this.profileCode;

    let category = new Categories();
    category.categoryCode = this.categoryCode;
    category.categoryName = this.categoryName;
    category.profileId = profile;

    this.categoryService.addCategory(category).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-categories');
    })
  }

}
