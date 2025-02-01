import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatastorageService } from '../datastorage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page3',
  imports: [FormsModule, RouterLink],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {

constructor(public datastorageService: DatastorageService) {}

}
