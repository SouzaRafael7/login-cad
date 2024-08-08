// Validação de preenchimento
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        alert('Campos preenchidos com sucesso');
        
        window.location.href = 'cadastro.html';
    }
}

//Função de criação do array para armazenamento de dados

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById('nomeUser').value = "";
    } 
    else{
        alert("Favor informar o nome");
    }
}
// FUNÇÃO DE CRIAÇÃO DE LISTA
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
}