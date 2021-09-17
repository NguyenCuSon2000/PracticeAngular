import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let ds:any[] = [{hoten: 'Nguyen Thi Mai', diemthi:9},{hoten: 'Tran Thi Anh', diemthi:7.5},{ hoten: 'Hoang Thi Dung', diemthi:8.3}];
    ds.forEach((x:any) => {
      let n =  x.hoten.lastIndexOf(' ');
      x.tenho =  x.hoten.substr(n+1) + ' ' + x.hoten.substr(0,n); 
    });
    let kq =  ds.sort((x:any,y:any) => x.tenho > y.tenho?1:-1);
    console.log("kq" + JSON.stringify(kq));
  }

}
