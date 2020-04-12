import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <p>Hello ... I am style Binding</p>
    <p [style.color]="'blue'">Hello World</p>
    <p [style.color]="hasError ? 'red' : 'blue'">Using Ternary Operator</p>
    <p [style.color]="highlightColor">Heyyyy Dude</p>
    <p [ngStyle]="styleObj">I am from object</p>
  `,
  styles: [`

  `]
})
export class StyleBindingComponent implements OnInit {

  public hasError = true
  public highlightColor = "orange"
  public styleObj = {
    color: "blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
