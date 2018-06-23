import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

firstNum : number;
secondNum : number;
addition : number;
substraction : number;
multiplication : number;
division : number;

add(): void {

this.addition = (this.firstNum + this.secondNum)  
}

sub(): void {

this.substraction = (this.firstNum - this.secondNum)  
}

multi(): void {

this.multiplication = (this.firstNum * this.secondNum)  
}

div(): void{

this.division = (this.firstNum / this.secondNum)  

}

  constructor() { }

  ngOnInit() {
  }

}
