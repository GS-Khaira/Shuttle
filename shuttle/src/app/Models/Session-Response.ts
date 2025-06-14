export interface SessionResponse {
  loggedIn: boolean;
  userId?: number; // Optional, only present when loggedIn is true
  message: string;
}