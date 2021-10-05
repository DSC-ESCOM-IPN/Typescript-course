//Escoge los tipos de datos de las siguientes variables:
/* let edad: number = 20;
let nombre: string = "Juanito";
declare interface Ropa {
  id: number;
  nombre: string;
  categorias: string[];
  precio: number;
}

let producto: Ropa = {
  id: 20,
  nombre: "Camiseta",
  categorias: ["Primavera", "Verano"],
  precio: 1202.23,
}; */

//Crea la clase para esta instancia:
 /* class Juguete {
   private _precio: number;
   private _color: string;

   constructor() {
     this._precio = 0;
     this._color = '';
   }
   set precio(precio: number) {
     this._precio = precio;
   }

   get color() {
     return this._color;
   }
 }
 let soldadito = new Juguete();
 soldadito.precio = 20;
 console.log(soldadito.color); */

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
declare interface Lenguaje<T extends number, U extends string> {
  cantidadCaracteres:  T;
  caracteres: U[];
  printNCaracteres: (n: T) => void
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
function getLenght<T extends string | Array<any>>(cadena: T) {
  return cadena.length
}
//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable
function getTYpe<T extends boolean | string | number>(dato: T) {
  switch(dato) {
    case typeof(dato) === 'boolean' :
      console.log('booleano');
      break;
    case typeof(dato) === 'string' :
      console.log('cadena');
      break;
    case typeof(dato) === 'number' :
      console.log('numero');
      break;
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
declare interface Juguete {
  id: number;
  nombre: string;
  color: string;
}

declare interface Ropa {
  id: number;
  tipo: string;
  color: string;
}

declare interface Libro {
  id: number;
  nombre: string;
  tipoPasta: string;
}

declare interface Botella {
  id: number;
  material: string;
}

class Contenedor<T extends Juguete | Ropa | Botella | Libro> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }

  /**
   * Metodo Guardar
   * @param item
   */
  public saveItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Método Leer
   * @param index
   * @returns object T | void
   */
  public showItem(index: number): T {
    if (this.items.length >= index) {
      return this.items[index - 1];
    }
    else {
      return {id: -1, nombre: 'Elemento no encontrado', color: 'error'} as T;
    }
  }

  /**
   * Método Imprimir
   */
  public showItems(): void {
    console.log('Contenido disponible');
    this.items.forEach( (item: T, index) => {
      console.log(`Elemento ${index}: ${JSON.stringify(item)}`);
    });
  }
}

const container = new Contenedor<Juguete | Ropa | Botella | Libro>();
/**Guardar elementos */
container.saveItem({id: 0, nombre: 'Pelota', color: 'rojo'} as Juguete);
container.saveItem({id: 1, nombre: 'Pelota', color: 'verde'} as Juguete);
container.saveItem({id: 2, nombre: 'Trompo', color: 'azul'} as Juguete);
container.saveItem({id: 3, tipo: 'Camisa', color: 'rojo'} as Ropa);
container.saveItem({id: 4, tipo: 'Sudadera', color: 'verde'} as Ropa);
container.saveItem({id: 5, tipo: 'Pantalon', color: 'azul' } as Ropa);
container.saveItem({id: 6, nombre: 'El principito', tipoPasta: 'blanda'} as Libro);
container.saveItem({id: 7, nombre: 'El psicoanalista', tipoPasta: 'gruesa'} as Libro);
container.saveItem({id: 8, material: 'Vidrio'});
container.saveItem({id: 9, material: 'Plastico'});
/**Elemeto  1 solicitado */
console.log('Elemento obtenido: ' + JSON.stringify(container.showItem(1)));
/**Elemeto  5 solicitado */
console.log('Elemento obtenido: ' + JSON.stringify(container.showItem(5)));
/**Elemeto  7 solicitado */
console.log('Elemento obtenido: ' + JSON.stringify(container.showItem(7)));
/**Elemeto  11 solicitado */
console.log('Elemento obtenido: ' + JSON.stringify(container.showItem(11)));
/**Imprimir lista de elementos */
container.showItems();
/** Cedillo Vázquez Eiot Uriel */
