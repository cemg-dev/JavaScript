/*
* . Toda função possue o seguinte formato:
*     function nome(parâmetros){
*       escopo      
*     }
*/
function soma(n1, n2) {
    return (n1 + n2);
}

function subtracao(n1, n2) {
    return (n1 - n2);
}

function imprime(n) {
    console.log(`Resultado: ${n}`);
}

let sum, n1 = 10, n2 = 10;
    
sum = soma(n1, n2); // o resultado da função soma foi armazenado na variável sum;
imprime(sum);
    
imprime(subtracao(n1, n2)); // o resultado de uma função pode ser imprimido diretamente

/*
* Em JavaScript existem ainda as funcoes construtoras e o prototype
*

// funcoes construtoras sempre tem a primeira letra maiuscula
function Point(x, y) {
    this.x = x;
    this.y = y;
}

let point = new Point(1, 1);

// podemos definir novos metodos para objetos Point
point.prototype.novo_metodo = function() {
    return Math.sqrt(
        this.x * this.x +
        this.y * this.y
    );
}
