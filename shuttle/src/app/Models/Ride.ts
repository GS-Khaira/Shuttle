export interface RideData {
  from: string;
  to: string;
  date: string;       
  time: string;
  luggage: boolean;
  redirection: boolean;
  seats: number;
  price: number;
  comments: string;
}

export interface RideWithDriverData extends RideData {
  user: userDriver; 
}

interface userDriver {
  driver_name: string
}

export interface PostRideResponse {
  success: boolean;
  rideId?: number; 
  error?: string;
  message: string;
}

export interface FindRideData {
  from: string;
  to: string;
  date: Date;
}

