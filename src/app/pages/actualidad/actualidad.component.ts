import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']
})
export class ActualidadComponent implements OnInit {

  articulos: any[];

  constructor( private articuloservice: ArticulosService) {
    this.articulos = articuloservice.articulos;
    console.log(this.articulos);
   }

  ngOnInit(): void {
  }

}
