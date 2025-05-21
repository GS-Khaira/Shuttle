import { Component } from '@angular/core';
import { ShuttleDashboardComponent } from './Components/shuttle-dashboard/shuttle-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [ShuttleDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shuttle';
}
