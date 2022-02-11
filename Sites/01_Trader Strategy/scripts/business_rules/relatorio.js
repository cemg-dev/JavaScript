/*
* O calculo do valor de entrada baseia-se na instrategia de apostar uma porcentagem da sua banca.
* Esta porcentagem deve preferencialmente ser baixa, por exemplo, de 1% a 5% da sua banca tornando os ganhos
* mais seguros.
*/
function calcula_valor_de_entrada(valor_da_banca, porcentagem) {
    return ((porcentagem * valor_da_banca) / 100);
}

/*
* Case One da instrategia de investimentos onde em 3 entradas ha 2 gains e 1 loss saindo em 1 gain
*/
function ganho_parcial_mensal(valor_de_entrada) {
    let gains = 2 * valor_de_entrada;
    let losses = 1 * valor_de_entrada;
    let ganho_mensal = 30 * (gains - losses);
    return ganho_mensal;
}

/*
* Case Two da instrategia de investimentos onde em 3 entradas ha 3 gains
*/
function ganho_maximo_mensal(valor_de_entrada) {
    let gains = 3 * valor_de_entrada;
    let ganho_mensal = 30 * gains;
    return ganho_mensal;
}

/*
* A media entre os cases: case one (ganho parcial) e case two (ganho maximo) torna a estimativa mais aproximada
* da realidade. Isto, pois nao existem estrategias perfeitas e em algum momento pode se ter apenas ganhos parciais
* e ate loss em casos onde o marcado esta totalmente volatil ou se tem falhas operacionais.
*/
function media_mensal(valor_da_banca, valor_de_entrada) {
    let case_one = ganho_parcial_mensal(valor_de_entrada);
    let case_two = ganho_maximo_mensal(valor_de_entrada);
    let resultado = (case_one + case_two) / 2;
    return resultado;
}

function atualiza_valor_da_banca(valor_da_banca) {
    let valor_de_entrada = calcula_valor_de_entrada(valor_da_banca, 2);
    let valor_da_media_mensal = media_mensal(valor_da_banca, valor_de_entrada);
    valor_da_banca = valor_da_banca + valor_da_media_mensal;
    return {"valor_da_banca" : valor_da_banca,
            "valor_de_entrada" : valor_de_entrada,
            "media_mensal" : valor_da_media_mensal
        };
}

function relatorio(valor_da_banca, quantidade_de_meses) {
    let contador = 1;
    let detalhes = atualiza_valor_da_banca(valor_da_banca);
    while(quantidade_de_meses > 0) {
        console.log(`Mes: ${contador}`);
        console.log(`Valor de Entrada: ${detalhes["valor_de_entrada"].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
        console.log(`Salario Mensal: ${detalhes["media_mensal"].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
        console.log(`Valor da Banca: ${detalhes["valor_da_banca"].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
        detalhes = atualiza_valor_da_banca(detalhes["valor_da_banca"]);
        contador++;
        quantidade_de_meses--;
    }
}

let valor_da_banca = 100;
let quantidade_de_meses = 12;
relatorio(valor_da_banca, quantidade_de_meses);