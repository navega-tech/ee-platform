import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  ProductId:number;
  ProductName:string;
  Category:string;
  Price:number;
  AvailableStock:number;
  Description:string;

  studentMarks:number[]=[67,15,90,34,45,64];
  totalScore:number=0;
  avgScore:number=0;
  

  constructor() { }

  ngOnInit(): void {
    this.ProductId=1099;
    this.ProductName="OPPO MobileXYZ Model";
    this.Category="Mobile";
    this.Price=29877;
    this.AvailableStock=7;
    this.Description="Test Product Description";
    for(let i=0;i<this.studentMarks.length;i++){
      this.totalScore=this.totalScore+this.studentMarks[i]
    }
    this.avgScore=(this.totalScore/this.studentMarks.length);

 


  }

}
