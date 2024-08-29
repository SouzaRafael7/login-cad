//FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES

// Validação de preenchimento
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert('Favor preencher todos os campos');
    } else {
        alert('Campos preenchidos com sucesso');

        window.location.href = 'cadastro.html';
    }
}


//Função de criação do array para armazenamento de dados
var emailLista = [];
var dadosLista = [];

function salvarUser() {

    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    // Chama função de verificação de e-mail
    if(document.getElementById('emailUser').value == "" || document.getElementById('emailUser').value.indexOf('@') == -1 || document.getElementById('emailUser').value.indexOf('.') == -1){
        alert("Por favor, informe um e-mail válido")
        return false;
    }
    
    if(nomeUser && emailUser){
        dadosLista.push(nomeUser);
        emailLista.push(emailUser);
        //console.log(dadosLista);
        criarLista();
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
    }
    else {
        alert("Favor informar nome e e-mail");
    }
}


// FUNÇÃO DE CRIAÇÃO DE LISTA0
function criarLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for (let i = 0; i <= (dadosLista.length - 1); i++) { // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i] + "</td><td>  <button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
// FUNÇÃO PARA EXCLUIR NOME DA LISTA
// array splice tem a função de adicionar um novo elemento enquanto remove outros elementos antigos
function excluir(i) {
    dadosLista.splice((i - i), 1); //Splice é uma das maneiras mais úteis de manipular arrays em JavaScript. Ele permite remover ou adicionar elementos em uma posição específica de um array
    emailLista.splice((i - i), 1);
    document.getElementById('tabela').deleteRow(i);
}
//FUNÇÃO PARA EDITAR O NOME DA LISTA
// TEM A FUNÇÃO DE COLOCAR UM BOTÃO NA LISTA PARA QUE VOCÊ POSSA EDITAR UM NOME JA ADICIONADO.
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    document.getElementById("emailUser").value = emailLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
    emailLista.splice(emailLista[(i - 1)], 1);
}
// TEM A FUNÇÃO DE VALIDAR O EMAIL ANTES DE ENVIA-LO PARA O PROJETO.