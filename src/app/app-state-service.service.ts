import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateServiceService {
  age:Signal<string>= signal('')
  email:Signal<string>=signal('')
  lN:Signal<string>=signal('')
  fN:Signal<string>=signal('')
  

  constructor() { }
  jsonTime(){
    console.log()
    return {
      age:this.age(),
      email:this.email(),
      lN:this.lN(),
      fN:this.fN()

    }
  }
 
}
