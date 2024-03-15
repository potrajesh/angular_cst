import { Component } from '@angular/core';

@Component({
  selector: 'app-repairs-component',
  templateUrl: './repairs-component.component.html',
  styleUrls: ['./repairs-component.component.css']
})
export class RepairsComponentComponent {

  test(){

    alert("hello");
    console.log("iam in repairs component");

  }
}

