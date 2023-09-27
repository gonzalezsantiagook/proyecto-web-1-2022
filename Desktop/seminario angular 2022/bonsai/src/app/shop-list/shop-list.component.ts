import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  carrito = {
    "nombre": "Arce Japones",
    "tipo" : "Shito",
    "precio" :"$2500",
    "stock" : "8 unidades",
    "imagen" : "assets/img/japones.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
