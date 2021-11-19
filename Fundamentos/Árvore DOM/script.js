let titulo = document.getElementById("titulo");
console.log(titulo);
if(titulo != null) {
    console.log("document.getElementById(titulo) funcionou");
}

let subtitulos = document.getElementsByClassName("subtitulo");
if(subtitulos != null) {
    console.log("document.getElementsByClassName(subtitulo) funcionou");
}

let paragrafos = document.getElementsByTagName("p");
if(paragrafos != null) {
    console.log("document.getElementsByTagName(p) funcionou");
}

let titulo_query = document.querySelector("#titulo");
if(titulo_query != null) {
    console.log("document.querySelector(#titulo) funcionou");
}

let subtitulos_query = document.querySelectorAll(".subtitulo");
if(subtitulos_query != null) {
    console.log("document.querySelectorAll(.subtitulo) funcionou");
}