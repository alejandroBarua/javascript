
// manejadores de eventos

const $cambiarBtn = document.querySelector(".cambiarFondo-btn"),
    $removerBtn = document.querySelector(".removerEvento-btn");

const cambiarFondo = e => {
    console.log(e.type); // da cual es el evento
    console.log(e.target); // da el html del elemento que origino el evento

    document.body.classList.toggle("fondoClaro");
    $cambiarBtn.classList.toggle("fondoClaro");
}

$cambiarBtn.addEventListener("click", cambiarFondo); 

$removerBtn.addEventListener("click", () => {
    $cambiarBtn.removeEventListener("click", cambiarFondo); // remueve la funcion saludar asociado al evento click 
    $removerBtn.disabled = true; // esto desabilita el boton remover
    $removerBtn.style.backgroundColor = "rgb(138, 31, 31)";
    $cambiarBtn.style.backgroundColor = "rgb(185, 185, 185)";
});

const saludar = nombre => console.log(`hola ${nombre}`);
$cambiarBtn.addEventListener("click", () => saludar("alejandro")); // esta es la forma de asociar un evento a una funcion con pasaje de parametro



// flujo de eventos

const $divsEventos = document.querySelectorAll(".flujo-eventos div");

function flujoEventos(e) {
    const $div = this;
    
    console.log(`${$div.className} lo origino ${e.target.className}`);

    $div.classList.add("fondoRed");
    
    setTimeout(() => {
        $div.classList.remove("fondoRed");
    }, 300);
    
    e.stopPropagation(); // se detiene la propagacion de eventos
 }

$divsEventos.forEach(div => {
    div.addEventListener("click", flujoEventos, {
        capture: false, // del interior al exterior -> fase de burbuja
        //capture: true, // del exterior al interior  -> fase de captura
        //once: true // si once es true solo se va a ejecutar una ves el evento despues se desabilita el evento para los tres divs
    });
})



// stopPropagation & preventDefault

const $link = document.querySelector(".flujo-eventos a");

$link.addEventListener("click", e => {
    
    e.preventDefault(); // cancela el evento por defecto del elemento, en este caso abrir el enlace en una nueva pestaña
    e.stopPropagation(); // para que solo se ejecute el evento del elemento que estoy haciendo click y que no se propagen lo eventos
})



// delegacion de eventos

// En lugar de tener varios listeners, es mas eficiente asignarle solamente un "listener" al "document" y través de un condicional evaluamos quien origino el evento.

// asignandole el evento al "document":
// *no hace falta poner e.stopPropagation(); porque ya evitamos la propagacion de eventos
// *no saldran errores a la hora de crear o borrar elementos del dom, ya que no puede haber "listener" de elementos que no estan cargados en el dom

document.addEventListener("click", e => {

    if (e.target.matches(".flujo-eventos div")) { 
        flujoEventos(e);
    }  
    
    if (e.target.matches(".flujo-eventos a")) {
        e.preventDefault();
    }
})

// matches da true si presiono un elemento con la clase que le paso



// eventos de teclado

// keybown: cuando apreciono una tecla
// keyup: cuando dejo de presionar la tecla

document.addEventListener("keyup", e => {

    console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);

    if(e.key === "a" && e.altKey) alert("warning message");

    if(e.key === "c" && e.altKey) confirm("do you want to confirm?");
        
    if(e.key === "p" && e.altKey){
        let text = prompt("you can write what you want");
        console.log(text);
    }

});
