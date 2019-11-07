const buscarVendedor = document.querySelector('#buscar-vendedor');

buscarVendedor.addEventListener('input', function(){
    console.log(this.value);

    let empregados = document.querySelectorAll('.empregado');

    if (this.value.length > 0) {
        for (let i = 0; i < empregados.length; i++) {
            let empregado = empregados[i];

            let tdNome = document.querySelector('.dado-nome');
            let nome = tdNome.textContent;

            let comparaNome = nome.substr(0, this.value.length);
            let comparaNomeLower = comparaNome.toLocaleLowerCase();
            let valorDigitado = this.value.toLocaleLowerCase();

            if (!(valorDigitado == comparaNomeLower)) {
                empregado.classList.add('desaparece');
            }
            else{
                empregado.classList.remove('desaparece');
            }
        }
    }
    else{
        for (let i = 0; i < empregados.length; i++) {
            let empregado = empregados[i];
            empregado.classList.remove('desaparece');
        }
    }
})