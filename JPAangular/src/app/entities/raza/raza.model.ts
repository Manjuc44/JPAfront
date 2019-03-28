export class Raza {
    id: number;
    nombre: string;
    descripcion: string;
    urlImagen: string | ArrayBuffer;
    bando: Bando;
    estrellas: number;
}

export enum Bando{
   alianza = 0,
   horda = 1,
}
