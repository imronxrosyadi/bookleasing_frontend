import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../model/books';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllBook(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/book');
  }

  addBook(book: Books): Observable<Books> {
    return this.http.post<Books>('http://localhost:8080/book', book);
  }
}
