import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor(private http: HttpClient, private router: Router) {}

  public login(model: any): Observable<any> {
    return this.http
      .post<any>('http://localhost:5105/api/Sessions', model)
      .pipe(
        tap((result) => {
          localStorage.setItem('token', result.token);
          localStorage.setItem('username', result.admin.username);
          localStorage.setItem('email', result.admin.email);
          localStorage.setItem('repeatPeriod', result.admin.repeatPeriod);
          localStorage.setItem('id', result.admin.id);
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('repeatPeriod');
    localStorage.removeItem('id');
    this.router.navigateByUrl('/login');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public authenticated(): boolean {
    return !!this.getToken();
  }
}
