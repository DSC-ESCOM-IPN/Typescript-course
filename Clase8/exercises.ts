//Escoge los tipos de datos de las siguientes variables:
let edad = 20;
let nombre = "Juanito";
let producto = {
  id: 20,
  nombre: "Camiseta",
  categorias: ["Primavera", "Verano"],
  precio: 1202.23,
};

//Crea la clase para esta instancia:
let soldadito = new Juguete();
soldadito.precio = 20;
console.log(soldadito.color);

//Crea las definiciones de las siguientes funciones:
type DefinicionDeletrear = ;
type DefinicionContar = ;
type DefinicionImprimir = ;

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

//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable

//Crear una clase Contenedor, que te permita: guardar, leer e imprimir todos sus items
//esta clase debe trabajar con un arreglo de items, estos items pueden ser de las siguientes
//interfaces: Juguete, Ropa, Botella o Libro
//Guardar: Se le pasa como parametro un objeto del tipo Juguete, Ropa,Botella o Libro y lo guarda en tu lista de items
//Leer: Se le pasa como parámetro el índice del item a regresar y lo retorna
//imprimir: No recibe parámetros e imprime todos tus items
//La clase debe implementar generics class Contenedor<T>{}
//para instanciarla: new Contenedor<Juguete | Ropa | Botella | Libro>();
//y probarla
