import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

     let ds:any = [
      {hoten: 'Hoang Thuy Dung', diemthi: 9, quequan: 'HungYen'},
      {hoten: 'Tran Thi An', diemthi: 10, quequan: 'HaiPhong'},
      {hoten: 'Nguyen Thi Mai', diemthi: 10, quequan: 'HaNoi'},
    ];
    let kq = ds.filter((x:any) => x.quequan == 'HaiPhong' && x.diemthi >= 8);
    //  console.log("kq" + JSON.stringify(kq));
    //  for(let x of kq)
    //   console.log(x.hoten);
    // }
    let abc = kq.map((x:any) => {return x.hoten});
    console.log(abc);
  }
}
