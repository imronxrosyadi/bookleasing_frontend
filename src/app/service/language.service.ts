import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Languages } from '../model/language';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllLanguage(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/language');
  }

  addLanguage(lang: Languages): Observable<Languages> {
    return this.http.post<Languages>('http://localhost:8080/language', lang);
  }
}
