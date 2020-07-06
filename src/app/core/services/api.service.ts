import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get(`${environment.api_url}${path}`, { params }) as Observable<T>;
      // .pipe(catchError(this.formatErrors));
  }

  put<T>(path: string, body: Object = {}): Observable<T> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ) as Observable<T>;
    // .pipe(catchError(this.formatErrors));
  }

  post<T>(path: string, body: Object = {}): Observable<T> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    )as Observable<T>;
    // .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
