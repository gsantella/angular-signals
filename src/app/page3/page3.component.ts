import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  constructor(public dataService: DataService) {}

  updateField(field: string, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.dataService.updateField(field, input.value);
    }
  }

  submitForm() {
    const formData = {
      firstname: this.dataService.firstname(),
      lastname: this.dataService.lastname(),
      age: this.dataService.age(),
      email: this.dataService.email(),
      webhookUrl: this.dataService.webhookUrl()
    };

    if (formData.webhookUrl) {
      fetch(formData.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Data submitted successfully:', data);
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
    } else {
      console.error('Webhook URL is missing.');
    }
  }
}
