import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authors } from '../model/authors';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllAuthor(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/author');
  }

  addAuthor(author: Authors): Observable<Authors> {
    return this.http.post<Authors>('http://localhost:8080/author', author);
  }
}
