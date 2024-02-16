import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent {
  @Input() listaProductos: Producto[] = [];
  @Output() productoEliminado: EventEmitter<number> = new EventEmitter();
  @Output() productoComprado: EventEmitter<Producto> = new EventEmitter();

  pasarIdApp($event: number) {
    let id = $event;
    this.productoEliminado.emit(id)
  }

  pasarProductApp($event: Producto) {
    //ahora le paso el producto a app.component
    this.productoComprado.emit($event)
  }

}
