import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5105/api/Computer');
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:5105/api/Computer/' + id);
  }

  public insert(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5105/api/Computer', user);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(
      'http://localhost:5105/api/Computer/' + user.id,
      user
    );
  }

  public delete(user: User): Observable<User> {
    return this.http.delete<User>(
      'http://localhost:5105/api/Computer/' + user.id
    );
  }
}
