import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  name : string;
  constructor() {

    this.name = "Guest"
   }

  ngOnInit() {
  }

}
