import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  login() {
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    localStorage.removeItem('loggedIn');
  }
}