import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css']
})
export class Exercise7Component implements OnInit {
  
  constructor() {
    // this.A = 0;
    // this.B = 0;
    // this.C = 0;
    // this.ALERT = "";
  }
  // A:number;
  // B:number;
  // C:number;
  // X1=0;
  // X2=0;
  // X3=0;
  // X4=0;
  // ALERT="";
  ngOnInit(): void {
    
  }
}

export class PTB2 {
  A:number;
  B:number;
  C:number;
  X1=0;
  X2=0;
  constructor(A:number, B:number, C:number) {
    this.A = A;
    this.B = B;
    this.C = C;
  }
  
  giai() {
    let delta = this.B * this.B - 4 * this.A * this.C;
    if (delta < 0) {
      this.X1 = this.X2 = 0.0;
      return 0;
    }
    else if (delta == 0) {
      this.X1 = this.X2 = -this.B / (2 * this.A);
      return 1;
    }
    else {
      delta = Math.sqrt(delta);
      this.X1 = (-this.B + delta) / (2 * this.A);
      this.X2 = (-this.B - delta) / (2 * this.A);
      return 2;
    }
  }
}

export class PTTP extends PTB2 {
  X3=0;
  X4=0;
  constructor(A:number, B:number, C:number){
    super(A,B,C);
  }
  public giaipttp() {
    let pt = new PTB2(this.A, this.B, this.C);
    let giai = pt.giai();
    
    if(giai == 0) {     // Xét vô nghiệm
      console.log("Phương trình vô nghiệm");
    } else if(giai == 1) {   // xét nghiệm kép
      if(pt.X1 < 0) {       // X1 < 0
        console.log("Phương trình vô nghiệm");
      } else if(pt.X1 == 0) {  // X1 =0 
        console.log("Phương trình có 1 nghiệm");
        this.X1 = 0;
        console.log('x1='+this.X1);
      } else {                  // X1 > 0
        console.log("Phương trình có 2 nghiệm");
        this.X1 = Math.sqrt(pt.X1);
        this.X2 = -Math.sqrt(pt.X1);
        console.log('x1='+this.X1);
        console.log('x2='+this.X2);
      }
    } else {              // Xét có 2 nghiệm pb
      if(pt.X1 < 0) {              // X1 < 0
        if(pt.X2 < 0) {            // X2 < 0
          console.log("Phương trình vô nghiệm");
        } else if(pt.X1 == 0) {    // X1 = 0, X2 = 0 
          console.log("Phương trình có 1 nghiệm");
          this.X1 = 0;
          console.log('x1='+this.X1);
        } else {                 // X1 < 0, x2 > 0     
          console.log("Phương trình có 2 nghiệm");
          this.X1 = Math.sqrt(pt.X2);
          this.X2 = -Math.sqrt(pt.X2);
          console.log('x1='+this.X1);
          console.log('x2='+this.X2);
        }
      } else if(pt.X1 == 0) {       // X1 = 0
        if(pt.X2 < 0) {             // X2 < 0
          console.log("Phương trình có 1 nghiệm");
          this.X1 = 0;
          console.log('x1='+this.X1);
        } else {                    // x1 = 0, X2 > 0
          console.log("Phương trình có 3 nghiệm");
          this.X1 = Math.sqrt(pt.X2);
          this.X2 = -Math.sqrt(pt.X2);
          this.X3 = 0;
          console.log('x1='+this.X1);
          console.log('x2='+this.X2);
          console.log('x3='+this.X3);
        }
      } else {   //                   X1 > 0 
        if(pt.X2 < 0) {             //x2<0
          console.log("Phương trình có 2 nghiệm");
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
          console.log('x1='+this.X1);
          console.log('x2='+this.X2);
        } else if(pt.X2 == 0) {      // X1 > 0, X2==0
          console.log("Phương trình có 3 nghiệm");
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
          this.X3 = 0;
          console.log('x1='+this.X1);
          console.log('x2='+this.X2);
          console.log('x3='+this.X3);
        } else {                     // X1 > 0, X2 >0
          console.log("Phương trình có 4 nghiệm");
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
          this.X3 = Math.sqrt(pt.X2);
          this.X4 = -Math.sqrt(pt.X2);
          console.log('x1='+this.X1);
          console.log('x2='+this.X2);
          console.log('x3='+this.X3);
          console.log('x4='+this.X4);
        }
      }
    }
  }
}

let x = new PTTP(5, 3, -26);
x.giaipttp();