import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  constructor(public dataService: DataService) {}

  updateField(field: string, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.dataService.updateField(field, input.value);
    }
  }
}
