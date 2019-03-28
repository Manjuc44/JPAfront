import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pocion } from './pocion.model';

@Injectable({
  providedIn: 'root'
})
export class PocionService {

  constructor(private http: HttpClient) { }
  public obtenerPociones(){
    return this.http.get<Pocion[]>("http://localhost:8080/api/pociones");
  }

  public obtenerPocion(id:number){
    return this.http.get("http://localhost:8080/api/pociones/"+id);
  }

  public crearPocion(pocion:Pocion){
    return this.http.post("http://localhost:8080/api/pociones", pocion);
  }

  public updatePocion(pocion:Pocion){
    return this.http.put("http://localhost:8080/api/pociones", pocion);
  }

  public deletePocion(id:number){
    return this.http.delete("http://localhost:8080/api/pociones/"+id);
  }

  public obtenerEpicas(){
    return this.http.get("http://localhost:8080/api/pociones/obtenerEpicas");
  }

}
