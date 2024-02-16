import { Iproduct } from 'src/app/interfaces/iproduct.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-comprados',
  templateUrl: './total-comprados.component.html',
  styleUrls: ['./total-comprados.component.css']
})
export class TotalCompradosComponent {
total: number = 0;

@Input() envioCantisPrecio: Iproduct[] = [];

ngDoCheck(){
  this.total = 0;
  this.envioCantisPrecio.forEach((producto) => {
    this.total += producto.precio * producto.cantidad
    console.log(this.total)
  })

}
}
