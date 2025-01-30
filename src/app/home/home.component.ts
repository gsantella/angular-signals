import { Component } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";
import { EasymodeService } from '../easymode.service';

@Component({
  selector: 'app-home',
  imports: [CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  range: number[] = Array.from({ length: 4 }, (_, i) => i + 1);
  constructor(public globalNum:EasymodeService){}

}
