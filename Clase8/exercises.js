//Escoge los tipos de datos de las siguientes variables:
let edad = 20;
let nombre = "Juanito";
let producto1 = {
    id: 20,
    nombre: "Camiseta",
    categorias: ["Primavera", "Verano"],
    precio: 1202.23, //number
};
//Crea la clase para esta instancia:
class Juguete {
    set precio(_precio) {
        this._precio = _precio;
    }
    get color() {
        if (this._color) {
            return this._color;
        }
        return "";
    }
}
let soldadito = new Juguete();
soldadito.precio = 20;
console.log(soldadito.color);
class MiClase {
    deletrear(palabra) {
        return palabra.split(" ");
    }
    contar(palabra) {
        return palabra.length;
    }
    imprimir(mensaje) {
        return `${mensaje}`;
    }
}
class LenguajeIngles {
    constructor(caracteres) {
        this.cantidadCaracteres = caracteres.length;
        this.caracteres = caracteres;
    }
    printNCaracteres(n) {
        for (let caracter in this.caracteres) {
            console.log(caracter);
        }
    }
}
//Crea UNA función que te permita obtener la longitud de una cadena de caracteres o
//de algún arreglo que se le pase, solo admite arreglos o strings,usando Generics
function longitudCadena(cadena) {
    return cadena.length;
}
//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable
function tipoDato(dato) {
    if (typeof dato === 'string') {
        console.log('Cadena de caracteres');
    }
    else if (typeof dato === 'boolean') {
        console.log('booleano');
    }
    else {
        console.log('Número');
    }
}
class Contenedor {
    constructor() {
        this.items = [];
    }
    guardar(objeto) {
        this.items.push(objeto);
    }
    leer(i) {
        if (i < this.items.length) {
            return this.items[i];
        }
        return "Error. Solo hay " + this.items.length + " items";
    }
    imprimir() {
        console.log("Items: ");
        console.log(this.items);
    }
}
let c = new Contenedor();
c.guardar({ nombreJ: "Carrito", precioJ: 400 });
c.guardar({ nombreJ: "Muñeca", precioJ: 200 });
c.guardar({ talla: "M", tipo: "Playera", precioR: 150 });
c.guardar({ talla: 7, tipo: "Pantalón", precioR: 250 });
c.guardar({ nombreB: "Agua Bonafont", tipoB: "Agua", precioB: 23 });
c.guardar({ nombreL: "El Principito", autor: "Antoine De Saint-Exupéry", precioL: 300 });
console.log(c.leer(3));
console.log(c.leer(7));
c.imprimir();
