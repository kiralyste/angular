import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)">
      
        <template [ngIf]="name.length > 2">
          Searching for ... {{ name }}
        </template>
      
        <div *ngIf="name.length > 2"> 
          Searching for ... {{ name }}
        </div> 
    </div>
  `
})

export class AppComponent {
  name: string;
  constructor() {
    this.name = '';
  }
  handleClick(value: string) {
    console.log(value);
  }

  handleChange(value: string) {
    this.name = value;
    console.log(value);
  }
}