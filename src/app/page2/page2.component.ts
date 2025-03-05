import { Component } from '@angular/core';
import { SignalService } from '../shared/signal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page2',
  imports: [FormsModule],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  constructor(public signalService: SignalService) {}
}
