import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  products =  [
    {
      "id": "1004",
      "code": "h456wer53",
      "name": "Highway Security Guardrails",
      "description": "Construction Materials",
      "image": "xuti.PNG",
      "price": 2300,
      "category": "Accessories",
      "quantity": 10,
      "inventoryStatus": "INSTOCK",
      "rating": 4
    },
      
      {
        "id": "1001",
        "code": "nvklal433",
        "name": "XCMG Pave Width 8m RP803",
        "description": "Product Description",
        "image": "ori.PNG",
        "price": 4300,
        "category": "Construction Materials",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      
      {
        "id": "1003",
        "code": "244wgerg2",
        "name": "Galvanized & Polyethylene",
        "description": "Construction Materials",
        "image": "otxi.PNG",
        "price": 2500,
        "category": "Clothing",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "Penetration grade Bitumen",
        "description": "Product Description",
        "image": "sami.PNG",
        "price": 950,
        "category": "Construction Materials",
        "quantity": 1,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1000",
        "code": "f230fh0g3",
        "name": "Hidraulic Excavator (1-4 tons)",
        "description": "Product Description",
        "image": "erti.PNG",
        "price": 4500,
        "category": "Construction Equipment",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
    ]

  sortOptions: any[];

  sortOrder: number;

  sortField: string;

  sourceCities: any[];

  targetCities: any[];

  orderCities: any[];

  constructor() {
  }

  ngOnInit() {

      this.sourceCities = [
          {name: 'San Francisco', code: 'SF'},
          {name: 'London', code: 'LDN'},
          {name: 'Paris', code: 'PRS'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Berlin', code: 'BRL'},
          {name: 'Barcelona', code: 'BRC'},
          {name: 'Rome', code: 'RM'}];
      this.targetCities = [];

      this.orderCities = [
          {name: 'San Francisco', code: 'SF'},
          {name: 'London', code: 'LDN'},
          {name: 'Paris', code: 'PRS'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Berlin', code: 'BRL'},
          {name: 'Barcelona', code: 'BRC'},
          {name: 'Rome', code: 'RM'}];

      this.sortOptions = [
          {label: 'Price High to Low', value: '!price'},
          {label: 'Price Low to High', value: 'price'}
      ];
  }
}
