import { Component } from '@angular/core';
import { SignalService } from '../shared/signal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page1',
  imports: [FormsModule],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  constructor(public signalService: SignalService) {}
}
