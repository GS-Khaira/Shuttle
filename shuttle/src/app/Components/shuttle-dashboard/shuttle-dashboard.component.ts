import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shuttle-dashboard',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './shuttle-dashboard.component.html',
  styleUrl: './shuttle-dashboard.component.scss'
})
export class ShuttleDashboardComponent {

}
