const persona = { // objeto persona
        nombre: "Alejandro", // string
        apellido: "Barua",
        edad: 22, // number
        soltero: true, // boolean
        pasatiempos:["correr", "hacer ejercicio", "dar clases"], // array

        contacto : { // objeto contacto
            email: "baruaalejandro@",
            movil: "11222244578"
        },

        // funcion dentro de un objeto = metodo
        decirMiNombre: function() {  // this hace referencia al objeto perro
            console.log(`hola me llamo ${this.nombre} ${this.apellido}`); // interpolacion
        }

        /* decirMiNombre: () => {  // this hace referencia al objeto windows
            console.log(`hola me llamo ${this.nombre} ${this.apellido}`);
        } 
        // las funciones flechas se saltan el contexto en el que estan y heredan el contexto "padre" osea windows por esta razon no se usan para declarar metodos*/
    }

persona.decirMiNombre();
 
// metodos de los objetos

Object.keys(persona); // lista de los atributos
Object.values(persona); // lista de valores de las propiedades
persona.hasOwnProperty("nombre"); // me da true si existe un atributo con la cadena que le paso
 

let nombreCompleto = persona.nombre + " " + persona.apellido; // concatenacion

/* se usa la interpolacion para crear codigo html de forma dinamica! 
ya que la concatenacion resulta muy poco lejible y se imprime todo corrido */

let $estaciones = `<ul>
                    <li>invierno</li>
                    <li>otoño</li>
                    <li>primavera</li>
                    <li>verano</li>
                </ul>`;

let saludo;

console.log(typeof 12, typeof saludo); // number y undefinend
console.log(typeof persona.nombre*3) // NaN
console.log(typeof [], typeof {}); // los object, los arrays y las funciones tambien son de tipo object


// propiedad de string

persona.nombre.length; // 4

// metodos de strings
persona.nombre.toUpperCase() // ALEJANDRO
persona.nombre.toLowerCase() // alejandro
persona.nombre.trim() // quita los espacios en blanco no quita espacios entre palabras

persona.nombre.includes("o") // devuelve true si lo encuentra en el string
persona.nombre.split(" ") //me ba a generar un array teniendo encuenta el espacio(muy util)


/* usualmente de los formularios nos ban a llegar datos string dependiendo si estos numeros los quiero operar los voy a tener que pasar a numero */

let altura = "1.71"; // string
parseFloat(altura);
console.log(typeof altura); // string, CONCLUSION: el parse no cambia el tipo de dato de la variable parseada, sino este parseo se tiene que almacenar en otra variable
altura = parseFloat(altura);
console.log(typeof altura); // number
altura.toFixed(1); // 1.7 le especifico cuantos decimales quiero

parseInt(altura); // a = 1;

/* - hay valores que tienden a falso y otros a verdadero

.falso: 0, '', "", null, undefined, NaN
.verdadero: -7, 7, {}, [], infinity, -infinity. */


const array = [ 1, true, "hola", ["A", "B", "C"] ]; // un array puede estar compuesto por mas de un tipo de dato
console.log(array[1]); // true
console.log(array[3][0]); // A

const array2 = Array(5).fill({
    id : null,
    nombre : null
}); // es un array con 5 posiciones y en cada posicion hay un objeto


// metodos de los arrays

array.push("alicia"); // agrega elemento
array.pop(); // elimina el ultimo

// hay dos formas de recorrer un array con for y con forEach

const arrayEstaciones = ["invierno", "otono", "primavera", "verano"];

/* for(let i = 0; i < numeros.length; i++){ // propiedad length
    console.log(`<li id = "${i}" > ${numeros[i]} </li>`)
}
 */

arrayEstaciones.forEach((el, index) => {
    //console.log(`<li id = "${index}" > ${el} </li>`)
});


 
 // if(condicion 1){ }else if (condicion 2){ }else { }

 /* operador ternario
                      condicion       verdadero         falso */
 let eresMayor = (persona.edad > 17)? "eres mayor" : "eres menor";


/* let residuo = 5 % 2 me devuelve el residuo de una division osea 1.

= asignacion de variable
== comparacion de valores 7 == "7" me da true
=== comparacion de tipos de dato y de valor 7 === "7" me da false
#una buena practica es usar triple igual. */
 
 // switch - case 

 let dia = 1;

 switch (dia){
    case 0: 
        console.log("domingo");
        break;
    case 1: 
        console.log("lunes");
        break;
    case 2: 
        console.log("martes");
        break;
    default:
        console.log("el dia no existe");
        break; 
}


// while y do-while son estructuras que cada ves estan menos utilizadas:

let contador = 0;

while (contador < 3){ // mientras que contador sea menor a diez
     console.log(contador);
     contador++;
}

do{ // el do-while siempre al menos se ba a ejecutar una ves
     console.log(contador);
     contador++;
}while(contador < 3)


// continue and break

// el continue hace saltar al siguiente ciclo, mientras que el break termina el ciclo

for(let i = 0; i < 10; i++){

    if(i % 2 === 0){ 
        console.log("continue");
        continue;
    }

    console.log(i); // se imprimiran los numeros impares
}

for(let i = 0; i < 10; i++){

    if(i === 5){
        console.log("break");
        break;
    }

    console.log(i); // se imprimiran los numeros hasta el 4, NO imprimira el 5
}


// operador de cortocircuito

