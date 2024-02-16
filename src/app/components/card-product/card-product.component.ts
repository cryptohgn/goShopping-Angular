import { Producto } from 'src/app/interfaces/producto.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  @Input() ProdCard!: Iproduct;
  @Output() productoComprado: EventEmitter<Iproduct> = new EventEmitter();
  @Output() productoAEliminar: EventEmitter<Iproduct> = new EventEmitter();

  enviarProdToList(ProdCard: Iproduct){
    this.productoComprado.emit(ProdCard)
  }
  enviarProdAEliminar(id: any){
    this.productoAEliminar.emit(id)
  }
}
