//Escoge los tipos de datos de las siguientes variables:
let edad = 20; 
let nombre = "Juanito";

interface Producto {
	id: number;
	nombre: string;
	categorias: string[];
	precio: number;
}

let producto1: Producto = {
  id: 20, //number
  nombre: "Camiseta", //string
  categorias: ["Primavera", "Verano"], //string[]
  precio: 1202.23, //number
};

//Crea la clase para esta instancia:
class Juguete {
  private _precio: number;
  private _color: string;

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

let soldadito = new Juguete();
soldadito.precio = 20;
console.log(soldadito.color);

//Crea las definiciones de las siguientes funciones:
type DefinicionDeletrear = (palabra: string) => string[];
type DefinicionContar = (palabra: string) => number;
type DefinicionImprimir = (mensaje: string | number) => string | number;

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
interface Lenguaje<T,U>{
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
function longitudCadena<T extends ([]|string)>(cadena: T){
  return cadena.length;
}


//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable
function tipoDato<T extends boolean | number | string >(dato: T){
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

interface Juguetes {
	nombreJ: string;
	precioJ: number;
}

interface Ropa {
	talla: number | string;
  tipo: string;
	precioR: number;
}

interface Botella {
	nombreB: string;
  tipoB: string;
	precioB: number;
}

interface Libro {
	nombreL: string;
	autor: string;
	precioL: number;
}

class Contenedor<T extends (Juguetes | Ropa | Botella | Libro)>{
	items: T[] = [];

	guardar(objeto: T){
		this.items.push(objeto);
	}

	leer(i: number){
		if(i < this.items.length){
			return this.items[i];
		}
		return "Error. Solo hay "+this.items.length+" items";
	}

	imprimir(){
		console.log("Items: ");
    console.log(this.items);
	}
}

let c = new Contenedor<Juguetes | Ropa | Botella | Libro>();
c.guardar({nombreJ:"Carrito",precioJ: 400});
c.guardar({nombreJ:"Muñeca", precioJ: 200});
c.guardar({talla: "M", tipo:"Playera", precioR: 150});
c.guardar({talla:7, tipo:"Pantalón", precioR: 250});
c.guardar({nombreB:"Agua Bonafont", tipoB:"Agua", precioB: 23});
c.guardar({nombreL:"El Principito", autor:"Antoine De Saint-Exupéry", precioL: 300});

console.log(c.leer(3));
console.log(c.leer(7));
c.imprimir();
