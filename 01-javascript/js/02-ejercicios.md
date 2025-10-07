```js
//ARRAY Y METODOS BASICOS
//1.
let nombres = ['Samer', 'Ernest', 'Joel', 'Adrian','Joerik','Marcos'];
console.log(nombres.push('Enma'));
//2.
console.log(nombres.shift());
//3.
console.log(nombres.includes('Ernest'))
//4.
let numeros = [4,1,9,3,7];
console.log(numeros.sort());
console.log(numeros.reverse());

//DESESTRUCTURACION DE ARRAAYS
//1 y 2.
let frutas =['manzana','pera','platano','naranja'];
let [fruta1, fruta2, fruta3, ...resto] = frutas;
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(resto)
//3.
fruta1 = 'albaricoque'
fruta2 = 'aguacate'
console.log(fruta1);
console.log(fruta2);
//4.
let colores = ["rojo", ["verde", "azul", "amarillo"]];
let azul = colores[1][1];
console.log(azul);

//RECORRIDO DE ARRAYS CON FOR
//1.
let numeros2 =[1,2,3,4,5]
for (let i = 0 ; i < numeros.length; i++){
    console.log(`Indice ${i}: Valor ${numeros2[i]}`);
}
//2.
for (let num of numeros2){
    console.log(num);
}
//3.
for (let i in numeros2){
    console.log(`Indice ${i}: Valor ${numeros2[i]}`)
}
//4.
let info = ["HTML", "CSS", "JavaScript", "React"]
for (let i = 0 ; i < info.length; i++){
    console.log(`Indice ${i}: Valor ${info[i]}`);
}
//5.
for (let i = 3 ; i >= 0; i--){
    console.log(`Indice ${i}: Valor ${info[i]}`);
}

//RECORRIDOS CON FOREACH, FILTER Y MAP
//1.
let nombre2 = ["Ana", "Luis", "Marta", "Pedro"];
nombre2.forEach(function(nombre) {
    console.log('Hola, ' + nombre + '!')
})
//2.
let numeros3 = [2, 4, 6, 8];
numeros3.forEach(function(numero) {
  console.log(numero * 2);
});
//3.
let numeros4 = [5, 12, 8, 130, 44];
 mayoresQueDiez = numeros4.filter(function(numero) {
  return numero > 10;
});
console.log(mayoresQueDiez);
//4.
let nombre3 = ["Ana", "Alberto", "Bea", "Carlos"];
let nombresConA = nombre3.filter(function(nombre) {
  return nombre.startsWith("A");
});
console.log(nombresConA);
//5.
let edades = [15, 18, 21, 12, 30];
let mayoresDeEdad = edades.filter(function(edad) {
  return edad >= 18;
});
console.log(mayoresDeEdad);
//6.
let numeros5 = [1, 2, 3, 4, 5];
let cuadrados = numeros5.map(function(num) {
  return num * num;
});
console.log(cuadrados);
//7.
let precios = [10, 20, 30];
let preciosConIVA = precios.map(function(precio) {
  return precio * 1.21;
});
console.log(preciosConIVA);
//8.
let lenguajes = ["html", "css", "javascript"];
let mayusculas = lenguajes.map(function(lenguaje) {
  return lenguaje.toUpperCase();
});
console.log(mayusculas);
//9.
let numeros6 = [3, 8, 12, 5, 7, 20];
let pares = numeros6.filter(num => num % 2 === 0);
console.log(pares);

let paresMultiplicados = pares.map(num => num * 10);
console.log(paresMultiplicados);

//10
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];
let aprobados = alumnos.filter(alumno => alumno.nota >= 5);
let nombresAprobados = aprobados.map(alumno => alumno.nombre);
nombresAprobados.forEach(nombre => {
  console.log(`Alumno aprobado: ${nombre}`);
});
```