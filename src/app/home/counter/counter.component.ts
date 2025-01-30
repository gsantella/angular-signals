import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EasymodeService } from '../../easymode.service';
@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() counterNumber!:number;
  localNum:number = 0
  constructor(public globalNum:EasymodeService){}
  increment(){
    this.localNum++   
    this.globalNum.counter.set(this.localNum)

  }

}
