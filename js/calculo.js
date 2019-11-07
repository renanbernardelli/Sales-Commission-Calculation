let tituloPrincipal = document.querySelector('.titulo-principal');
tituloPrincipal.textContent = 'Comissão dos Vendedores';

let button = document.querySelector('#botao-adicionar');

button.addEventListener('click', function(event){
    event.preventDefault();

    let form = document.querySelector('.form');

    let empregado = infoEmpregado(form);

    let erros = validaEmpregado(empregado);

    if (erros.length > 0) {
        mensagemErro(erros);
        return;
    }

    let tr = criarTr(empregado);

    let dadosTabela =document.querySelector('.dados-tabela-js');

    dadosTabela.appendChild(tr);
    


    form.reset();

    let apagaErro = document.querySelector('#mensagem-erro')
    apagaErro.innerHTML = '';
});

function infoEmpregado(form){
    let empregado = {
        nome: form.nome.value,
        salario: form.salario.value,
        qtdVendas: form.qtdVendas.value,
        totalComissao: calculoComissao(form.qtdVendas.value, porcentagemComissao(form.qtdVendas.value))
    }
    return empregado;
}

function criarTr(empregado){
    let tr = document.createElement('tr');
    tr.classList.add('empregado');
    
    tr.appendChild(criarTd(empregado.nome, 'dado-nome'));
    tr.appendChild(criarTd(empregado.salario, 'dado-salario'));
    tr.appendChild(criarTd(empregado.qtdVendas, 'dado-vendas'));
    tr.appendChild(criarTd(empregado.totalComissao, 'total-comissao'));
    tr.appendChild(criarCheckbox('check-box'));

    return tr;
}

function criarTd(dado, classe){
    let td = document.createElement('td');
    td.classList.add(classe);

    if (!isNaN(parseFloat(dado))) {
        dado = parseFloat(dado).toFixed(2);
        td.textContent = dado;
    }
    
    else{
        td.textContent = dado;
    }

    return td;
}

function criarCheckbox(classe){
    let criarCheckbox = document.createElement('input');
    criarCheckbox.setAttribute('type', 'checkbox');
    criarCheckbox.classList.add(classe);
    return criarCheckbox;
}