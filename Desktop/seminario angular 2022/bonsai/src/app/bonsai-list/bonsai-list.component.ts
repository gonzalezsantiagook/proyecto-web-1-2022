import { Component, OnInit } from '@angular/core';
import { Bonsai } from './bonsai';

@Component({
  selector: 'app-bonsai-list',
  templateUrl: './bonsai-list.component.html',
  styleUrls: ['./bonsai-list.component.scss']
})
export class BonsaiListComponent implements OnInit {
  
  bonsais : Bonsai[] = [
    {
      "name": "Arce Japones",
      "type" : "Shito",
      "price" :2500,
      "stock" : 8,
      "image" : "assets/img/japones.jpg",
      clearance:true,
    },
    {
      "name": "Alerse",
      "type" : "Shohin",
      "price" :2000,
      "stock" : 0,
      "image" : "assets/img/alerce.jpg",
      clearance: false,
    },
    {
      "name": "Ficus",
      "type" : "Literati",
      "price" :3000,
      "stock" : 20,
      "image" : "assets/img/ficus.jpg",
      clearance : false,
    }
]
  constructor() { };

  ngOnInit(): void {
  }

}
