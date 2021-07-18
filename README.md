# Apunte de Javascript

Este proyecto tiene herramientas para trabajar con javascript.
Es un resumen de las bases del lenguaje, objetos, clases, eventos, Api Rest, AJAX, etc.

## En las bases del lenguajes hay temas como:

- Cual es la diferencia entre var, let y const
- Tipos de datos y el uso del typeof

  Diferencia entre null, NaN, undefinend.

- Metodos y propiedades de los objetos: Strings, Number, Array, Date, Math

  Metodos muy utiles como, por ejemplo cuando pasamos un numero a traves de un input, este se pasa como string, entonces, se puede usar el metodo parseInt para pasarlo a number

- Funcion declarada, funcion expresada, arrow functions y funcion anonima autoejecutable

  Porque es "buena practica" usar funciones expresadas.

- Condicionales: switch, if-else y el operador ternario

  Doble igual (==) compara valor
  Triple igual (===) compara valor y tipo

- Ciclos: while, do-while, for, forEach
- Continue and break

  Usualmente se usan en los ciclos pero por experiencia en el forEach no funcionan.

- Concatenación y template string
  Porque me conviene usar templates generar codigo html.
- Como se declara un objeto

  Se puede tener un objeto o array como atributo de un objeto.
  En la estructura del objeto, que pasa cuando usamos this dentro de la declaracion de un metodo? si usamos una arrow function el objeto this hace referencia al objeto window, no al objeto.

- Destructuración de arrays y objetos

## Javascript orientado a objetos:

- Prototipo y herencia prototipica

  Como se trabajaba antes de que llegaran las clases.

- Clases y herencia

  En javascript no se pueden crear metodos privados, ni metodos abstractos como en otros lenguajes.

- Metodos estaticos: getters y setters

  Estos metodos se utilizan como si fueran propiedades.

## Asincronia en javascript:

- Operaciones bloqueantes y no bloqueantes
- etTimeout y setInteval

  Lo usamos para simular la respuesta de una API.

- Callback, callback-hell
- Promise y async-await

  Para los callbacks, promesas y async-await, se debe saber que una no reemplaza a la otra.Las promesas no reemplazan a los callbacks. Vamos a usar ambos cuando invocamos una funcion o metodo y este nos pide un callback o nos devuelve una promesa para gestionar la respuesta de manera asincrona. Y cuando trabajamos con async-await debemos trabajar con promesas porque el await espera una.

## Hay herramientas que no son fundamentales pero pueden ayudar:

- Operador de cortocircuito: OR y AND
- Parametro REST o spread

  Parametro REST nos puede servir cuando no sabemos cuantos parametros va a recibir una función y para destructurar estructuras.

- Expresiones regulares

  Se usan para validar que lo que el usuario ingresa siga un determinado patron. No se suele usar si se debe hacer validaciones comunes como el ingreso de un gmail ya que con html5 ya se puede hacer.

- Objeto set

  Un set es un "array de datos unicos", no se pueden agregar valores que ya estan en el set.

- call, apply y bind

  Cuando queremos usar una misma funcion para varios objetos que tienen las mismas propiedades, en la funcion se hace referencia a la propiedad del objeto anteponiendo el this. Vamos a poder asociar este this de forma dinamica, pasandole el objeto al cual hace referencia.
  Bind retorna una nueva funcion con la referencia del objeto ya hecha.
