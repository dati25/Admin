import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../models/Destination';

@Injectable({
  providedIn: 'root',
})
export class destinationService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Destination[]> {
    return this.http.get<Destination[]>(
      'http://localhost:5105/api/Destination'
    );
  }

  public findById(id: number): Observable<Destination> {
    return this.http.get<Destination>(
      'http://localhost:5105/api/Destination/' + id
    );
  }

  public insert(destination: Destination): Observable<Destination> {
    return this.http.post<Destination>(
      'http://localhost:5105/api/Destination',
      destination
    );
  }

  public update(destination: Destination): Observable<Destination> {
    return this.http.put<Destination>(
      'http://localhost:5105/api/Destination/' + destination.id,
      destination
    );
  }

  public delete(destination: Destination): Observable<Destination> {
    return this.http.delete<Destination>(
      'http://localhost:5105/api/Destination/' + destination.id
    );
  }

  public deleteUser(destination: Destination): Observable<Destination> {
    return this.http.delete<Destination>(
      'http://localhost:5105/api/Destination/' + destination.id
    );
  }
}
