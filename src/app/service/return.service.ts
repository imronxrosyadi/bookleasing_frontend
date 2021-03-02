import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnTransactions } from '../model/return-transactions';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getReturn(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/return');
  }

  addReturn(returnTr: ReturnTransactions): Observable<ReturnTransactions> {
    return this.http.post<ReturnTransactions>('http://localhost:8080/return', returnTr);
  }
}
