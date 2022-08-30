idProdutoArray = []
NomeProdutoArray = []
PrecoProdutoArray = []
AvaliacaoProdutoArray = []
index = 0

CadastrarProduto()
BuscarPeloId()

function CadastrarProduto(){
    idProdutoArray[index] = prompt("Qual o id do produto?")
    NomeProdutoArray[index] = prompt("Qual o nome do produto?")
    PrecoProdutoArray[index] = prompt("Qual o preço do produto?")
    AvaliacaoProdutoArray[index] = prompt("Qual a avaliação do produto?")
    console.log(idProdutoArray[index]+ " - " +NomeProdutoArray[index]+ " - " +PrecoProdutoArray[index]+ " - " +AvaliacaoProdutoArray[index])
    index++
}

function BuscarPeloId(idParametro){
    idProduto = prompt("Qual o id do produto que você busca?")
    for(index = 0; index < idProdutoArray.length; index++){
        if(idProduto == idProdutoArray[index]){
            console.log(idProdutoArray[index]+ " - " +NomeProdutoArray[index]+ " - " +PrecoProdutoArray[index]+ " - " +AvaliacaoProdutoArray[index])
            return
        }else{
            console.log("Produto não encontrado.")
        }
    }
}

