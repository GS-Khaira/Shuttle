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

