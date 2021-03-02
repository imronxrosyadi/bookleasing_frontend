import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../model/customers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllCustomer(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/customer');
  }

  addCustomer(customer: Customers): Observable<Customers> {
    return this.http.post<Customers>('http://localhost:8080/customer', customer);
  }
}
