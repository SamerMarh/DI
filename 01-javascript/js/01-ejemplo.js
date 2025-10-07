// console.log("Hola Mundo");
// let ernest = "Ernest es un jarbush"
// let joel = "Jeol es un sissy"
// console.log(typeof ernest);
// console.log(joel);
// alert("Eres un sissy Joel?");
// prompt("Eres un sissy Joel?");
// confirm("Eres un sissy Joel?");
// document.write("Eres un sissy Joel?");
// //comentario de una linea
// /*comentario
// de varias
// lineas*/
// // //comentario de una linea
// /*comentario
// de varias
// lineas*/


function crearContador() {
  let contador = 0;
  return {
    suma: function() {
      contador++;
      return contador;
    },
    resta: function() {
      contador--;
      return contador;
    } 
  };
}

let {suma, resta} = crearContador();
console.log(suma());
console.log(resta()); 

const a = [1, 2, 3,"amarillo", true, null];
a.forEach(n => console.log(n));