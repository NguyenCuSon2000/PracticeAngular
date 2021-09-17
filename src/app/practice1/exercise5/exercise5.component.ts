import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.component.html',
  styleUrls: ['./exercise5.component.css']
})
export class Exercise5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let sochinhphuong = (n:number) =>{
      return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    }
    let s = [3,4,8,10,25,55].filter(sochinhphuong);
    console.log(s);
  }

}
