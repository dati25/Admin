import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>('http://localhost:5105/api/Admin');
  }

  public findById(id: number): Observable<Admin> {
    return this.http.get<Admin>('http://localhost:5105/api/Admin/' + id);
  }

  public insert(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>('http://localhost:5105/api/Admin', admin);
  }

  public update(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(
      'http://localhost:5105/api/Admin/' + admin.id,
      admin
    );
  }

  public delete(admin: Admin): Observable<Admin> {
    return this.http.delete<Admin>(
      'http://localhost:5105/api/Admin/' + admin.id
    );
  }
}
