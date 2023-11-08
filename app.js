require('colors')

const functions = require('./proyec_module/functions.js')

const contador = 10;

const main = async() =>{
console.clear();
const numero = -5;
functions.interfazsigno(numero);
const caracter = "A";
functions.interfazEncontrarcaracter(caracter);

const bebida ="leche";
functions .interfazbusqueda(bebida)

const medio = "avion"
functions.interfazmediosdetrasport(medio)


const { calcularPrecioConDescuento } = require('./proyec_module/functions.js');

const precioBaseProducto = 100; // Precio sin descuento
const descuentoProducto = 20; // Descuento del 20%

const precioFinal = calcularPrecioConDescuento(precioBaseProducto, descuentoProducto);
console.log(`El precio final con descuento es: $${precioFinal}`.red);

const plato = "carne"
functions .interfazrecomendarbebida(plato)


const pago = 2000
functions .interfazsalajuegos(pago)

 const valor = 5
 functions.interfaznumero(valor)

const numeru = 12
functions.interfazmostrarNumerospares(numeru)

const j = 9
functions.interfaztablademultiplicar(j)

const clave =  'sena69'
functions.verificarAcceso(clave)


const Dinumber = [1, 5, 6, 9, 8, 12, 13, 10, 20];
const result = functions.minimoMaximo(Dinumber);

console.log(result);

const numeros =[5,8,2,6,4,9]
functions.numerospares(numeros)


}
main();
