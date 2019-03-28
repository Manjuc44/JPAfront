import { Component, OnInit, Input } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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

   nuevo = true;

   imagePath: any;
   imgURL: string | ArrayBuffer;
  constructor(private _pocionService:PocionService,
              private http: HttpClient, private _ActivatedRoute: ActivatedRoute,
              private _router:Router) {

                this._ActivatedRoute.params.subscribe(variable =>{
                  if(variable['id'] != 0){
                    this.nuevo = false;
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
    this._pocionService.deletePocion(this.pocion.id).subscribe(res => this._router.navigate(["/pociones"]));
    
  }

  enviar(){
    if(this.pocion.id == 0){
      this._pocionService.crearPocion(this.pocion).subscribe(res => this._router.navigate(["/pociones"]));
      
    }else{
      this._pocionService.updatePocion(this.pocion).subscribe(res => this._router.navigate(["/pociones"]));
    }
  }

  preview(files) {
    console.log("aaa");
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      
      this.pocion.imagen = this.imgURL;
      console.log(this.pocion);
      
        };
  
  }


}
