import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

message : string = "Marvellous Infosystem";
stringLength : number;
capsString : string;

clicked() : void{

 this.message = "Button Clicked!";

}

myStringLength(): void{

this.stringLength = this.message.length;

}

myCapitalString(): void{

this.capsString = this.message.toUpperCase();

}

  constructor() { }

  ngOnInit() {
  }



}
