let caja_de_animación = 'CCS' // Declaración + asignación 
const precio_caja= 8000
let precio_bajo = true
let dato_null = null
let poca_informacion= undefined
let no_varia = Symbol(100)
let valor_alto = 2n
//OBJETO
let datos_producto= {
nombre: 'azucar',
tipo: 2,
pais_origen: 'cuba'
}
//console.log ( datos_producto)
//ARRAY

let monedas_cambio = ['dolar','euros', 'bs']

//console.log(monedas_cambio)

//FUNCIONES
//Declaradas 

function iniciar_proceso () {

   // console.log("El precio inicial es  " + precio_caja)
}
iniciar_proceso(precio_caja) // LLamado a la funcion 

//Expresadas

const preciocaja_total = function(a, b) { // declaro una variable  y le paso una funcion con parametros en este ejemplo 
    return a + b
  }
  
let resultado = preciocaja_total(precio_caja, dato_null)
//console.log (resultado)

//Flecha

const datosx = () => precio_caja + dato_null

let producto = datosx()

//console.log (producto)


// modulo y exponenciación 

const modulo= 16%3
let expo= 2**3
//console.log (modulo , expo)

// raiz cuadrada

let raiz= Math.sqrt(2)
//console.log (raiz)

let ejemplo3= Math.random()

//console.log(ejemplo3)

let suma_datos = '3' + 8 //no se sumara si no se concatenara
//console.log(suma_datos)

// Pero si el primer valor es numero o boleano si busca sumar 

const numero23= '345'
const numeroprueba= parseInt (numero23) // parseInt nos cambia el tipo de dato de un array a un numero 
//console.log( typeof numero23)
//console.log(typeof numeroprueba)

// && = y --- || = 0 --- ! =no 

let precio_casa = '8000$';

let precio_apartamento = '9000$'

if ((precio_casa == precio_apartamento) || precio_casa === precio_apartamento ) {
  console.log("valido");
} else if (precio_apartamento > precio_casa) {
  console.log("no valido");
} else {
  nuevo_precio = precio_casa + 123;
  console.log(nuevo_precio);
}



