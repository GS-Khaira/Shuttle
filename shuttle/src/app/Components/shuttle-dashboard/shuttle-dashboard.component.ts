import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-shuttle-dashboard',
  imports: [NavBarComponent, HomeComponent],
  templateUrl: './shuttle-dashboard.component.html',
  styleUrl: './shuttle-dashboard.component.scss'
})
export class ShuttleDashboardComponent {

}
