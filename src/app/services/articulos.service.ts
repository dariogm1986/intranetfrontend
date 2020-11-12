import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulos: any[] = [
    {
      titulo: 'Primera Entrada',
      texto: 'Este es el texto de la pimera entrada del comoponente de articulo, lo que seria el primer post',
      img: '../../../assets/img/colectivo.jpg'
    },
    {
      titulo: 'Segunda Entrada',
      texto: 'Este es el texto de la segunda entrada del comoponente de articulo, lo que seria el segundo post',
      img: '../../../assets/img/colectivo.jpg'
    }
  ];

  constructor() { }
}
