import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  getAllRole(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/role');
  }
}
