import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  login(uname: string, pass: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/login', 
    {username : uname, password : pass});
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/user', 
    { headers: 
      { 
        Authorization: `Bearer ${this.auth.getToken()}`
      } 
    });
  }

  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>('http://localhost:8080/user', user,
    { headers: 
      { 
        Authorization: `Bearer ${this.auth.getToken()}`
      } 
    });
  }
}
