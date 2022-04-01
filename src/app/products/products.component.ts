import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:any[]=[
  {ProductId:100, ProductName:'OPPO 123',Category:'Mobile', Price:13000, AvailableStock:40},
  {ProductId:101, ProductName:'DELL 2342',Category:'Computer', Price:30000, AvailableStock:6},
  {ProductId:102, ProductName:'FastTrack 09',Category:'Watch', Price:7000, AvailableStock:10},
  {ProductId:103, ProductName:'SAMSUNG S3',Category:'Mobile', Price:18000, AvailableStock:0}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
