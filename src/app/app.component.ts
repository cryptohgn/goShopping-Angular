import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';
import { Iproduct } from './interfaces/iproduct.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProductos: Iproduct[] = [
    { id: 1, titulo: 'Leche', precio: 0.58, cantidad: 6, comprado: false },
    { id: 2, titulo: 'Carne', precio: 8.50, cantidad: 2, comprado: false },
    { id: 3, titulo: 'Pescado', precio: 12.00, cantidad: 1, comprado: false },
    { id: 4, titulo: 'Huevos', precio: 4.30, cantidad: 1, comprado: false },
    { id: 5, titulo: 'Papel higienico', precio: 2.10, cantidad: 2, comprado: false },
  ];

  arrProdComprados: Iproduct[] = [];

  addProdArrPComprados($event: Iproduct){
    this.arrProdComprados.push($event)
    this.arrProductos = this.arrProductos.filter(product => product.id !== $event.id)
    console.log(this.arrProdComprados)
    
  }
  removeArrProduct($event:any){
    this.arrProductos = this.arrProductos.filter(product => product.id !== $event)
  }
}