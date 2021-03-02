import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payments } from '../model/payments';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  getAllPayment(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/payment');
  }

  addPayment(pay: Payments): Observable<Payments> {
    return this.http.post<Payments>('http://localhost:8080/payment', pay);
  }
}
