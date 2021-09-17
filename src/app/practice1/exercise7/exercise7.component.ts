import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css']
})
export class Exercise7Component implements OnInit {
  
  constructor() {
    this.A = 0;
    this.B = 0;
    this.C = 0;
    this.ALERT = "";
  }
  A:number;
  B:number;
  C:number;
  X1=0;
  X2=0;
  X3=0;
  X4=0;
  ALERT="";
  ngOnInit(): void {
  }
  tinh() {
    let pt = new PhuongTrinh(this.A, this.B, this.C);
    let giai = pt.giai();
    
    if(giai == 0) {
      this.ALERT = "Phương trình vô nghiệm";
    } else if(giai == 1) {
      if(pt.X1 < 0) {
        this.ALERT = "Phương trình vô nghiệm";
      } else if(pt.X1 == 0) {
        this.ALERT = "Phương trình có 1 nghiệm";
        this.X1 = 0;
      } else {
        this.ALERT = "Phương trình có 2 nghiệm";
        this.X1 = Math.sqrt(pt.X1);
        this.X2 = -Math.sqrt(pt.X1);
      }
    } else {
      if(pt.X1 < 0) {
        if(pt.X2 < 0) {
          this.ALERT = "Phương trình vô nghiệm";
        } else if(pt.X1 == 0) {
          this.ALERT = "Phương trình có 1 nghiệm";
          this.X1 = 0;
        } else {
          this.ALERT = "Phương trình có 2 nghiệm";
          this.X1 = Math.sqrt(pt.X2);
          this.X2 = -Math.sqrt(pt.X2);
        }
      } else if(pt.X1 == 0) {
        if(pt.X2 < 0) {
          this.ALERT = "Phương trình có 1 nghiệm";
          this.X1 = 0;
        } else {
          this.ALERT = "Phương trình có 3 nghiệm";
          this.X1 = Math.sqrt(pt.X2);
          this.X2 = -Math.sqrt(pt.X2);
          this.X3 = 0;
        }
      } else {
        if(pt.X2 < 0) {
          this.ALERT = "Phương trình có 2 nghiệm";
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
        } else if(pt.X2 == 0) {
          this.ALERT = "Phương trình có 3 nghiệm";
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
          this.X3 = 0;
        } else {
          this.ALERT = "Phương trình có 4 nghiệm";
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
          this.X3 = Math.sqrt(pt.X2);
          this.X4 = -Math.sqrt(pt.X2);
        }
      }
    }
  }
}
export class PhuongTrinh {
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