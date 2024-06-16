import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
darkModeSignal = signal<string>(
  JSON.parse(window.localStorage.getItem('darkModeSignal') ?? 'null')
);
 
  updateDarkMode(){
    this.darkModeSignal.update((value)=>(value === "dark" ? "null": "dark"));
  }
  constructor() { 
    effect(()=>{
      window.localStorage.setItem('darkModeSingnal', JSON.stringify(this.darkModeSignal()));
    })
  }
}
