import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <p>Hello To Two-Way Binding</p>

    <input [(ngModel)]="name" type="text">
    {{name}}

  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public name="Heeeee"

  constructor() { }

  ngOnInit(): void {
  }

}
