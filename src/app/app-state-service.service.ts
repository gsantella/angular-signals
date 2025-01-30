import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateServiceService {
  age = signal('')
  email=signal('')
  lN=signal('')
  fN=signal('')
  

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
