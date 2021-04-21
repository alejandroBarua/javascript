//sets

// un set es un array de datos unicos, si se repite lo deja solo una ves y no es lo mismo hola que HOla

const set1 = new Set([1, 2, 2, true, {}, "hola", "HoLa"]);

console.log(set1.size); // no se usa length como en los arrays

set1.add(2);
set1.add(8);
set1.add("ale");

console.log(set1[1]); // undefined no puedo acceder a las posiciones del set

let vec = Array.from(set1); //paso los datos del set a un array para poder acceder a una posicion dada

console.log(vec[1]);

set1.delete("hola"); // para eliminar un valor en particular del set
set1.has("HoLa"); // me devuelve true si esta el valor que le pase en el set
set1.clear(); // borra todos los datos del set

// un uso puede ser para que no se duplique una base de dato con correos electronicos

console.clear();


// propiedades dinamicas


let aleatorio = Math.round(Math.random()*100 + 5);

const objUsuarios = {
    propiedad: "valor",
    [`id_${aleatorio}`]: "valor aleatorio"
};

console.log(objUsuarios);

const usuarios = ["jon", "irma", "miguel", "kala", "kenai"];

// por cada usuario se va a crear una propiedad que contenga la posicion dentro del array
// para crear una propiedad se usan corchetes

usuarios.forEach((usuario, index) => objUsuarios[`id: ${index}`] = usuario);

console.log(objUsuarios);

// un uso seria por ejemplo si se deben crear dinamicamente varios div dependiendo de una cantidad que no sabemos ya que esperamos la respuesta de un servidor


// call, apply y bind

console.log(this);

this.lugar = "contexto global";

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

const Obj = {
    lugar: "contexto objeto"
}

saludar.call(Obj, "hola", "jon"); // le puedo especificar el this de que contexto quierp llamar

saludar.apply(this, ["adios", "mircha"]); // apply se usa para lo mismo nada mas que recibe un array

const humano = {
    nombre: "jon",
    saludar: function () {
        console.log(`hola ${this.nombre}`)
    }
}

humano.saludar();

const otroHumano = {
    saludar: humano.saludar.bind(humano) // enlazo el contexto de humano, para enlazar a windows cambio humano por this
}

otroHumano.saludar();


//bind se usa en react
