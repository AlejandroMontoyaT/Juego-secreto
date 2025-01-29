// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.

function holaMundo() {
    console.log("¡Hola, mundo!");
}
holaMundo();

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function recibenombre(nombre){
   console.log(`¡Hola, ${nombre}!` );
}
recibenombre("Alice");

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function recibeNumero(numero){
    return numero*2;
}
let resultado = recibeNumero(5);
console.log(resultado);

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularPromedio(a, b, c){
    return (a+b+c)/3;

}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function recibeDosNumeros(a, b){
   return a > b ? a : b;
}
let mayor = recibeDosNumeros(5, 10);
console.log(mayor);

// 6. Crear una función que reciba un número como parámetro y
// devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
    return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);