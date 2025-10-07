// DECLARACIONN DE VARIABLES
//1.
```js
let nnombre = 'Samer';
console.log(nnombre);
//2.
const pi = 3.1416;
console.log(pi);
//3.

let edad;
edad = 40;
console.log(edad);

//TIPOS DE DATOS
//1.
let nombre = 'samer';
let edad1 = 21;
let estaLloviendo = true;
let Hola = null;
let adios;
console.log(typeof nombre);
console.log(typeof edad1);
console.log(typeof estaLloviendo);
console.log(typeof Hola);
console.log(typeof adios);
//2.
console.log(typeof String(edad1));
console.log(typeof Number(nombre));

//OBJETOS
//1.
let persona = {
    nombre1: 'Samer',
    edad2: 21,
    ciudad: 'Blimea'
};
//2.
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);
//3.
persona.profesion = 'estudiante';
console.log(persona.profesion);
//4.
let {nombre1 , edad2} = persona;
console.log(nombre1);
console.log(edad2);

//FUNCIONES
//1.
function saludar(){
    console.log('hola');
}
saludar();
//2.
function sumar(a, b){
    return a+b;
}
console.log(sumar(3,3));
//3.
const multiplicar = (a, b) => a*b;
console.log(multiplicar(5, 6));
//4.
function esMayorDeEdad(edad){
    if(edad >= 18){
        return 'Es mayor de edad'
    }else{
        return 'Es menor de edad'
    }
}
console.log(esMayorDeEdad(18));
```