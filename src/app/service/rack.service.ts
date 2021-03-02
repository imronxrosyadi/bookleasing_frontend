import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racks } from '../model/racks';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RackService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllRack(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/rack');
  }

  addRack(rack: Racks): Observable<Racks> {
    return this.http.post<Racks>('http://localhost:8080/rack', rack);
  }
}
