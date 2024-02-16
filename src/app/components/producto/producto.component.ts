import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() miProducto!: Producto;
  @Output() productoEliminado: EventEmitter<number> = new EventEmitter();
  @Output() productoComprado: EventEmitter<Producto> = new EventEmitter();

  eliminar(id: number) {
    //el id es el elemento que tengo que pasar al componente principal para borrar ese id del array @Output()
    this.productoEliminado.emit(id);
  }

  comprar(producto: Producto) {
    this.productoComprado.emit(producto)
  }

}
