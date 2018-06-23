import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  templateUrl: './marvellous.component.html',
  styleUrls: ['./marvellous.component.css']
})
export class MarvellousComponent implements OnInit {

  name : string = "Inside Marvellous Component"

  constructor() { }

  ngOnInit() {
  }

}
