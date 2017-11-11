import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1>{{ title }}</h1>
      <h1 [innerHTML]="title"></h1>
      <img [src]="avatar">
      <input type="text" [value]="name">
      <div> {{ name }} </div> 
    </div>
  `
})

export class AppComponent {
  title: string;
  name: string = 'Steven';
  avatar: string = 'img/avatar.png';
  constructor() {
    this.title = 'Ultimate Angular'
  }
}