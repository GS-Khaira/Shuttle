import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RideService } from '../../Services/ride.service';
import { environment } from '../../../environment/environment';


@Component({
    selector: 'app-post-ride',
    templateUrl: './post-ride.component.html',
    imports: [FormsModule],
    styleUrls: ['./post-ride.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostRideComponent{
  apiKey = environment.googleMapsApiKey;  
  ride = {
        from: '',
        to: '',
        date: '',
        time: '',
        luggage: false,
        redirection: false,
        seats: 1,
        price: 0,
        comments: ''
  };

  @ViewChild('placePicker') placePickerRef!: ElementRef;
  @ViewChild('placeDropper') placeDropperRef!: ElementRef;

  constructor(private rideService: RideService) {}

  ngAfterViewInit(): void {
  const picker = this.placePickerRef.nativeElement as any;
  const dropper = this.placeDropperRef.nativeElement as any;

  picker.addEventListener('gmpx-placechange', (event: any) => {
    this.ride.from = (event.target as any).value.formattedAddress;
  });
  dropper.addEventListener('gmpx-placechange', (event: any) => {
    this.ride.to = (event.target as any).value.formattedAddress;
  });
}

  onSubmit() {
    console.log(this.ride);
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