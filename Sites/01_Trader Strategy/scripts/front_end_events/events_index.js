function alterar_tema() {
    let nav_bar = document.querySelector("#menu");
    let icone_tema = document.querySelector("#icone_tema");
    let label_tema = document.querySelector("#label_tema");
    if(label_tema.innerHTML == "Escuro") {
        nav_bar.setAttribute('class', 'nav_escuro');
        let boxes = document.querySelectorAll(".box_claro");
        console.log(boxes);
        for(let i = 0; i != 4; i++) {
            boxes[i].setAttribute('class', 'box_escuro');
        }
        icone_tema.setAttribute('src', '/imagens/icones/tema_claro.ico');
        label_tema.innerHTML = "Claro";
    } else {
        nav_bar.setAttribute('class', 'nav_claro');
        let boxes = document.querySelectorAll(".box_escuro");
        console.log(boxes);
        for(let i = 0; i != 4; i++) {
            boxes[i].setAttribute('class', 'box_claro');
        }
        icone_tema.setAttribute('src', '/imagens/icones/tema_escuro.ico');
        label_tema.innerHTML = "Escuro";
    }
}
// Criar classes css referentes ao tema dark e alterar o style setando classes
let btn_altera_tema = document.querySelector("#tema");
btn_altera_tema.addEventListener("click", alterar_tema);
console.log(btn_altera_tema);

function alterar_status() {
    let icone_status = document.querySelector("#icone_status");
    icone_status.setAttribute('src', '/imagens/icones/icone_status_hover.ico');
    console.log("dadsd");
}
let btn_status = document.querySelector("#status");
btn_status.addEventListener("mouseover", alterar_status);