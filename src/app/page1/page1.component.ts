import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatastorageService } from '../datastorage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page1',
  imports: [FormsModule, RouterLink],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

constructor(public datastorageService: DatastorageService) {}

}
