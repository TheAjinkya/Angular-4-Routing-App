import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'admin-cmp',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message : string = "Third Compnent" 


  constructor() { }

  ngOnInit() {
    
}

  

}
