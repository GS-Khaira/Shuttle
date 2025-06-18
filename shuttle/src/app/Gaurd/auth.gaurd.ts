import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this._authService.checkSession().pipe(
      map(res => {
        if (res.loggedIn) {
          return true;
        } else {
          this.router.navigate(['/signIn']); // redirect if not logged in
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/signIn']); // redirect on error
        return of(false);
      })
    );
  }
}
