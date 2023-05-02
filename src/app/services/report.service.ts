import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Report[]> {
    return this.http.get<Report[]>('http://localhost:5105/api/Report');
  }

  public findById(id: number): Observable<Report> {
    return this.http.get<Report>('http://localhost:5105/api/Report/' + id);
  }

  public insert(report: Report): Observable<Report> {
    return this.http.post<Report>('http://localhost:5105/api/Report', report);
  }

  public update(report: Report): Observable<Report> {
    return this.http.put<Report>(
      'http://localhost:5105/api/Report/' + report.id,
      report
    );
  }

  public delete(report: Report): Observable<Report> {
    return this.http.delete<Report>(
      'http://localhost:5105/api/Report/' + report.id
    );
  }
}
