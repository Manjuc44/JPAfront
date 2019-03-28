import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Raza } from './raza.model';

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  constructor(private http: HttpClient) { }

  public obtenerRazas(){
    return this.http.get<Raza[]>("http://localhost:8080/api/razas");
  }

  public obtenerRaza(id:number){
    return this.http.get("http://localhost:8080/api/razas/"+id);
  }

  public crearRaza(raza:Raza){
    return this.http.post("http://localhost:8080/api/razas", raza);
  }

  public updateRaza(raza:Raza){
    return this.http.put("http://localhost:8080/api/razas", raza);
  }

  public deleteRaza(id:number){
    return this.http.delete("http://localhost:8080/api/razas/"+id);
  }


}
