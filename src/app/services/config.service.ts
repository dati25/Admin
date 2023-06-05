import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../models/Config';
import { Source } from '../models/Source';
import { Destination } from '../models/Destination';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Config[]> {
    return this.http.get<Config[]>('http://localhost:5105/api/Config');
  }

  public findById(id: number): Observable<Config> {
    return this.http.get<Config>('http://localhost:5105/api/Config/' + id);
  }

  public insert(config: Config): Observable<Config> {
    return this.http.post<Config>('http://localhost:5105/api/Config', config);
  }

  public update(config: Config): Observable<Config> {
    return this.http.put<Config>(
      'http://localhost:5105/api/Config/' + config.id,
      config
    );
  }

  public delete(config: Config): Observable<Config> {
    return this.http.delete<Config>(
      'http://localhost:5105/api/Config/' + config.id
    );
  }

  public deleteSource(source: Source): Observable<Source> {
    return this.http.delete<Source>(
      'http://localhost:5105/api/sources/' + source.id
    );
  }

  public deleteDest(dest: Destination): Observable<Destination> {
    return this.http.delete<Destination>(
      'http://localhost:5105/api/destinations/' + dest.id
    );
  }

  public deleteObject(
    config: Config,
    id: number,
    type: string
  ): Observable<Config> {
    return this.http.delete<Config>(
      'http://localhost:5105/api/' + config.id + '/' + id + '/' + type
    );
  }
}
