import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input type="text" [value]="name">
      <div> {{ name }} </div> 
    </div>
  `
})

export class AppComponent {
  name: string;
  constructor() {
    this.name = 'Steven';
  }
}