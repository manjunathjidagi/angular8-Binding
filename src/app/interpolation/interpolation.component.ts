import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <h2>Interpolation</h2>

    <!-- Interpolation can do -->
    <p>Welcome to {{concept}}</p>
    <p>2 + 2 = {{2+2}}</p>
    <p>{{"Say Hi to "+ concept}}</p>
    <p>Len of concept = {{concept.length}}</p>
    <p>UpperCase = {{concept.toUpperCase()}}</p>
    <p>{{greetUser()}}</p>

    <!-- Interpolation cannot do -->
    
    <!-- Assigning value to variable is not possible -->
    <!--
      <p>{{a = 2}}</p>
    -->

    <!-- Access to Global variables such as window, screen are not possible -->
    <!--
      <p>{{window.location.href}}</p>
    -->

    <!-- But this is possible -->
    <p>{{curr_url}}</p>

  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public concept = "Interpolation"
  public curr_url = window.location.href
  constructor() { }
  ngOnInit(): void {
  }
  greetUser(){
    return "Heyyy "+this.concept
  }
}
