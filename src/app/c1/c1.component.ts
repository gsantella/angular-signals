import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-c1',
  imports: [FormsModule],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {
  protected cordX:WritableSignal<string>= signal('')
  protected cordY:WritableSignal<string> = signal('')
  protected readonly coords:Signal<string> = computed(()=>{return `${this.cordX()}, ${this.cordY()}`})
  protected clicked: WritableSignal<boolean> = signal(false)
  private firstName:WritableSignal<string>= signal('')
  private lastName:WritableSignal<string> = signal('')
  protected readonly fullName:Signal<string> = computed(()=>{return `${this.firstName()} ${this.lastName()}`})
  protected appendName(event:MouseEvent){
    this.firstName.set("John")
    this.lastName.set("Smith")
    this.cordX.set(event.screenX.toString())
    this.cordY.set(event.screenY.toString())
    this.fullName()
    this.clicked.set(true)
    console.log(this.clicked())
    this.coords()
  }
}
