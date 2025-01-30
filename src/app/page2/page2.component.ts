import { Component } from '@angular/core';
import { AppStateServiceService } from '../app-state-service.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [FormsModule, RouterLink],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  constructor(public appState:AppStateServiceService){}
    
}

