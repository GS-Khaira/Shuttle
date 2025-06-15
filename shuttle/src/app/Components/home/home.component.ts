import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

export enum ShuttleActions {
  FIND = 'Find a Ride',
  OFFER = 'Offer to Ride',
  SEND_LUGGAGE = 'Send Luggage',
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  shuttleOptions = Object.values(ShuttleActions);
  selectedShuttleOption: string = '';

  constructor(private router: Router,
      private _authService: AuthService
  ) {}

  onSelectedShuttleFunctionality(functionlity: string){
    this.selectedShuttleOption = functionlity;
  }

  onContinue(){
    if(this.selectedShuttleOption == ShuttleActions.OFFER){
      this.router.navigate(['/post-ride']);
    }else if(this.selectedShuttleOption == ShuttleActions.FIND || this.selectedShuttleOption == ShuttleActions.SEND_LUGGAGE){
      this.router.navigate(['/find-shuttle']);
    }
  }
}