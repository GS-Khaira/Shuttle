import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PostRideComponent } from './Components/post-ride/post-ride.component';
import { FindShuttleComponent } from './Components/find-shuttle/find-shuttle.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'post-ride', component: PostRideComponent },
    { path: 'find-shuttle', component: FindShuttleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
