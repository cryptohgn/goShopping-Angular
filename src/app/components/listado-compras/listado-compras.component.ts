import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct.interface';


@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.css']
})
export class ListadoComprasComponent {
  @Input() envioArrProducts: Iproduct []=[];
  @Output() productoComprado: EventEmitter<Iproduct> = new EventEmitter();
  @Output() productoEliminado: EventEmitter<Iproduct> = new EventEmitter();

  enviarProdAppComp(product: Iproduct){
    this.productoComprado.emit(product)
  }
  enviarProdEleminar(id: any){
    this.productoEliminado.emit(id)
  }
  
}
