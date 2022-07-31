//Escoge los tipos de datos de las siguientes variables:
var edad = 20;
var nombre = "Juanito";
var producto = {
    id: 20,
    nombre: "Camiseta",
    categorias: ["Primavera", "Verano"],
    precio: 1202.23
};
//Crea la clase para esta instancia:
var Juguete = /** @class */ (function () {
    function Juguete(id, nombre, color, precio) {
        this._id = id;
        this._nombre = nombre;
        this.color = color;
        this.precio = precio;
    }
    return Juguete;
}());
var soldadito = new Juguete();
soldadito.precio = 20;
console.log(soldadito.color);
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
        return "".concat(mensaje);
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
function obtenerLongitudDeCadena(valorIngresado) {
    console.log("Ingrese el valor a obtener el dato: " + valorIngresado);
    var n = valorIngresado.length;
    console.log("El tamaño del dato es: " + n);
}
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
