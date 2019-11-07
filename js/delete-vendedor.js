const buttonExcluir = document.querySelector('#botao-excluir');

buttonExcluir.addEventListener('click', function(event){
    event.preventDefault();

    validaCheckbox();
});

function validaCheckbox(){

    let validaCheckbox = document.querySelectorAll('.check-box')

    for (let i = 0; i < validaCheckbox.length; i++) {

        let deleteEmpregado = validaCheckbox[i];

        if (deleteEmpregado.checked) {
            deleteEmpregado.parentNode.remove();
        }
    }
}