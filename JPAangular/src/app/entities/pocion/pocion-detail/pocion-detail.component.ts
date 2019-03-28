import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PocionService } from '../pocion.service';
import { PocionModule } from '../pocion.module';
import { Pocion } from '../pocion.model';

@Component({
  selector: 'app-pocion-detail',
  templateUrl: './pocion-detail.component.html',
  styleUrls: ['./pocion-detail.component.css']
})
export class PocionDetailComponent implements OnInit {
  pocion:Pocion[];
  constructor(private _activatedRoute:ActivatedRoute,
             private _pocionService:PocionService,
             ) {
              this._activatedRoute.params.subscribe(variable=>{
                this._pocionService.obtenerPocion(variable['id']).subscribe((res:Pocion[])=>{
                  this.pocion=res
                })
              })
              }

  ngOnInit() {
  }

}
