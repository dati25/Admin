import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public insert(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>('http://localhost:5105/api/Sessions', admin);
  }
}
