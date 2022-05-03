import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor(public _r: Router) { }

  data: {name: string, occupation: string, email:string, password: string ,city:string }={
    name: '',
    occupation: '',
    email: '',
    password: '',
    city: ''
  };
  ngOnInit(): void {
  }

  setData() {
    localStorage.setItem("SimpleProjectData", JSON.stringify(this.data));
    this._r.navigate(['home-page']);
  }
  setAm(){
    this._r.navigate(['Hello']);
  }

}
