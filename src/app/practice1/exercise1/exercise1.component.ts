import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  constructor() { }
  s=0;
  n: any;
  x: any;
  ngOnInit(): void {

  }
  tinh(){
    for(let i=1;i<=this.n;++i){
        this.s = this.s + (Math.pow(this.x,i));
    }
  }
}
