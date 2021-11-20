/*
* . Repetições ou laços: são trechos de códigos que serão executados n vezes;
*   . for;
*   . while;
*   . do...while;
*/
    
/*
* . for(inicialização; condição; iteração) {}
*/
let lista = [0, 1, 2, 3, 4];
for(let i = 0; i < lista.length; i++) {
    console.log("Hello World");
}
    
/*
* . O mesmo for acima escrito como while e do...while;
*/
let i = 0;
while(i < 10) {
    console.log("Hello World");
    i++;
}
    
let j = 0;
do{
    console.log("Hello World");
    j++;
} while(j < 10);

