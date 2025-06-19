import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RideService } from '../../Services/ride.service';
import { FindRideData, RideData } from '../../Models/Ride';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-find-shuttle',
  imports: [],
  templateUrl: './find-shuttle.component.html',
  styleUrl: './find-shuttle.component.scss'
})
export class FindShuttleComponent implements OnInit {
  rideValues: FindRideData = {
    from: '',
    to: '',
    date: new Date(),
  }
  foundRides: RideData[]= [];

  private destroy$ = new Subject<void>();


  constructor(
    private _router: Router,
    private _rideService: RideService
  ) {}

  ngOnInit() {
    this._rideService.homeRideData$
      .pipe(
        takeUntil(this.destroy$),
        switchMap(data => {
          if (data) {
            this.rideValues = data;
            // Call findRide and return its Observable to continue the stream
            return this._rideService.findRide(this.rideValues);
          } else {
            // If no data, return empty observable to avoid errors
            return [];
          }
        })
      )
      .subscribe({
        next: (result) => {
          this.foundRides = result;
          console.log('Ride search results:', result);
        },
        error: (error) => {
          console.error('Error fetching rides:', error);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
