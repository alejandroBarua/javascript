//BOM son los metodos y objetos que cuelgan directamente de windows y que hacen referencia a la ventana del navegador

// propiedades y eventos del BOM


window.addEventListener("resize", e => {

    console.clear();
    console.log("***evento Resize***"); // se ejecuta cuando cambiamos cambiamos la ventana

    // tamaño de la ventana que ocupa la pagina web
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    // tamaño de la ventana del navegador
    console.log(window.outerWidth);
    console.log(window.outerHeight);

});


window.addEventListener("scroll", e => {

    console.clear();
    console.log("***evento Scroll***"); // se ejecuta cuando movemos el scrool

    // tamaño de la ventana que ocupa la pagina web
    console.log(window.scrollX);
    console.log(window.scrollY);

});


window.addEventListener("load", e => {

    console.log("***evento Load***"); // el evento load se ejecuta despues de que la pagina se termina de cargar completa

    console.log(window.screenX);
    console.log(window.screenY);
});


// evento DOMContentLoaded

document.addEventListener("DOMContentLoaded", e => {

    console.log("***evento DOMContentLoaded***"); // es buena practica usar este evento porque es mas rapido que load pero no espera que se cargen todos los elementos de la pagina , como imagenes, etc

    console.log(window.screenX);
    console.log(window.screenY);

});

/* El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado, sin esperar hojas de estilo, images o respuestas de APIs*/



// metodos del BOM

const $btnAbrir = document.querySelector(".abrirVentana-btn"),
    $btnCerrar = document.querySelector(".cerrarVentana-btn"),
    $btnImprimir = document.querySelector(".imprimirVentana-btn");

let ventana; // esta variable va a contener la referencia a la ventana que estamos abriendo

$btnAbrir.addEventListener("click", () => {
    ventana = window.open("https://www.google.com/");
});

$btnCerrar.addEventListener("click", () => {
    ventana.close();
});

$btnImprimir.addEventListener("click", () => {
    window.print();
});



// objetos del BOM: URL, historial y navegador

/* 
console.log(location);
console.log(location.origin);
console.log(location.protocol); // htpp:
console.log(location.host); // 127.0.0.1:5500
console.log(location.hostname); // nombre del dominio
console.log(location.port); // puerto
console.log(location.href); // URL completo
console.log(location.hash); // 
console.log(location.search); // 
console.log(location.pathname) // da el nombre del documento html
*/

/* 
console.log(history);
console.log(history.length);
history.back(2) // me vuelve dos paginas atras
history.fordward(2) // va hacia delante
history.go(3) // hacia delante
history.go(-1) // hacia atras
*/

/* 
console.log(navigator);
console.log(navigator.connection); // nos da informacion sobre la coneccion del usuario
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine); // si el usuario perdio la coneccion sera false
console.log(navigator.serviceWorker); // para poder hacer tu sitio web una aplicacion instalable
console.log(navigator.storage);
console.log(navigator.usb); // si esta activado al blo
console.log(navigator.userAgent);
*/