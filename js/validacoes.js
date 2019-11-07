function validaEmpregado(empregado){
    let listaErros = [];

    if (empregado.nome.length == 0) {
        listaErros.push('Adicione o nome do funcionário!');
    }

    if (empregado.salario < 0 || empregado.salario.length == 0) {
        listaErros.push('Valor de salário inválido!');
    }

    if (empregado.qtdVendas < 0 || empregado.qtdVendas.length == 0) {
        listaErros.push('Quantidade total de vendas inválida!')
    }

    return listaErros;
}

function mensagemErro(erros){
    let ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.classList.add('lista-erros');
        li.textContent = erro;
        ul.appendChild(li);
    });
}