import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers ()</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"></span> 
         {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      <h3>Airline Passengers (with ngClass)</h3>
      <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [ngClass]="{
            'checked-in' : passenger.checkedIn,
            'checked-out' : !passenger.checkedIn
          }"></span> 
       {{ i }}: {{ passenger.fullname }}
      </li>
      </ul>
      <h3>Airline Passengers (with style)</h3>
      <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"></span> 
       {{ i }}: {{ passenger.fullname }}
      </li>
      </ul>
      <h3>Airline Passengers (with ngStyle)</h3>
      <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [ngStyle]="{
            backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
          }"></span> 
       {{ i }}: {{ passenger.fullname }}
      </li>
      </ul>
      <h3>Airline Passengers (with ngStyle and JSON-Pipes) </h3>
      <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [ngStyle]="{
            backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
          }"></span> 
       {{ i }}: {{ passenger.fullname }}
       <p>{{ passenger | json }}</p>
       <div class="date">
          Check in date:
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
       </div>
      </li>
      </ul>
      <h3>Airline Passengers (with ngStyle and JSON-Pipes and safe navigation operator) </h3>
      <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [ngStyle]="{
            backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
          }"></span> 
       {{ i }}: {{ passenger.fullname }}
       <p>{{ passenger | json }}</p>
       <div class="date">
          Check in date:
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
       </div>
       <div class="children">
          children: {{ passenger.children?.length || 0}}
       </div>
      </li>
      </ul>
    </div>
  `
})

export class AppComponent {
  passengers: Passenger[];
  constructor() {
    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12},
                  {name: 'Chloe', age: 7}]
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{name: 'Jessica', age: 1}]
    }, {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }];
  }



  handleClick(value: string) {
    console.log(value);
  }

  handleChange(value: string) {
    console.log(value);
  }
}