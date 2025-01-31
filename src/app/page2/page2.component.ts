import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  constructor(public dataService: DataService) {}

  updateField(field: string, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.dataService.updateField(field, input.value);
    }
  }
}
