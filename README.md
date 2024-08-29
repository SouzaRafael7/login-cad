# login-cad
* [Introdução](#introdução)
* [Funções](#funções)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Autores](#autores)

## Introdução
O código JavaScript fornecido implementa um sistema básico de cadastro e gerenciamento de usuários em uma página web. Ele permite:

Validar o login: Verifica se os campos de e-mail e senha foram preenchidos antes de permitir o acesso a outra página, cadastrar usuários,  permite adicionar novos nomes e email de usuários a uma lista, gerenciar a lista de usuários, exibe a lista de usuários em uma tabela, permitindo excluir e editar os nomes e emails.

![Site](/img/nome-e-email-validador.gif)

Como Funciona:
## Funções
**FUNÇÃO DE CRIAÇÃO DE UM ARRAY PARA ARMAZENAMENTO DE DADOS:**

Este bloco de código adiciona um novo nome de usuário e email à lista, exibe a lista atualizada no console do navegador e, em seguida, chama uma função para atualizar a interface do usuário (provavelmente uma tabela HTML) com a nova lista de nomes.

console.log(): É uma função do JavaScript que envia informações para o console do navegador (ferramenta de desenvolvedor).

dadosLista: É um array (lista) que armazena os nomes dos usuários. Este array é definido em uma parte anterior do código que não foi mostrada.

emailLista: É um array (lista) que armazena os emails digitados dos usuários

push(): É um método do array que adiciona um novo elemento ao final do array.

nomeUser: É uma variável que contém o nome do usuário que foi inserido pelo usuário em algum campo de entrada (provavelmente um input de texto).

emailUser: É uma variável que contém o email do usuário que foi inserido pelo usuário em algum campo de entrada (provavelmente um input de email).

O que acontece: Esta linha adiciona o nomeUser à lista dadosLista, expandindo a lista com o novo valor.

**FUNÇÃO DE CRIAÇÃO DE LISTA NOME:**

Objetivo: Cria a tabela HTML com os nomes de usuários e seus respectivos botões de exclusão e edição.

let tabela =:
Declaração de variável: Cria uma variável chamada tabela.

Tipo: A variável tabela vai armazenar uma string, que no caso é o conteúdo HTML da tabela.

document.getElementById('tabela'):

Busca um elemento: Essa parte procura um elemento HTML na página com o ID "tabela".
getElementById: É um método do objeto document que retorna o primeiro elemento com o ID especificado.

innerHTML: É uma propriedade que representa o conteúdo HTML de um elemento. Ao atribuir um novo valor a essa propriedade, o conteúdo interno do elemento é substituído.

for(let i = 0; i <= (dadosLista.length -1); i++):
for: Inicia um loop que irá se repetir enquanto a condição dentro dos parênteses for verdadeira.

let i = 0: Declara uma variável i e inicializa ela com o valor 0. Essa variável será usada como um índice para acessar os elementos do array dadosLista.

i <= (dadosLista.length -1): Essa é a condição do loop. Ela verifica se o valor de i é menor ou igual ao último índice do array dadosLista. A subtração de 1 é necessária porque os índices de array começam em 0.

A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.

i++: Após cada iteração do loop, o valor de i é incrementado em 1, preparando para a próxima iteração.

tabela += ...: A cada iteração do loop, uma nova linha de HTML é adicionada à variável tabela. O operador += concatena a nova linha à string já existente em tabela.

onclick='excluir(this.parentNode.parentNode.rowIndex)': Atribui um evento onclick ao botão. Quando o botão é clicado, a função excluir é chamada, passando como argumento o índice da linha na tabela.

this.parentNode.parentNode.rowIndex: Essa expressão complexa é usada para obter o índice da linha atual. Ela funciona navegando pela estrutura do DOM para encontrar o elemento <tr> pai da célula que contém o botão.

**FUNÇÃO DE CRIAÇÃO DE LISTA EMAIL**
O código implementa um sistema simples para cadastro de usuários, onde os dados são armazenados em arrays e exibidos em uma tabela HTML e ainda exibe se tem algum erro no email antes de ser enviado. As funções permitem adicionar novos usuários, excluir existentes e (em teoria) editá-los. 

Funcionamento:
Obtém os valores dos inputs: Busca os valores dos campos de entrada com os IDs nomeUser e emailUser e os armazena nas variáveis nomeUser e emailUser, respectivamente.

Validação do e-mail: Verifica se o e-mail inserido é válido. Para isso, checa se o campo está vazio ou se não contém o caractere @ ou o ponto . (que são essenciais para um formato de e-mail válido).

Armazena os dados:
Se o e-mail for válido e ambos os campos estiverem preenchidos, os valores são adicionados aos arrays dadosLista e emailLista usando o método push().

Chama a função criarLista() para atualizar a tabela na página com os novos dados.

Limpa os campos de entrada para que o usuário possa inserir novos dados.

Exibe mensagem de erro: Se algum dos campos estiver vazio, exibe uma mensagem alertando o usuário.

**FUNÇÃO PARA EXCLUIR NOME DA LISTA:**

Remove o nome  email da lista e da tabela.

deleteRow() é um método aplicado ao elemento tabela encontrado no passo anterior.

Splice é uma das maneiras mais úteis de manipular arrays em JavaScript. Ele permite remover ou adicionar elementos em uma posição específica de um array

**FUNÇÃO PARA EDITAR O NOME NA LISTA:**

Objetivo: Edita um nome e email adicionado a lista.
Nesta parte do codigo utliza-se quase os mesmos do codigo da função de excluir, o delete row e o splice, porém você pode editar um elemento de cada vez. 

## Tecnologias Utilizadas
* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://blog.netscandigital.com/wp-content/uploads/2023/07/O-que-e-o-Google-Bard.png" alt="Bard"/></code>](https://bard.google.com/chat?hl=pt)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></code>](https://github.com/)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Autores
* ``Aluno 2ºC:``Rafael Souza Mastellini