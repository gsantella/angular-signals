import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateServiceService {

  constructor() { }

  globalNum = signal(500)
}
