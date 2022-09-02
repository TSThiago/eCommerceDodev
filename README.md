# eCommerce DoDev

1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;

2. Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
informações do produto correspondente;

3. Buscar um produto pelo nome e retornar o id dele;
Ex.: Entrada = Mouse Médio
Retorno = 2
4. Exibir todos os produtos ordenados pelo id;

5. Exibir os produtos ordenador pelo preço;

6. Exibir os produtos pela ordem de avaliação;

7. Atualizar o preço de um produto, para isso deve receber o id do produto como
parâmetro e o novo valor para atualizar;
Ex.: Id = 3, Valor = 200

8. Deletar um produto, não esqueça de organizar as informações para que não fique
espaços vazios;

Por fim, utilizando as funções criadas organize a execução do seu código, faça com que o
usuário possa escolher qual função executar e quando encerrar o programa.

Agora devemos criar funções para um “carrinho de compras” para utilizar junto com as
funções anteriores, esse carrinho de compras deve guardar duas informações: o id do
produto e a quantidade deste produto ;

1. Crie uma função para adicionar produtos no carrinho, você deve passar o nome do
produto e a quantidade que deseja adicionar como parâmetro. Essa função deve
verificar primeiro se já existe esse produto no carrinho, se existir apenas adicione a
quantidade, se não adicione o produto e a quantidade;

2. Crie uma função para excluir um produto do carrinho, essa função deve receber o
nome do produto e a quantidade que deseja excluir como parâmetro. Se a
quantidade a se excluir for o total desse produto no carrinho o produto como um
todo deve ser removido;

3. Crie uma função que retorne o valor total de todos os produtos no carrinho;

4. Crie uma função que exiba todos os produtos do carrinho e o valor total de todos os
produtos;