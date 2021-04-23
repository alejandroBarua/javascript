import Component from "./component.js";
// axios
// axios es una libreria externa

/* 
(() => {

    const $axios = document.querySelector(".axios");

    axios.get("https://api.github.com/users/alejandroBarua")
        .then(res => {
            
            let json = res.data;

            Component($axios, json);
            
        })
        .catch(err => {

            let message = err.response.statusText || "ocurrio un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {});
})();

 */

// Axios + Async-Await

(() => {

    const $axiosAsync = document.querySelector(".axios-async");

    async function getData() {
        
        try {
            
            let res = await axios.get("https://api.github.com/users/alejandroBarua"),
                json = await res.data;

            Component($axiosAsync, json);

        } catch (err) {
            
            let message = err.response.statusText || "ocurrio un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;            

        } finally{

        }
    }
        
    getData();

})();