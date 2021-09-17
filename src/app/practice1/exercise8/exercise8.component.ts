import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise8',
  templateUrl: './exercise8.component.html',
  styleUrls: ['./exercise8.component.css']
})
export class Exercise8Component implements OnInit {

  constructor() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.h = 0;
  }
  a:number;
  b:number;
  c:number;
  h:number;
  kq=0;
  ALERT="";
  tinh(){
    let x = new CHOP(this.a,this.b,this.c,this.h);
    try {
      let tt = x.TheTich();
      this.kq = tt;
    } catch (error) {
      this.ALERT = "Lỗi"+error;
    }
  }
  // let a=5, b=4, c=8, h=5;
  
  ngOnInit(): void {
  }

}
export class TamGiac {
  private a: number;
  private b: number;
  private c: number;
  constructor(a: number, b: number, c:number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  public DienTich() : number {
    if(this.a + this.b > this.c  && this.a + this.c > this.b && this.c + this.b > this.a) {
      let q = (this.a+this.b+this.c)/2;
      return Math.sqrt(q*(q-this.a)*(q-this.b)*(q-this.c));
    } else {
      throw new Error("Ba giá trị a,b,c không thỏa mãn cạnh tam giác"); 
    }
  }
}
export class CHOP extends TamGiac {
  private h:any;
  kq=0;
  constructor(a:number,b:number,c:number,h:number) {
    super(a,b,c);
    this.h=h;
  }
  public TheTich() {
    try {
      let s = this.DienTich();
      this.kq = 1.0/3*this.h*s;
      return 1;
    } catch (error) {
      throw new Error(error + '');
    }
  }
}
