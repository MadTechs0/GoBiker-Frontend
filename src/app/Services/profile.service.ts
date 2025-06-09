import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getProfileDetails(){
    return this.http.get(`${this.baseUrl}/getProfileDetails`);
  }
}
