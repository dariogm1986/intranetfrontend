import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() articulos: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
