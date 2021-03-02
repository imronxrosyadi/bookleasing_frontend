import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TransactionHelper } from '../model/transaction-helper';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getTransaction(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/transaction', 
    // { headers: 
    //   { 
    //     Authorization: `Bearer ${this.auth.getToken()}`
    //   } 
    // }
    );
  }

  addTransaction(helper: TransactionHelper): Observable<TransactionHelper> {
    return this.http.post<TransactionHelper>('http://localhost:8080/transaction', helper,
    { headers: 
      { 
        Authorization: `Bearer ${this.auth.getToken()}`
      } 
    });
  }
}
