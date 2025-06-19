import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FindRideData } from '../../Models/Ride';
import { FormsModule } from '@angular/forms';
import { RideService } from '../../Services/ride.service';

export enum ShuttleActions {
  FIND = 'Find a Ride',
  OFFER = 'Offer to Ride',
  SEND_LUGGAGE = 'Send Luggage',
}

@Component({
  selector: 'app-home',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  shuttleOptions = Object.values(ShuttleActions);
  selectedShuttleOption: string = '';
  rideValues: FindRideData = {
    from: '',
    to: '',
    date: new Date(),
  }

  constructor(
    private _router: Router,
    private _rideService: RideService
  ) {}

  onSelectedShuttleFunctionality(functionlity: string){
    this.selectedShuttleOption = functionlity;
  }

  onContinue(){
    this._rideService.setFormData(this.rideValues);
    if(this.selectedShuttleOption == ShuttleActions.OFFER){
      this._router.navigate(['/post-ride']);
    }else if(this.selectedShuttleOption == ShuttleActions.FIND || this.selectedShuttleOption == ShuttleActions.SEND_LUGGAGE){
      this._router.navigate(['/find-shuttle']);
    }
  }
}