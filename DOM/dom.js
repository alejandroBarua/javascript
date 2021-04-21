console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.charset);
console.log(document.title);
console.log(document.links); // lista de links no es un array
console.log(document.images); 
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

/* setTimeout(() => {
    
    console.log(document.getSelection().toString()); // mostrara lo seleccionado
    
}, 3000); */

//document.write("<h2> hola mundo desde el DOM</h2>"); // no es buena practica utilizarlo

console.clear();

// clase 62: elementos del dom


console.log(document.getElementById("menu")); // me devuelve el codigo html


console.log(document.querySelector("li")); // me devulvera el html del figure que este primero
console.log(document.querySelectorAll("li")); // me devuelve una nodelista con todas las etiquetas li del documento
console.log(document.querySelectorAll("li").length);

console.log(document.querySelector(".card")); // me mostrara el primero que aparesca
console.log(document.querySelectorAll(".card")[2]);

console.log(document.querySelector("#menu")); // no reemplaza a getElementById

console.log(document.querySelectorAll("#menu li")); // solo quiero las li que estan dentro del menu

document.querySelectorAll("a").forEach(el => console.log(el)); // muestro cada etiqueta en codigo html

console.clear();

// clase 63: atributos y data-atributos ( para crear nuestros propios atributos)

// estas dos dan lo mismo pero la mejor manera es hacerlo con getAtributte

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

// estas dos dan cosas diferentes 

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es"; // cambio valor de la propiedad
console.log(document.documentElement.getAttribute("lang"));

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.getAttribute("lang"));



const $linkDOM = document.querySelector(".link-dom"); // $ hace referencia a que es un elemento del DOM

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener"); // por seguridad de la nueva ventana que estamos abriendo
$linkDOM.setAttribute("href", "https://www.google.com/");

console.log($linkDOM.hasAttribute("rel")); // me devuelve true si encuentra el atributo en el elemento

$linkDOM.removeAttribute("rel"); // borramos el atributo
console.log($linkDOM.hasAttribute("rel"));


// Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); // me ba a guardar en un mapa todos los data-atributos que tenemos en el documento

console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "modelo de objeto del documento");

console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "otra forma de cambiar el valor de la propiedad";
console.log($linkDOM.dataset.description);

console.clear();

// clase 64: estilos y variables css

console.log($linkDOM.style); // este se suele usar mas!
console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style.color);
//console.log(this.getComputedStyle($linkDOM)); // me da todas las propiedades del enlace
$linkDOM.style.setProperty("text-decoration", "none");
//console.log(getComputedStyle($linkDOM).getPropertyValue("color")); // esta es otra forma de acceder a la propiedad color


// formas de cambiar el valor a una propiedad
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.display = "block";
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRigth = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "5rem";

//variables en css

const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;


//$html.style.setProperty("--dark-color", "pink");// asi modifico las propiedades de la variable css
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//$body.style.backgroundColor = varDarkColor;
$body.style.setProperty("background-color", varDarkColor); // es otra forma de aserlo

console.clear();

// clase 65: clases en css

const $card = document.querySelector(".card"); // me da el primero

$card.classList.add("rotate-45"); // agrego la clase al elemento
console.log($card.classList.contains("rotate-45")); // verifico si lo agrege me devuelve true
console.log($card.classList); // me da una lista con todas las clases que tenga el elemento
$card.classList.remove("rotate-45"); // quito la clase

$card.classList.toggle("rotate-45"); // si no tiene la clase se la agrega, si la tiene se la quita

$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80", "sepia"); // puedo agregar mas de una clase a la ves si la reparo por comas, lo mismo pasa con REMOVE y TOGGLE

console.clear();

// clase 66: manejo de texto


const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`
;

$whatIsDOM.textContent = text; // no interpreta el codigo html y lo pone todo de corrido
$whatIsDOM.innerHTML = text; // interpreta el codigo html
  
$whatIsDOM.outerHTML = text; // se usa para reemplazar la etiqueta que tenia antes por la que le paso, osea que ya no voy a tener el elemento "que es", ahora tendre tres parrafos por separado, sin ninguna caja que las contenga

$body.style.backgroundColor = "white";
$body.style.color = "#222";
$card.classList.remove("rotate-135");

// clase 67: recorriendo los elementos del DOM

let $cards = document.querySelector(".cards");

console.log($cards); // me manda el html
console.log($cards.children); // crea una lista con los elementos con esta clase
console.log($cards.children[2]);
console.log($cards.firstElementChild); // da el primero con la clase
console.log($cards.lastElementChild); // da el ultimo con la clase
console.log($cards.parentElement); // el elemento padre

console.log($cards.previousElementSibling); // da el elemento que esta antes de que aparesca la clase
console.log($cards.nextElementSibling);

console.clear();

// clase 68: creando elementos dinamicamente


const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("People");


$img.setAttribute("src", "https://placeimg.com/200/200/people");
$img.setAttribute("alt", "People");

$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);  


const estaciones = ["verano", "invierno", "otoño", "primavera"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})


// en este caso estamos insertando los elementos uno por uno, en un ejemplo real donde hay que insertar 100 productos es ineficiente hacerlos uno a uno ya que el proceso cuesta, lo que se debe hacer en ese caso es cargarlo todo en un "fragmento" y despues hacer un sola insercion, esto mejora el rendimiento de la aplicacion


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

const $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);


// clase 69: templates html

const $template = document.getElementById("template-card").content;
const cardContent = [
        {
            title: "Tecnología",
            img:"https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img:"https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img:"https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img:"https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img:"https://placeimg.com/200/200/nature"
        }
    ];

cardContent.forEach(el => {
    
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
})

 $cards.appendChild($fragment);


 // clase 70: modificando elementos (old style)

 const $newCard = document.createElement("figure");

 $newCard.innerHTML =  `
    <img src = "https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
 `;

 $newCard.classList.add("card");

 //$cards.replaceChild($newCard, $cards.children[2]); // para reemplazar un elemento

//$cards.insertBefore($newCard, $cards.firstChild); // insertara any antes de la primera

//$cards.removeChild($cards.lastElementChild);  // elimina el ultimo elemento


//nuevas formas de hacer lo mismo

$cards.insertAdjacentElement("afterbegin", $newCard); // pone al nuevo elemento como primer hijo
$cards.insertAdjacentElement("beforeend", $newCard); // se agrega como ultimo hijo

/*
.insertAdjacent... 
    .insertAdjacentElement(posicion, elemento);
    .insertAdjacentHTML(posicion, codigo html);
    .insertAdjacentText(posicion, texto);

posiciones:
    beforebegin = hermano anterior
    afterBegin = primer hijo
    beforeend = ultimo hijo
    afterend = hermano siguiente
*/

const $newCard2 = document.createElement("figure");

let $contenCard =  `
    <img src = "https://placeimg.com/200/200/any" alt="Any">
    <figcaption> </figcaption>
 `;

$newCard2.classList.add("card");

$newCard2.insertAdjacentHTML("beforeend", $contenCard);
$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "hola");
$cards.insertAdjacentElement("afterbegin", $newCard2);

$cards.prepend($newCard2); // lo agrega como primer hijo
$cards.append($newCard2); // lo agrega como ultimo hijo
$cards.before($newCard2); // lo agrega antes de cards (osea como hermano anterior)
$cards.after($newCard2); // lo agrega como hermano posterior

