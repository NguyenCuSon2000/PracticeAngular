import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.component.html',
  styleUrls: ['./exercise6.component.css']
})
export class Exercise6Component implements OnInit {

  constructor() { }
  s = [-1,-5,3,4,8,-43,10,25,65];
  tong=0;
  ngOnInit(): void {
    for(let i=0; i<this.s.length;i++)
    {
      if(this.s[i]>0)
      this.tong+=this.s[i];
    }
    console.log(this.tong)
  }

}
