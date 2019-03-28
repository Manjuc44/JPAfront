import { Component, OnInit } from '@angular/core';
import { PocionService } from '../entities/pocion/pocion.service';
import { Pocion } from '../entities/pocion/pocion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pociones:Pocion[];
  constructor(private _PocionService:PocionService) {
    this._PocionService.obtenerEpicas().subscribe((res:Pocion[])=>{
      this.pociones=res;
    })
   }

  ngOnInit() {
  }

}
