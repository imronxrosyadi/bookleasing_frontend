import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../model/categories';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllCategory(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/category');
  }

  addCategory(category: Categories): Observable<Categories> {
    return this.http.post<Categories>('http://localhost:8080/category', category);
  }
}
