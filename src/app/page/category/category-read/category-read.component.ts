import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/categories';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  listCategory: Categories[];

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(all => {
      console.log(all.dataModel);
      this.listCategory = all.dataModel;
    })
  }

}
