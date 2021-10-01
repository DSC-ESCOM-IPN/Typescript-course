//Escoge los tipos de datos de las siguientes variables:
let edad1: number = 20;
let nombre: string = "Juanito";
interface producto {
	id: number;
	nombre: string;
	categorias: string[];
	precio: number;
}
let p: producto = {
	id: 20,
	nombre: "Camiseta",
	categorias: ["Primavera", "Verano"],
	precio: 1202.23,
}


//Crea la clase para esta instancia:
class Juguete {
	private _precio?: number;
	private _color?: string;

	set precio(_precio:number){
		this._precio = _precio;
	}

	get color(){
		if(this._color){
			return this._color;
		}
		return "";
	}
}

let soldadito = new Juguete();
soldadito.precio = 20;
console.log(soldadito.color);


//Crea las definiciones de las siguientes funciones:
type msg = string | number;
type DefinicionDeletrear = (palabra: string) => string[];
type DefinicionContar = (palabra: string) => number;
type DefinicionImprimir =  (mensaje: msg) => msg;

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
interface Lenguaje<T,U> {
	cantidadCaracteres: T;
	caracteres: U[];

	printNCaracteres: (n: T) => void;
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
function longitud<T extends string | Array<any>>(value: T){
	return value.length;
}
let x = longitud("hola");
let y = longitud([1,2,3]);

//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable
function tipo<T extends boolean | string | number>(value: T){
	if(typeof value === "boolean"){
		console.log("booleano")
	}
	else if(typeof value === "string"){
		console.log("cadena de caracteres")
	}
	else{
		console.log("numero")
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

interface Juguetex {
	id: string;
	nombre: string;
	marca: string;
	precio: number;
}

interface Ropa {
	id: string;
	tipo: string;
	talla: number | string;
	precio: number;
}

interface Botella {
	id: string;
	nombre: string;
	tipoBebida: string;
	capacidad: number;
}

interface Libro {
	id: string;
	nombre: string;
	autor: string;
	existencia: boolean;
	precio: number;
}

class Contenedor<T>{
	items: T[] = [];

	guardar(item: T){
		this.items.push(item);
		return "insertado";
	}
	leer(indice: number){
		if(indice >= 0 && indice < this.items.length){
			return this.items[indice];
		}
		return "No existe ese elemeto";
	}
	imprimir(){
		console.log(this.items);
	}
}

let caja = new Contenedor<Juguetex | Ropa | Botella | Libro>();
caja.guardar( {id: "JU01", nombre: "spiderman", marca: "Mattel", precio: 20} );
caja.guardar( {id: "RO01", tipo: "pantalon", talla: "M", precio: 150} );
caja.guardar( {id: "BO01", nombre: "Indio", tipoBebida: "cerveza", capacidad: 355} );
caja.guardar( {id: "LI01", nombre: "Norwegian Wood", autor: "Haruki Murakami", existencia: true, precio: 20} );
caja.guardar( {id: "RO02", tipo: "playera", talla: "32", precio: 120} );
caja.guardar( {id: "BO02", nombre: "Pepsi", tipoBebida: "Refresco", capacidad: 1000} );

caja.imprimir();
console.log(caja.leer(4));
console.log(caja.leer(-1));
console.log(caja.leer(6));
console.log(caja.leer(5));
