idProdutoArray = []
NomeProdutoArray = []
PrecoProdutoArray = []
AvaliacaoProdutoArray = []
index = 0

CadastrarProduto()

function CadastrarProduto(){
    idProdutoArray[index] = prompt("Qual o id do produto?")
    NomeProdutoArray[index] = prompt("Qual o nome do produto?")
    PrecoProdutoArray[index] = prompt("Qual o preço do produto?")
    AvaliacaoProdutoArray[index] = prompt("Qual a avaliação do produto?")
    console.log(idProdutoArray[index]+ " - " +NomeProdutoArray[index]+ " - " +PrecoProdutoArray[index]+ " - " +AvaliacaoProdutoArray[index])
    index++
}