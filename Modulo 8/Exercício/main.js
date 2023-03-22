const form = document.getElementById('form-contatos');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContatosCadastradosFinal();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('phone');

    contatos.push(inputNomeContato.value);
    numeros.push(parseInt(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContatosCadastradosFinal(){
    
    const quantContatosFinal = calculaQuantidadeContatos();

    document.getElementById('quant-contatos-valor').innerHTML = quantContatosFinal;
    document.getElementById('cadastros').innerHTML;
    
}

function calculaQuantidadeContatos(){
    let quantContatos = 1

    for(let quantContatos = 1; quantContatos < contatos.length; quantContatos++);

    console.log(quantContatos);
}
