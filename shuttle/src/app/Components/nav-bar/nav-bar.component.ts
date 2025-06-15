import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  isLoggedIn:boolean = false;

  constructor(
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authService.sessionStatus$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

    // Initial check when component loads
    this._authService.checkSession().subscribe();
  }

  logOut(){
    this._authService.logout().subscribe();
  }
}
