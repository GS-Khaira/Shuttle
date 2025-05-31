import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-ride',
    templateUrl: './post-ride.component.html',
    styleUrls: ['./post-ride.component.scss']
})
export class PostRideComponent{
    constructor(private router: Router) {}
    postRide(){
        this.router.navigate(['/home']);
    }
}