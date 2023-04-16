import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../models/Request';

@Injectable({
    providedIn: 'root',
})
export class requestService {
    constructor(private http: HttpClient) {}

    public findAll(): Observable<Request[]> {
        return this.http.get<Request[]>('http://localhost:5105/api/Computer');
    }

    public delete(request: Request): Observable<Request> {
        return this.http.delete<Request>(
            'http://localhost:5035/api/Computer/' + request.id
        );
    }
    public findById(id: number): Observable<Request> {
        return this.http.get<Request>(
            'http://localhost:5035/api/Computer/' + id
        );
    }

    public update(request: Request): Observable<Request> {
        return this.http.put<Request>(
            'http://localhost:5035/api/Computer/' + request.id,
            request
        );
    }

    public insert(request: Request): Observable<Request> {
        return this.http.post<Request>(
            'http://localhost:5035/api/Computer',
            request
        );
    }
}