// cortocircuito OR - si el valor de la izquierda es true, se cargara por defecto.

console.log(19 || "valor de la derecha"); // da 19 porque tiende a true
console.log(false || "valor de la derecha"); // da el valor de la derecha

// cortocircuito AND - si el valor de la izquierda es false, es el valor que se cargara por defecto.

console.log(19 || "valor de la derecha"); // da el valor de la derecha
console.log(false || "valor de la derecha"); // da false



/* ********************  FUNCIONES ********************** */

// funcionDeclarada();  // invocacion de la funcion

function funcionDeclarada(a = "20", b = "30"){ // le doy valores por defecto

    alarm("se puede invocar en cualquier parte de nuestro codigo, incluso antes de su definicion")

    return "exito";
}

// funcionDeclarada(); 


const funcionExpresada = () => {  // arrow function
    
    alert("esta solo se puede invocar despues de su definicion");
}

// funcionExpresada();  // es de buena practica


// arrow functions

const funcionArrow = nombre => alert(`hola ${nombre}`); //puedo quitar los parentesis si tengo un parametro
const sumando = (a, b) => a+b; //arrow function con retorno 


// funcion anonima autoejecutable   ( () => {} )

!function(){
    console.log("esta es una funcion anonima autoejecutable");
}(); // es necesario el punto y coma!

((a, b) => {
    console.log( a+ b); // otra forma de escribirla
})(2, 5) // puede ir sin punto y coma


console.clear();

/* ************** objetos Date y Math **************** */

let fecha = new Date();
console.log(Date());    // Fri Feb 05 2021 22:23:05 GMT-0300 (hora estándar de Argentina)
console.log(fecha);     //Fri Feb 05 2021 22:23:05 GMT-0300 (hora estándar de Argentina)
console.log(fecha.toString()); // los tres dan lo mismo

console.log(fecha.getDate()); // numero del dia 
console.log(fecha.getDay()); //domingo = 0, lunes = 1 ...
console.log(fecha.getMonth()); // enero = 0, febrero 1, marzo = 2 ...
console.log(fecha.getFullYear()); // 2021
console.log(fecha.getHours(), fecha.getMinutes(), fecha.getSeconds(), fecha.getMilliseconds());

console.log(fecha.toDateString()); // thu mar 12 2020
console.log(fecha.toLocaleString()); // 12/3/2020 19:23:02
console.log(fecha.toLocaleDateString()); // 12/3/2020
console.log(fecha.toLocaleTimeString()); // 19:23:02

console.log(Date.now()); // da los milisegundos que pasaron desde el 1 de enero de 1970

let flecha2 = new Date(2021, 1, 5, 22, 15, 12); // año mes dia hora minuto segundo

console.log(flecha2) // fri feb 05 2021 22:15:12
console.log(Date.parse(flecha2)) // en milisegundos


console.clear();

// objeto math

console.log(Math.PI);
console.log(Math.abs(-7)); // modulo
console.log(Math.sign(-2)); // me da -1 si es negativo y 1 si es positivo

console.log(Math.ceil(7.2)); // redondea al mayor 8
console.log(Math.floor(7.8)); // redondea al menor 7
console.log(Math.round(7.49)) // redondea al que esta mas cerca 7

console.log(Math.sqrt(81)) // raiz de 81 = 9
console.log(Math.pow(2,3)); // 2 a la 3 = 8

console.log(Math.random()); // me da un numero REAL entre cero y uno
console.log(Math.random()*100) // me da un numero REAL aleatorio entre cero y 100
console.log(Math.floor(Math.random()*100)) // me da un numero ENTERO aleatorio entre cero y 100

let max = 10, // excluido
    min = 7; // incluido
let random = Math.floor(Math.random()* (max - min)) + min;

console.log(random); // 7, 8, 9


console.clear();

/* ******** Destructuracion ********  */

const numeros = [1,2,3];

//sin destructuracion

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

// con destructuracion

const[one, two, three] = numeros;

console.log(one, two, three); // 1 2 3 

let [a, b, c] = [10, 20, 30, 40, 50]; // otra forma de verlo
console.log(a, b, c); // 10 20 30

// otro ejemplo

const mascota = {
    tipo: "perro",
    nombre: "roco",
    edad: 4
}

//las variables se tienen que llamar igual que la propiedad del objeto
let{tipo, nombre, edad} = mascota;
console.log(tipo, nombre, edad); // perro roco 4



//objetos literales

let email = "@kenai", 
    tel = 11623;

const contac = {
    email, // email: "@kenai",
    tel, // tel: 11623,
    dir: "callejero",
    llamar(){
        console.log("hola!"); //nueva forma de escribir un metodo
    }
}

// parametro REST: es para poder resibir mas parametros de lo que se especifican.

function sumar(a, b, ...c){ // c es un array con los parametros que se agregaron
    let resultado = a + b;

    c.forEach(n => resultado += n);

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3,4,5));

// operador Spread: me sirve por ejemplo para unir dos vectores en un tercero

const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0];

//const arr3 = [arr1, arr2]; // de esta forma quedaria un vector que tiene dos posiciones y en cada posicion tiene un array

const arr3 = [...arr1, ...arr2]; //queda la union de los vectores


// ejemplo de destructuracion y el parametro Rest

let [num1, num2, ...rest] = [10, 20, 30, 40, 50, 60, 70];

console.log(rest); // [30, 40, 50, 60, 70]