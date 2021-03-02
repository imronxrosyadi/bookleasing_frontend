import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveToken(token: string): void{
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('token'));
  }

  logout(): void {
    localStorage.clear();
  }

  saveProfile(profile: string): void{
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  getProfile(): any {
    return JSON.parse(localStorage.getItem('profile'));
  }

  getIdUser(): number {
    return this.getProfile().userId;
  }

  getRoleCode(): string {
    return this.getProfile().roleCode;
  }

}
