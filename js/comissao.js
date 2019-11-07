
function porcentagemComissao(qtdVendas){
    let totalVendido;

    if (qtdVendas <= 1000) {
        totalVendido = 0.01;
    }

    else if (qtdVendas <=5000) {
        totalVendido = 0.02
    }

    else{
        totalVendido = 0.03;
    }

    return totalVendido;
}

function calculoComissao(valorVenda, porcentagemComissao){
    let comissao = valorVenda * porcentagemComissao;
    comissao = '€ ' + comissao.toFixed(2);
    return comissao;
}