import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
      <input [id]="myId" type="text" value="hello" />
      <input id="{{myId}}" type="text" value="hello" />
      <input type="text" value="Disabled Text Box" disabled="false" />
      <input type="text" [disabled]="isDisabled" value="Disabled Can change with property binding" />
      <input type="text" bind-disabled="isDisabled" value="Disabled Can change with property binding" />
    </p>
  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {


  public myId = "testId"
  public isDisabled = true
  constructor() { }

  ngOnInit(): void {
  }

}
