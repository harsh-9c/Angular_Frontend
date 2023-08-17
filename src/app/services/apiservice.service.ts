import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(loginPayload: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      'http://localhost:9000/' + 'token/generate-token',
      loginPayload
    );
  }
  private mailingUrl: string | undefined;

  public sendMail(user: any) {
    return this.http.post('http://localhost:9000/token/send-email', user);
  }
}
