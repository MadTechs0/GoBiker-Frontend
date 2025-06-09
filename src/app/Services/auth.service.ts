import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, debounceTime, distinctUntilChanged, map, of } from 'rxjs';
import { AsyncValidatorFn } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  register(user: any){
    return this.http.post(`${this.baseUrl}/register`, user)
  }
  login(user: any){
    return this.http.post(`${this.baseUrl}/login`, user);
  }
  usernameAsyncValidator(): AsyncValidatorFn{
    return (control) => {
      if (!control.value) {
        return of(null);
      }      
    return this.http.get(`${this.baseUrl}/checkUsername?userName=${control.value}`).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((response: any) => {
        console.log('API Response: ', response);
        return response.isAvailable ? null : { userNameTaken: true };
      }),     
      catchError(() => of (null))
    );
  };
  }
}
