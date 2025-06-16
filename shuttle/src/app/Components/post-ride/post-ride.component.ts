import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RideService } from '../../Services/ride.service';

@Component({
    selector: 'app-post-ride',
    templateUrl: './post-ride.component.html',
    imports: [FormsModule],
    styleUrls: ['./post-ride.component.scss']
})
export class PostRideComponent{
     ride = {
        from: '',
        to: '',
        date: '',
        time: '',
        luggage: false,
        redirection: false,
        seats: 0,
        price: 0,
        comments: ''
  };

  constructor(private rideService: RideService) {}

  onSubmit() {
    this.rideService.postRide(this.ride).subscribe({
      next: res => {
        console.log('Ride posted:', res);
      },
      error: err => {
        console.error('Failed to post ride:', err);
      }
    });
  }
}