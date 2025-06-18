import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRideResponse, RideData } from '../Models/Post-Ride-Response';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private baseUrl = 'http://localhost:3000'; // adjust as needed

  constructor(private http: HttpClient) {}

  postRide(rideData: RideData) {
    return this.http.post<PostRideResponse>(`${this.baseUrl}/postRide`, rideData, { withCredentials: true });
  }
}
