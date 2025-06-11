import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  email = '';
  password = '';
  confirmPassword = '';
  error = '';

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {}

  onSignup() {
    this._authService.signup(this.email, this.password).subscribe({
      next: (_) => {
        this._router.navigate(['/signIn']);
      },
      error: (err) => {
        this.error = err.error.message;
      }
    });
  }
}
