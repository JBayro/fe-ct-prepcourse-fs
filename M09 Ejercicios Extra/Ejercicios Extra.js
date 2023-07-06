/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var charCount = {};
  
   // Recorremos 
   for (var i = 0; i < string.length; i++) {
     var char = string[i];
     
     // si el caracter ya está en el objeto
     if (charCount[char]) {
       // Si ya existe, incrementamos 
       charCount[char]++;
     } else {
       // Si no existe, lo agregamos 
       charCount[char] = 1;
     }
   }
   
   // Ordenamos
   var sortedCharCount = {};
   Object.keys(charCount).sort().forEach(function(key) {
     sortedCharCount[key] = charCount[key];
   });
   
   return sortedCharCount;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var uppercase = "";
  var lowercase = "";

  // Recorremos el string
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    
    // Verificamos si el caracter es una letra mayúscula o minúscula
    if (char === char.toUpperCase()) {
      uppercase += char;
    } else {
      lowercase += char;
    }
  }

  // Concatenamos las letras mayúsculas al principio y las minúsculas al final
  return uppercase + lowercase;
   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");
   var resultado = [];
 
   // Recorremos cada palabra de la frase
   for (var i = 0; i < palabras.length; i++) {
     var palabra = palabras[i];
     var palabraInversa = "";
 
     // Invertimos cada palabra
     for (var j = palabra.length - 1; j >= 0; j--) {
       palabraInversa += palabra.charAt(j);
     }
 
     resultado.push(palabraInversa);
   }
 
   // Unimos las palabras invertidas en un nuevo string
   return resultado.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString();
   var numeroReverso = numeroString.split("").reverse().join("");
 
   if (numeroString === numeroReverso) {
     return "Es capicua";
   } else {
     return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/g, "");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
    });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = [];

  // Recorremos el primer arreglo
  for (var i = 0; i < array1.length; i++) {
    var elemento = array1[i];

    // Verificamos si el elemento está presente en el segundo arreglo
    if (array2.includes(elemento)) {
      interseccion.push(elemento);
    }
  }

  return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
