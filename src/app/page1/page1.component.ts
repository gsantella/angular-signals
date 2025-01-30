import { Component } from '@angular/core';
import { AppStateServiceService } from '../app-state-service.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page1',
  imports: [FormsModule,RouterLink],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  constructor(public appState:AppStateServiceService){
  }

}
