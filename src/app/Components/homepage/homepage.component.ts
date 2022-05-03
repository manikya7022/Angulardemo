import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  data!: {name: string, occupation: string, email:string, password: string };
  edit: boolean = false;
  constructor(private r: Router) { }

  ngOnInit(): void {
    this.getData();
    //console.log(this.data);
  }

  getData() {
    var temp = localStorage.getItem("SimpleProjectData");
    //if(temp === null){
     // this.r.navigate(["first-page"]);
    //}
    this.data = JSON.parse(temp!==null? temp:'');
  }

  updateData() {
    localStorage.setItem("SimpleProjectData", JSON.stringify(this.data));
    this.getData();
    this.edit = false;
  }

}
