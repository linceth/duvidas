const form = document.getElementById('areas');
const numeroA = document.getElementById("A");
const numeroB = document.getElementById("B");
//const campoA = parsefloat(numeroA);
//const campoB = parsefloat(numeroB);
let formEValido = false;

function validaCampo(valorDoInputA, valorDoInputB){
    return valorDoInputB > valorDoInputA;
}
form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorDoInputA = parsefloat(numeroA.value);
    const valorDoInputB = parsefloat(numeroB.value);
    const mensagemSucesso = `Resultado correto o valor de B: ${valorDoInputB.value} é maior que o valor de A: ${valorDoInputA.value}. `;
    const mensagemErro = `Resultado inválido o valor de B: ${valorDoInputB.value} é menor que o valor de A: ${valorDoInputA.value}.`;

    formEValido = validaCampo(valorDoInputA, valorDoInputB);
    if (formEValido == true){
        const containerMensagemSucesso = document.querySelector('.message-sucess');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        valorDoInputA.value = '';
        valorDoInputB.value = '';
    }else{
        if (!formEValido){
            const containerMensagemErro = document.querySelector('.message-error');
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
        };
    };
});
