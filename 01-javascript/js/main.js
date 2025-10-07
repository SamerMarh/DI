import { sumar, restar, multiplicar, dividir } from './operaciones.js';
import { areaCirculo as circulo, areaCuadrado as cuadrado } from './matematicas.js';

console.log(sumar(5, 1));
console.log(restar(3, 5));
console.log(multiplicar(2, 9));
console.log(dividir(4, 2));


const area1 = circulo(5);
const area2 = cuadrado(4);
console.log(`Área del círculo: ${area1}`);
console.log(`Área del cuadrado: ${area2}`);


import * as personas from './personas.js';
console.log(personas);
console.log(personas.persona1);
console.log(personas.persona2);
console.log(personas.persona3);
console.log(personas.persona4);
