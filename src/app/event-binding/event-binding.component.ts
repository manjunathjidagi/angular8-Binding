import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <p>Hello From Event Binding</p>
    <p>
      <button (click)="clickButton()">Greet Me</button>
      {{greeting}}
    </p>
    <p>
      <button (click)="clickButton2($event)">Greet Me Twice</button>
      {{event_type}}
    </p>
    <p>
      <button (click)="greeting_2='Hey Buddy'">This is Cool</button>
      {{greeting_2}}
    </p>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greeting = ""
  public event_type = ""
  public greeting_2 = ""

  constructor() { }
  ngOnInit(): void {
  }

  clickButton(){
    console.log("Button is Clicked.. Welcome")
    this.greeting = "Welcome to Style Binding Tutorial"
  }

  clickButton2(event){
    console.log(event)
    console.log(event.type)
    this.event_type = event.type
  }
}
