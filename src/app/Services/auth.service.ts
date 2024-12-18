import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth';
  constructor(private http: HttpClient) { }

  register(user: any){
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
