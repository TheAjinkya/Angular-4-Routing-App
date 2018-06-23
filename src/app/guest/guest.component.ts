import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guest-cmp',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  name : string;
  firstName : string;
  lastName : string;
  companyName: string;
  constructor() {

    this.name = "Guest"
    this.firstName = "Ajinkya"
    this.lastName = "Chanshetty"
    this.companyName = "Marvellous Infosystem"
   }

  ngOnInit() {
  }

}
