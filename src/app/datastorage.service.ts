import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  webhook: any = ""

   fN:Signal<string> = signal('')

   lN:Signal<string> = signal('')

   age:Signal<string> = signal('')

   email:Signal<string> = signal('')

  constructor(public http: HttpClient) { }


  sendtospace() {
    const payload = {
      firstname: this.fN(),
      lastname: this.lN(),
      age: this.age(),
      email: this.email(),
    }
  
    this.http.post(this.webhook, payload).subscribe()
  }
}
