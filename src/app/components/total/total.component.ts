import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  @Input() listaProductos: Producto[] = []
  total: number = 0;

  ngOnInit() {
    //que solo se ejecuta la primera vez
  }

  ngDoCheck() {
    this.total = 0;
    //es un funcion de ciclo de vida que se produce cada vez que el usuario interactua con el interfaz
    this.listaProductos.forEach(producto => {
      this.total += producto.cantidad * producto.precio;
    })
  }

}
