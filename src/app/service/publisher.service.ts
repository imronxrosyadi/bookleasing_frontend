import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publishers } from '../model/publishers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllPublisher(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/publisher');
  }

  addPublisher(pub: Publishers): Observable<Publishers> {
    return this.http.post<Publishers>('http://localhost:8080/publisher', pub);
  }
}
