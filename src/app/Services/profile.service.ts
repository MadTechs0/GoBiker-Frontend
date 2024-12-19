import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }

  getProfileDetails(){
    return this.http.get(`${this.baseUrl}/getProfileDetails`);
  }
}
