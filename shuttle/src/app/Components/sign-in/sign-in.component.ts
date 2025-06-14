import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  email = '';
  password = '';
  error = '';

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {}

  onSignIn() {
    this._authService.signIn(this.email, this.password).subscribe({
      next: (response) => {
        this.error = '';
        console.log(response);
        this._router.navigate(['/home']);
      },
      error: (err) => {
        this.error = err.error.message;
      }
    });
  }
}
