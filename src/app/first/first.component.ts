import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  message : string = "First Component"

  firstName : string = "Ajinkya";
  lastName : string = "Chanshetty"
  myName : string;

  fullName() : void {

    this.myName =  (this.firstName + " "+ this.lastName)

  }

  constructor() { }

  ngOnInit() {
  }

}
