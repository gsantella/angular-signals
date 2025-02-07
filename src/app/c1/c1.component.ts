import { Component, signal, Signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c1',
  imports: [FormsModule],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {

  firstName = signal('John')

  lastName = signal('Smith')

  fullName(): string {
    return `${this.firstName()} ${this.lastName()}`
  }

val1: string = ''
val2: string = ''

  updateName() {

    this.firstName.set(this.val1)
    this.lastName.set(this.val2)
    
  }

  xCoords: number = 0

  yCoords: number = 0

  onClick($event: MouseEvent) {
    console.log($event);
    this.xCoords = $event.clientX
    this.yCoords =  $event.clientY

  }


}
