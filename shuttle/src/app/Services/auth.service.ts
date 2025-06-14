import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionResponse } from '../Models/Session-Response';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; 
  private sessionStatus = new BehaviorSubject<boolean>(false);

  sessionStatus$ = this.sessionStatus.asObservable();

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/signup`, { email, password });
  }

  signIn(email: string, password: string) {
 return this.http.post<SessionResponse>(`${this.baseUrl}/signIn`, { email, password }, { withCredentials: true })
      .pipe(tap(res => {
        if (res.loggedIn) {
          this.sessionStatus.next(true); // emit login
        }
      }));  }

  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => {
        this.sessionStatus.next(false); // emit logout
      })
    );
  }

  checkSession() {
  return this.http.get<SessionResponse>(`${this.baseUrl}/checkSession`, { withCredentials: true }).pipe(tap(res => {
        this.sessionStatus.next(res.loggedIn); // emit current session state
      }));
  }
}
