import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-vars',
  template: `
    <p>Welcome to Template Reference Variables</p>

    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Log Input</button>
  `,
  styleUrls: ['./template-ref-vars.component.css']
})
export class TemplateRefVarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(msg){
    console.log(msg)
  }

}
