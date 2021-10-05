//Escoge los tipos de datos de las siguientes variables:
let nombre:string = "Juanito";
let producto = {
  id: 20,
  nombre: "Camiseta",
  categorias: ["Primavera", "Verano"],
  precio: 1202.23,
};

//Crea la clase para esta instancia:
class Juguet {
  private _precio?: number;
  private _color?: string;

  set precio(_precio: number){
      this._precio = _precio;
  }

  get color(){
      if(this._color) {
          return this._color;
      }
      return "";
  }
}

let soldadito = new Juguet();
soldadito.precio = 20;
console.log(soldadito.color);

//Crea las definiciones de las siguientes funciones:
type DefinicionDeletrear = (palabra:string) => string[];
type DefinicionContar = (palabra:string) => number;
type DefinicionImprimir = (mensaje:string | number) => number | string;

interface MisFuciones {
  deletrear: DefinicionDeletrear;
  contar: DefinicionContar;
  imprimir: DefinicionImprimir;
}

class MiClase implements MisFuciones {
  deletrear(palabra: string) {
    return palabra.split(" ");
  }

  contar(palabra: string) {
    return palabra.length;
  }

  imprimir(mensaje: string | number) {
    return `${mensaje}`;
  }
}

//Crea la interface correcta para esta clase, el constructor no está declarado en la interface

interface Lenguage<T extends number, U extends string> {
  cantidadCaracteres: T;
  caracteres: U[];

  printNCaracteres(n: T): void;
}

class LenguajeIngles implements Lenguaje<number, string> {
   cantidadCaracteres: number;
   caracteres: string[];

  constructor(caracteres: string[]) {
    this.cantidadCaracteres = caracteres.length;
    this.caracteres = caracteres;
  }

  printNCaracteres(n: number) {
    for (let caracter in this.caracteres) {
      console.log(caracter);
    }
  }
}

//Crea UNA función que te permita obtener la longitud de una cadena de caracteres o
//de algún arreglo que se le pase, solo admite arreglos o strings,usando Generics

function  longitud<T extends string | Array<any>>(valor:T){
  return valor.length;
}

//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable

function obtenerTipo<T extends boolean | number | string >(dato: T){
  if(typeof dato === 'string'){
      console.log('Cadena de caracteres');
  } else if(typeof dato === 'boolean'){
      console.log('booleano');
  } else{
      console.log('Número');
  }
}

//Crear una clase Contenedor, que te permita: guardar, leer e imprimir todos sus items
//esta clase debe trabajar con un arreglo de items, estos items pueden ser de las siguientes
//interfaces: Juguete, Ropa, Botella o Libro
//Guardar: Se le pasa como parametro un objeto del tipo Juguete, Ropa,Botella o Libro y lo guarda en tu lista de items
//Leer: Se le pasa como parámetro el índice del item a regresar y lo retorna
//imprimir: No recibe parámetros e imprime todos tus items
//La clase debe implementar generics class Contenedor<T>{}
//para instanciarla: new Contenedor<Juguete | Ropa | Botella | Libro>();
//y probarla
type tipoJuguete = "Niño" | "Niña";
type tipoRopa = "Casual" | "Formal"

interface JugueteI{
  nombreJuguete:string;
  costo: number;
  tipo: tipoJuguete;
}

interface Ropa{
  nombreRopa: string;
  costo: number;
  tipo: tipoRopa;
}

interface Botella{
  nombreBotella: string;
  costo: number;
  volumen: number;
}

interface Libro{
  titulo: string;
  numPaginas: number;
  costo: number;
}

class Contenedor <T>{

  items:T[] = [];

  Guardar(nuevoItem: T){
    this.items.push(nuevoItem);
  }
  Leer(i: number){
    console.log(this.items[i]);
  }
  Imprimir(){
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

let libro1:Libro = {titulo: "TheBest", numPaginas:560, costo: 200};
let libro2:Libro = {titulo: "Bill", numPaginas:320, costo: 450};
let juguete1:JugueteI = {nombreJuguete: "Buzz", costo: 499, tipo: "Niño"};
let botella1:Botella = {nombreBotella: "Natural", costo: 49, volumen: 499}
let ropa1:Ropa = {nombreRopa: "blusa", costo: 299, tipo: "Casual"}

let productos = new Contenedor<JugueteI | Ropa | Botella | Libro>();
productos.Guardar(libro1);
productos.Guardar(juguete1);
productos.Guardar(ropa1)
productos.Guardar(botella1);
console.log("Función leer con 1")
productos.Leer(1);
productos.Guardar(libro2);
console.log("Función imprimir")
productos.Imprimir();