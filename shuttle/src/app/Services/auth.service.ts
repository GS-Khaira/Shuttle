import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/signup`, { email, password });
  }

  signIn(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/signIn`, { email, password }, { withCredentials: true });
  }

  checkSession() {
  return this.http.get(`${this.baseUrl}/checkSession`, { withCredentials: true });
  }
}
