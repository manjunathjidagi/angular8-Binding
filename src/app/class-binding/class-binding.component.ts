import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <p>Hello From Class Binding</p>
    <p class="text-success">I am Successful</p>
    <p [class]="successClass">I am Successful in Binding</p>
    <p class="text-special" [class]="successClass">I am from two Classes with different method</p>
    <p [class.text-danger]="hasError">I am conditional Error</p>
    <p [ngClass]="propObj">I am from Object</p>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {

  public successClass = "text-success"
  public hasError = true
  public isSpecial = true
  public propObj = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

}
