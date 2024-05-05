export class Dj {
    nombre: string;
    aka: string;
    edad: number;
    generos: string[];
    image: string;
    descripcion: string;


  
    constructor(nombre: string, aka: string, edad: number, generos: string[], image: string, descripcion: string) {
      this.nombre = nombre;
      this.aka = aka;
      this.edad = edad;
      this.generos = generos;
      this.image = image;
      this.descripcion = descripcion;

    }
  }