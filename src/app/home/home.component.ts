import { Component } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";
import { EasymodeService } from '../easymode.service';
import { C1Component } from "../c1/c1.component";

@Component({
  selector: 'app-home',
  imports: [CounterComponent, C1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  range: number[] = Array.from({ length: 4 }, (_, i) => i + 1);
  constructor(public globalNum:EasymodeService){}

}
