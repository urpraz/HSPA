import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  properties: Array<any> = [
    {
      "Id": 1,
      "Name":"Tata Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id": 2,
      "Name":"Birla House",
      "Type":"House",
      "Price":10000
    },
    {
      "Id": 3,
      "Name":"Tata House",
      "Type":"House",
      "Price":15000
    },
    {
      "Id": 4,
      "Name":"Eric House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id": 5,
      "Name":"Erose House",
      "Type":"House",
      "Price":10000
    },
    {
      "Id": 6,
      "Name":"Lava House",
      "Type":"House",
      "Price":15000
    }
]

  ngOnInit(): void {
  }

}
