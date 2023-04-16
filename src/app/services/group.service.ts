import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';

@Injectable({
    providedIn: 'root',
})
export class groupService {
    constructor(private http: HttpClient) {}

    public findAll(): Observable<Group[]> {
        return this.http.get<Group[]>('http://localhost:5105/api/Group');
    }

    public delete(group: Group): Observable<Group> {
        return this.http.delete<Group>(
            'http://localhost:5035/api/Group/' + group.id
        );
    }
    public findById(id: number): Observable<Group> {
        return this.http.get<Group>('http://localhost:5035/api/Group/' + id);
    }

    public update(group: Group): Observable<Group> {
        return this.http.put<Group>(
            'http://localhost:5035/api/Group/' + group.id,
            group
        );
    }

    public insert(group: Group): Observable<Group> {
        return this.http.post<Group>('http://localhost:5035/api/Group', group);
    }
}
