import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../models/Computer';

@Injectable({
    providedIn: 'root',
})
export class ComputerService {
    constructor(private http: HttpClient) {}

    public findAll(): Observable<Computer[]> {
        return this.http.get<Computer[]>('http://localhost:5105/api/Computer');
    }

    public findById(id: number): Observable<Computer> {
        return this.http.get<Computer>(
            'http://localhost:5105/api/Computer/' + id
        );
    }

    public insert(computer: Computer): Observable<Computer> {
        return this.http.post<Computer>(
            'http://localhost:5105/api/Computer',
            computer
        );
    }

    public update(computer: Computer): Observable<Computer> {
        return this.http.put<Computer>(
            'http://localhost:5105/api/Computer/' + computer.id,
            computer
        );
    }

    public delete(computer: Computer): Observable<Computer> {
        return this.http.delete<Computer>(
            'http://localhost:5105/api/Computer/' + computer.id
        );
    }
}
