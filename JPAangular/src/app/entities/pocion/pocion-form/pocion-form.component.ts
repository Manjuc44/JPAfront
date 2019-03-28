import { Component, OnInit, Input } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pocion-form',
  templateUrl: './pocion-form.component.html',
  styleUrls: ['./pocion-form.component.css']
})
export class PocionFormComponent implements OnInit {
  @Input() pociones:Pocion;
   pocion: Pocion={
     id:0,
     titulo:'',
     descripcion:'',
     imagen:'',
     esEpica: false,
   };
  constructor(private _pocionService:PocionService,
              private http: HttpClient, private _ActivatedRoute: ActivatedRoute) {

                this._ActivatedRoute.params.subscribe(variable =>{
                  if(variable['id'] != 0){
                    this._pocionService.obtenerPocion(variable['id']).subscribe((res:Pocion)=>{
                      this.pocion=res;
                    });
                  }
                  
                })
    if(this.pociones==undefined){
    
    }
   }

  ngOnInit() {
  }
  
  eliminar(){
    this._pocionService.deletePocion(this.pocion.id).subscribe(res => console.log("eliminado correctamente"));
    
  }

  enviar(){
    if(this.pocion.id == 0){
      this._pocionService.crearPocion(this.pocion).subscribe(res => console.log(res));
    }else{
      this._pocionService.updatePocion(this.pocion).subscribe(res => console.log(res));
    }
  }

}
