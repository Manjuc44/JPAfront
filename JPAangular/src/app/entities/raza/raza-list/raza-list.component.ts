import { Component, OnInit } from '@angular/core';
import { Raza } from '../raza.model';
import { RazaService } from '../raza.service';

@Component({
  selector: 'app-raza-list',
  templateUrl: './raza-list.component.html',
  styleUrls: ['./raza-list.component.css']
})
export class RazaListComponent implements OnInit {

  raza : Raza[];
  constructor(private _RazaService: RazaService) { 
    
  }

  ngOnInit() {
    this._RazaService.obtenerRazas().subscribe(res => this.raza = res);

    this.raza.sort(function(a, b) {
      var textA = a.nombre.toUpperCase();
      var textB = b.nombre.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}

}
