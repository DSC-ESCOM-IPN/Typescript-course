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
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.prototype.deletrear = function (palabra) {
        return palabra.split(" ");
    };
    MiClase.prototype.contar = function (palabra) {
        return palabra.length;
    };
    MiClase.prototype.imprimir = function (mensaje) {
        return "" + mensaje;
    };
    return MiClase;
}());
var LenguajeIngles = /** @class */ (function () {
    function LenguajeIngles(caracteres) {
        this.cantidadCaracteres = caracteres.length;
        this.caracteres = caracteres;
    }
    LenguajeIngles.prototype.printNCaracteres = function (n) {
        for (var caracter in this.caracteres) {
            console.log(caracter);
        }
    };
    return LenguajeIngles;
}());
//Crea UNA función que te permita obtener la longitud de una cadena de caracteres o
//de algún arreglo que se le pase, solo admite arreglos o strings,usando Generics
function getLenght(cadena) {
    return cadena.length;
}
//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable
function getTYpe(dato) {
    switch (dato) {
        case typeof (dato) === 'boolean':
            console.log('booleano');
            break;
        case typeof (dato) === 'string':
            console.log('cadena');
            break;
        case typeof (dato) === 'number':
            console.log('numero');
            break;
    }
}
var Contenedor = /** @class */ (function () {
    function Contenedor() {
        this.items = [];
    }
    /**
     * Metodo Guardar
     * @param item
     */
    Contenedor.prototype.saveItem = function (item) {
        this.items.push(item);
    };
    /**
     * Método Leer
     * @param index
     * @returns object T | void
     */
    Contenedor.prototype.showItem = function (index) {
        if (this.items.length >= index) {
            return this.items[index - 1];
        }
        else {
            return { id: -1, nombre: 'Elemento no encontrado', color: 'error' };
        }
    };
    /**
     * Método Imprimir
     */
    Contenedor.prototype.showItems = function () {
        console.log('Contenido disponible');
        this.items.forEach(function (item, index) {
            console.log("Elemento " + index + ": " + JSON.stringify(item));
        });
    };
    return Contenedor;
}());
var container = new Contenedor();
/**Guardar elementos */
container.saveItem({ id: 0, nombre: 'Pelota', color: 'rojo' });
container.saveItem({ id: 1, nombre: 'Pelota', color: 'verde' });
container.saveItem({ id: 2, nombre: 'Trompo', color: 'azul' });
container.saveItem({ id: 3, tipo: 'Camisa', color: 'rojo' });
container.saveItem({ id: 4, tipo: 'Sudadera', color: 'verde' });
container.saveItem({ id: 5, tipo: 'Pantalon', color: 'azul' });
container.saveItem({ id: 6, nombre: 'El principito', tipoPasta: 'blanda' });
container.saveItem({ id: 7, nombre: 'El psicoanalista', tipoPasta: 'gruesa' });
container.saveItem({ id: 8, material: 'Vidrio' });
container.saveItem({ id: 9, material: 'Plastico' });
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
