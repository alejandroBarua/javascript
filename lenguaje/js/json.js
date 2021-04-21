/*json es el estandar que se usa para que se entiendan diferentes lenguajes en el intercambio de informacion
*/

const jason = {
    cadena: "jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter: "mirchaa",
        email: "jonmirchae"
    },
    nulo: null
}

console.log(jason);

console.log("[1, 2, 3]"); // me imprime una cadena

// metodo parce
// recibe un objeto en formato de texto plano

console.log(JSON.parse("[1,2,3]"));
//console.log(JSON.parse("hola mundo")); // da error xq no es objeto
//console.log(JSON.parse("undifined")); // da error

// metodo stringify convierte a cadena de texto (a formato JSON)

console.log(JSON.stringify([1, 2, 3])) // este es un array real entonces lo convierte a cadena de texto.
console.log(JSON.stringify(false));

console.log(JSON.stringify({nombre: "alejandro", edad: 25})); // pasa este objeto a formato json
console.log(JSON.stringify(jason));

console.log(JSON.parse('{"cadena":"jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"mirchaa","email":"jonmirchae"},"nulo":null}')); // pasa todo a un objeto primitivo de javascript
