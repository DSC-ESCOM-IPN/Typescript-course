//Escoge los tipos de datos de las siguientes variables:
let edad2: number = 20;
let nombre: string = "Juanito";
let producto: {
  id: number,
  nombre: string,
  categorias: string[],
  precio: number
} = {
  id: 20,
  nombre: "Camiseta",
  categorias: ["Primavera", "Verano"],
  precio: 1202.23,
};

//Crea la clase para esta instancia:

/* class Juguete {
  _color?: string
  _precio?: number

  set precio(_precio: number) {
    this._precio = _precio ;
  }

  get color() {
    if(this.color) {
      return this.color ;
    }
    throw 'Color indefinido...' ;
  }

} */

class Juguete {
  _id?: string
  _nombre?: string
  color?: string
  precio?: number

  constructor(
    id?: string,
    nombre?: string,
    color?: string,
    precio?: number ) {
      this._id = id ;
      this._nombre = nombre ;
      this.color = color ;
      this.precio = precio ;
    }
}

let soldadito = new Juguete();
soldadito.precio = 20;
console.log(soldadito.color);

//Crea las definiciones de las siguientes funciones:
type DefinicionDeletrear = (palabra: string) => string[];
type DefinicionContar = (palabra: string) => number ;
type DefinicionImprimir = (palabra: string | number) => string ;

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

interface Lenguaje<T, U> {
  cantidadCaracteres: number 
  caracteres: string[]
  printNCaracteres(n: number): void
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

type arregloOCadena = string | any[] ;

function obtenerLongitudDeCadena<T extends (arregloOCadena)>(valorIngresado: T) {
  console.log("Ingrese el valor a obtener el dato: " + valorIngresado)
  let n: number = valorIngresado.length ;
  return 'El tamaño del dato es: ' + n ;
}

obtenerLongitudDeCadena('ESCOM') ;
obtenerLongitudDeCadena(['Koenissegg', 24, true])

//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable

/* type T = number | string | boolean ,

function obtenerTipo<T>(valor: T) {
  if(typeof valor == "boolean") {
    console.log("Booleano.")
  }
  else if(typeof valor == "string") {
    console.log("Cadena de caracteres.")
  }
  else if(typeof valor == "number") {
    console.log("Número.")
  }
}

*/

type NumeroCadenaBooleano = number | string | boolean ;

function obtenerTipoDeDato<U extends (NumeroCadenaBooleano)>(valorIngresado: U) {
  console.log("Ingrese un dato (numero, cadena o booleano): " + valorIngresado) ;
  let resultado = typeof valorIngresado ;
  console.log('El tipo de dato es: ' + resultado)
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

type tiposDeItem = "juguete" | "ropa" | "botella" | "libro" ;

interface Item {
  id: string
  nombre: string
  tipo: tiposDeItem
} 

interface Juguete extends Item {}

interface Ropa extends Item {}

interface Botella extends Item {}

interface Libro extends Item {}

type items = Juguete | Ropa | Botella | Libro ;

class Contenedor <items> {
  producto: items[] = []
  constructor(item: items[]) {
    this.producto = item ;
  }

  // Métodos.

  guardar(item: items) {
    console.log("Ingrese el nuevo dato en el arreglo: " + item)
    this.producto.push(item) ;
    return 'Producto ingresado correctamente...' ;
  }

  leer(indice: number) {
    console.log("Ingrese el indice del dato: " + indice)
    let resultado = this.producto[indice] ;
    return resultado ;
  }

  imprimir() {
    let indice: number;
    for (indice = 0; indice < array.length; indice++) {
      return this.producto[indice];
    }
  }
}

let contenedor = new Contenedor<items>([]) ;