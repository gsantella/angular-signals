import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatastorageService } from '../datastorage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [FormsModule, RouterLink],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  adata: any = ""

  edata: any = ""

  constructor(public datastorageService: DatastorageService) {}

}
