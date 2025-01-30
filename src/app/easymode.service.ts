import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EasymodeService {
  counter = signal(0)
}