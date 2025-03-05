import { Component } from '@angular/core';
import { SignalService } from '../shared/signal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page3',
  imports: [FormsModule],
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  webhookUrl = 'https://webhook.site/d5090f51-5890-4a9e-8148-904cbf33e40c';

  constructor(private signalService: SignalService) {}

  sendData() {
    const data = {
      firstName: this.signalService.firstName(),
      lastName: this.signalService.lastName(),
      age: this.signalService.age(),
      email: this.signalService.email()
    };

    fetch(this.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
  }
}
