import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: Object;
  loading : boolean;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").map(
      (response) ⇒ response.json()
      ).
      subscribe(
        (data) ⇒ {this.displaydata(data);}
  )
}

  

}
