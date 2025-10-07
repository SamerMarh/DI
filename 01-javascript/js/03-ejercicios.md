```js
1. Exportar e importar constantes
export const nombre = 'tecno'
export const version = '1.1'
export const autor = 'Samer'

import {nombre, version, autor} from './constante';
console.log(nombre);
console.log(version);
console.log(autor);

2. Funciones matemáticas
export function sumar(a, b) {
  return a + b;
}
export function restar(a, b) {
  return a - b;
}
export function multiplicar(a, b) {
  return a * b;
}
export function dividir(a, b) {
  return a / b;
}

import { sumar, restar, multiplicar, dividir } from './operaciones.js';
console.log(sumar(5, 1));
console.log(restar(3, 5));
console.log(multiplicar(2, 9));
console.log(dividir(4, 2));

3. Exportación por defecto
export default function saludar(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
import saludar from './saludos.js';
saludar("Samer");

4. Combinar exportaciones
export const APP_NAME = "MiAplicacion";
export function mayusculas(texto) {
  return texto.toUpperCase();
}
export default function primerElemento(array) {
  return array[0];
}

import primerElemento, { APP_NAME, mayusculas } from './utils.js';
console.log(APP_NAME);
console.log(mayusculas("hola mundo"));
const frutas = ["manzana", "banana", "naranja"];
console.log(primerElemento(frutas));

5. Importar con alias
export function areaCirculo(radio) {
  return Math.PI * radio * radio;
}
export function areaCuadrado(lado) {
  return lado * lado;
}
import { areaCirculo as circulo, areaCuadrado as cuadrado } from './matematicas.js';
const area1 = circulo(5);
const area2 = cuadrado(4);
console.log(`Área del círculo: ${area1}`);
console.log(`Área del cuadrado: ${area2}`);

6. Importar todo con * as
export const persona1 = "Ana";
export const persona2 = "Luis";
export const persona3 = "Marta";
export const persona4 = "Carlos";
import * as personas from './personas.js';
console.log(personas);
console.log(personas.persona1);
console.log(personas.persona2);
console.log(personas.persona3);
console.log(personas.persona4);
```