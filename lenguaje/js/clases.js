/* 
clases = modelo a seguir
objeto = es una instancia de una clase
las clases y los objetos tienen atributos(propiedades) y metodos(acciones)

javascript es un lenguaje orientado (POO) a objetos basado en prototipos no en clases, entonces en la compilacion las clases se pasan a funciones prototipicas. 

un prototipo es un mecanismo por el cual un objeto puede hederar atributos y metodos de un objeto padre.

*/

 /* ************* ASI SE TRABAJABA CON OBJETOS ANTES DE QUE SE PUEDAN USAR CLASES ************* */

const animal1 = {
            nombre: "kenai",
            edad: 2,
            sonar(){
                console.log("hago sonidos porque estoy vivo");
            }
        }

const animal2 = {
            nombre: "roco",
            edad: 5,
            sonar(){
                console.log("Hago sonidos porque estoy vivo");
            }
        }

console.log(animal1);
console.log(animal2);

// hacer esto no es funcional, en este caso se debe usar una clase animal

// funcion constructora
/* 
function Animal(nombre, edad){ 
        // atributos
        this.nombre = nombre;
        this.edad = edad; 
        // metodos
        this.sonar = function(){
                console.log("hago sonidos porque estoy vivo");
        }
}

const kenai = new Animal("kenai", 2),
    rambo = new Animal("rambo", 5);

console.log(kenai);
console.log(rambo); // cada una tiene el metodo sonar
 */

// para mejorar el rendimiento y la memoria de nuestro programa los metodos ban afuera de la funcion constructora pero asignadas a ella

function Animal(nombre, edad){ 

    this.nombre = nombre;
    this.edad = edad; 
}

Animal.prototype.sonar = function(){ console.log("hago sonidos porque estoy vivo")}
Animal.prototype.saludar = function(){ console.log(`hola me llamo ${this.nombre}`)}

const kenai = new Animal("kenai", 2);

console.log(kenai);

kenai.sonar();


// herencia prototipica

function Perro(nombre, edad, tamanio) {
    this.super = Animal,
    this.super(nombre, edad),
    this.tamanio = tamanio;
}

Perro.prototype = new Animal(); // Perro esta heredando de Animal
Perro. prototype.constructor = Perro;


// sobreescritura de metodos del prototipo padre en hijo
Perro.prototype.sonar = function () { console.log("soy un perro y mi sonido es un ladrido")}

// agrego metodo al prototipo Perro
Perro.prototype.ladrar = function () { console.log("gua gua gua") }


const roco = new Perro("roco", 2, "mediano")

console.log(roco);
//roco.sonar();
roco.saludar();
//roco.ladrar();


console.clear();
/* *************************** CLASES ************************* */
// se escribe como clase pero se sigue usando prototipos.

//clases : no reciben parametros

class Animals{

    constructor(nombre, edad){

        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){ // aunque esta dentro de la clase no desperdicia memoria
        console.log(`hola me llamo ${this.nombre}`);
    }

}


const lolo = new Animals("lolo", 2);

console.log(lolo);
lolo.saludar();



// herencia

class Perroo extends Animals{ // Perro deriva de Animals y Animals de Object

    constructor(nombre, edad, tamanio){
        super(nombre, edad); // el metodo super llama a los atributos del padre
        this.tamanio = tamanio;
    }

    saludar(){
        console.log(`hola soy un perro y me llamo ${this.nombre}`);
    }

    ladrar(){
        console.log("guauuuuuu");  
    }

}

const scooby = new Perroo("scooby", 3, "gigante");

console.log(scooby);
scooby.saludar();




/* ********************** metodos estaticos, getters y setters ******************** */

/*
en un lenguaje orientado a objetos, existen los tipos de clases:
  clases abstractas, clases publicas, privadas y protegidas.
  estas tipos impactan el el uso de los atributos y los metodos.

-NO se pueden crear clases privadas en javascript! todas las clases son publicas!
-tampoco hay clases abstractas

*/


class Gato extends Animals{

    constructor(nombre, edad, tamanio){
        super(nombre, edad); //llama a los atributos del padre
        this.tamanio = tamanio;
        this.raza = null; //le asigno null para usar los metodos getters y setters
    }

    saludar(){
        console.log(`hola soy un gato y me llamo ${this.nombre}`);
    }

    static maullar(){  // metodo estatico
        console.log("miauuu");  
    }


    //para usar los metodos getters y setters
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza; 
    }

}


// metodo estatico: es aquel que se puede ejecutar sin necesidad de haber creado un objeto del tipo de clase a donde pertenece el metodo
Gato.maullar(); //puedo ejecutar el metodo de una clase sin crear un objeto hijo de esta clase


 // metodos getters y setters son metodos especiales que nos permiten establecer y obtener valores de atributos de nuestra clase

const gato = new Gato("mimi", "hembra", "pequeño");

console.log(gato.getRaza);
gato.setRaza = "gran danes"; 
console.log(gato.getRaza);

// OBSERVACION: aunque son metodos se los utiliza como atributo