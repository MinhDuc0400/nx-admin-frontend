import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getData<T>(url: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(url, { observe: 'response'});
  }

  postData<T>(url: string, body: any): Observable<HttpResponse<T>> {
    return this.http.post<T>(url, body, { observe: 'response', responseType: 'json'});
  }

  putData<T>(url: string, body: T): Observable<HttpResponse<T>>{
    return this.http.put<T>(url, body, { observe: 'response', responseType: 'json'});
  }

  deleteData<T>(url: string): Observable<HttpResponse<T>> {
    return this.http.delete<T>(url, { observe: 'response'});
  }
}
