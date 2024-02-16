import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TotalComponent } from './components/total/total.component';
import { ListadoComprasComponent } from './components/listado-compras/listado-compras.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CompradosListComponent } from './components/comprados-list/comprados-list.component';
import { TotalCompradosComponent } from './components/total-comprados/total-comprados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCompraComponent,
    ProductoComponent,
    TotalComponent,
    ListadoComprasComponent,
    CardProductComponent,
    CompradosListComponent,
    TotalCompradosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
