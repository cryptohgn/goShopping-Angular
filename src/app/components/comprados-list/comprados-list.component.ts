import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct.interface';

@Component({
  selector: 'app-comprados-list',
  templateUrl: './comprados-list.component.html',
  styleUrls: ['./comprados-list.component.css']
})
export class CompradosListComponent {
  @Input() envioArrProdComprados: Iproduct []=[];

}
