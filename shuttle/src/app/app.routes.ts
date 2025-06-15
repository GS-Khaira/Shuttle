import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PostRideComponent } from './Components/post-ride/post-ride.component';
import { FindShuttleComponent } from './Components/find-shuttle/find-shuttle.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AuthGuard } from './Gaurd/auth.gaurd';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'post-ride', component: PostRideComponent, canActivate: [AuthGuard]},
    { path: 'find-shuttle', component: FindShuttleComponent },
    { path: 'signIn', component: SignInComponent},
    { path: 'signUp', component: SignUpComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
