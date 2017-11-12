import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
        type="text" 
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)">
      <div> {{ name }} </div> 
    </div>
  `
})

export class AppComponent {
  name: string;
  constructor() {
    this.name = 'Steven';
  }
  handleBlur(event: any) {
    this.name = event.target.value;    
    console.log(event);
  }
  handleInput(event: any) {
    this.name = event.target.value;    
    console.log(event);
  }
}