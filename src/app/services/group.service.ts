import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import { Computer } from '../models/Computer';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Group[]> {
    return this.http.get<Group[]>('http://localhost:5105/api/Group');
  }

  public findById(id: number): Observable<Group> {
    return this.http.get<Group>('http://localhost:5105/api/Group/' + id);
  }

  public insert(group: Group): Observable<Group> {
    return this.http.post<Group>('http://localhost:5105/api/Group', group);
  }

  public update(group: Group): Observable<Group> {
    return this.http.put<Group>(
      'http://localhost:5105/api/Group/' + group.id,
      group
    );
  }

  public delete(group: Group): Observable<Group> {
    return this.http.delete<Group>(
      'http://localhost:5105/api/Group/' + group.id
    );
  }

  public deleteUser(group: Group, computer: Computer): Observable<Group> {
    return this.http.delete<Group>(
      'http://localhost:5105/api/Group/' + group.id + '/' + computer.idPc
    );
  }
}
