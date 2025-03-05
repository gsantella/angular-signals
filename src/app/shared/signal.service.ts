import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  firstName = signal('Nathan');
  lastName = signal('Suhoney');
  age = signal(20);
  email = signal('nsuhoney@example.com');
}
