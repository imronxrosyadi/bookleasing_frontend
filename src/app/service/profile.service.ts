import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profiles } from '../model/profiles';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  getPfl(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/profile/user/${id}`);
  }

  getAllProfiles(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/profile');
  }

  addProfile(profile: Profiles): Observable<Profiles> {
    return this.http.post<Profiles>('http://localhost:8080/profile', profile);
  }
}
