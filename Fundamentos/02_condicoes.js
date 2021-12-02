/*
* As condições em JavaScript são dadas por if, else if e else
* Detalhes:
*    . Podemos ter if seguido de vários else if e um else final. Outro ponto é que você
*    deve garantir que este else final é a última condição ou possibilidade restante de
*    uma análise.
*/

/*
* Exemplificando, suponha que queremos saber o imc (Índice de Massa Corporal) de uma pessoa
* e seu estado na tabela de imc para analisar se ela está abaixo, acima ou no peso ideal.
*/
let peso = 72.5;
let altura = 1.85;

/*
* Temos os dados de peso e altura da pessoa. Em seguida, calculamos o imc usando a fórmula:
* imc é igual ao peso dividido pela altura ao quadrado.
*/
let imc = peso / (altura * altura);
console.log(`Seu imc é de ${imc}`);
if(imc < 18.5){
    console.log("Você está abaixo do peso");
}
else if((imc >= 18.5) & (imc < 25)){
    console.log("Você está no peso ideal");
}
else if((imc >= 25) & (imc < 30)){
    console.log("Você está em sobrepeso");
}
else if((imc >= 30) & (imc < 35)){
    console.log("Você está em obesidade I");
}
else if((imc >= 35) & (imc < 40)){
    console.log("Você está em obesidade II");
} else {
    console.log("Você está em obesidade III (ou Morbida)"); // Observe que esta é a última condição restante
}

