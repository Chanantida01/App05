import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  items=[
    {
      id:1,
      name:'product A',
      price: 200,
      detail:'this is a product A',
      imageURL: 'https://www.oishigroup.com/upload_file/beverage/190523041619_Hi-res-Oishi-380-ml-Original-TH.png',
    },
    {
      id:2,
      name:'product B',
      price: 200 ,
      detail:'this is a product B',
      imageURL: 'https://www.oishigroup.com/upload_file/beverage/190523040227_Hi-res-Oishi-350-ml-HL-TH.png',
    }, {
      id:3,
      name:'product C',
      price: 200 ,
      detail:'this is a product C',
      imageURL: 'https://www.oishigroup.com/upload_file/beverage/210126091417_%E0%B8%AD%E0%B8%87%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%84%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B9%82%E0%B8%AE%20%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%AA%20%E0%B8%8B%E0%B8%B5%20380ml.png',
    },
    {
      id:4,
      name:'product D',
      price: 200 ,
      detail:'this is a product D',
      imageURL: 'https://www.taraad.com/photo/product/1608527888_ec62f57b3ed0eae8554f.jpg',
    }
  ]

}
