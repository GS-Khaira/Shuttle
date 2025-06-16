import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private baseUrl = 'http://localhost:3000'; // adjust as needed

  constructor(private http: HttpClient) {}

  postRide(rideData: any) {
    return this.http.post(`${this.baseUrl}/postRide`, rideData, { withCredentials: true });
  }
}
