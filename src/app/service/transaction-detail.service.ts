import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  getAllTransactionDetail(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/transactiondetails');
  }

  getDetailTransaction(receipt: string):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/transactiondetails/receipt/${receipt}`);
  }
}
