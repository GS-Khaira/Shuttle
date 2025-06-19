import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FindRideData, PostRideResponse, RideData } from '../Models/Ride';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private baseUrl = 'http://localhost:3000'; // adjust as needed
  private homeRideDataSubject = new BehaviorSubject<any>(null); // can be a specific type
  homeRideData$ = this.homeRideDataSubject.asObservable();
  
  constructor(private http: HttpClient) {}

  setFormData(data: any) {
    this.homeRideDataSubject.next(data);
  }

  postRide(rideData: RideData) {
    return this.http.post<PostRideResponse>(`${this.baseUrl}/postRide`, rideData, { withCredentials: true });
  }

  findRide(findRideData: FindRideData){
    return this.http.get<RideData[]>(`${this.baseUrl}/findRide`, {
    params: {
        from: findRideData.from,
        to: findRideData.to,
        date: (findRideData.date instanceof Date)
        ? findRideData.date.toISOString().split('T')[0] // convert Date to 'YYYY-MM-DD'
        : findRideData.date,
      }
    });
  }
}
