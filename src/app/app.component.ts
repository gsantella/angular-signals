import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  providers: [
    { provide: DataService, useClass: DataService }, // Regular provider
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-signals';

  constructor(public dataService: DataService) {}
}
