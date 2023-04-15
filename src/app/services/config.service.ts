import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../models/Config';

@Injectable({
    providedIn: 'root',
})
export class configService {
    constructor(private http: HttpClient) {}

    public findAll(): Observable<Config[]> {
        return this.http.get<Config[]>('http://localhost:5035/api/configs');
    }
}
