idProdutoArray = []
NomeProdutoArray = []
PrecoProdutoArray = []
AvaliacaoProdutoArray = []

idAux = 0
nomeAux = 0
precoAux = 0
avaliacaoAux = 0

index = 0
continuar = 1

while (continuar == 1) {
    CadastrarProduto()
    continuar = prompt("Aperte 1 para continuar \nAperte 2 para parar")
}
ExibirPelaAvaliacao()

function CadastrarProduto() {
    idProdutoArray[index] = parseInt(prompt("Qual o id do produto?"))
    NomeProdutoArray[index] = prompt("Qual o nome do produto?")
    PrecoProdutoArray[index] = parseInt(prompt("Qual o preço do produto?"))
    AvaliacaoProdutoArray[index] = parseInt(prompt("Qual a avaliação do produto?"))
    console.log(idProdutoArray[index] + " - " + NomeProdutoArray[index] + " - " + PrecoProdutoArray[index] + " - " + AvaliacaoProdutoArray[index])
    index++
}

function BuscarPeloId(idParametro) {
    idProduto = prompt("Qual o id do produto que você busca?")
    for (index = 0; index < idProdutoArray.length; index++) {
        if (idProduto == idProdutoArray[index]) {
            console.log(idProdutoArray[index] + " - " + NomeProdutoArray[index] + " - " + PrecoProdutoArray[index] + " - " + AvaliacaoProdutoArray[index])
            return
        } else {
            console.log("Produto não encontrado.")
        }
    }
}

function BuscarPeloNome() {
    nomeProduto = prompt("Qual o nome do produto que você busca?")
    for (index = 0; index < NomeProdutoArray.length; index++) {
        if (nomeProduto == NomeProdutoArray[index]) {
            console.log("id: " + idProdutoArray[index])
            return
        } else {
            console.log("Produto não encontrado.")
        }
    }
}

function ExibirPeloId() {
    console.log("Ordenando pelo id:")
    for (contador = 0; contador < idProdutoArray.length; contador++) {
        for (index = 0; index < idProdutoArray.length - 1; index++) {
            if (idProdutoArray[index] > idProdutoArray[index + 1]) {
                idAux = idProdutoArray[index]
                nomeAux = NomeProdutoArray[index]
                precoAux = PrecoProdutoArray[index]
                avaliacaoAux = AvaliacaoProdutoArray[index]

                idProdutoArray[index] = idProdutoArray[index + 1]
                NomeProdutoArray[index] = NomeProdutoArray[index + 1]
                PrecoProdutoArray[index] = PrecoProdutoArray[index + 1]
                AvaliacaoProdutoArray[index] = AvaliacaoProdutoArray[index + 1]

                idProdutoArray[index + 1] = idAux
                NomeProdutoArray[index + 1] = nomeAux
                PrecoProdutoArray[index + 1] = precoAux
                AvaliacaoProdutoArray[index + 1] = avaliacaoAux
            }
        }
        index = 0
    }
    for (index = 0; index < idProdutoArray.length; index++) {
        console.log(idProdutoArray[index] + " - " + NomeProdutoArray[index] + " - " + PrecoProdutoArray[index] + " - " + AvaliacaoProdutoArray[index])
    }
}

function ExibirPeloPreco() {
    console.log("Ordenando pelo preço:")
    for(contador = 0; contador < PrecoProdutoArray.length; contador++){
        for(index = 0; index < PrecoProdutoArray.length; index++){
            if(PrecoProdutoArray[index] < PrecoProdutoArray[index + 1]){
                idAux = idProdutoArray[index]
                nomeAux = NomeProdutoArray[index]
                precoAux = PrecoProdutoArray[index]
                avaliacaoAux = AvaliacaoProdutoArray[index]

                idProdutoArray[index] = idProdutoArray[index + 1]
                NomeProdutoArray[index] = NomeProdutoArray[index + 1]
                PrecoProdutoArray[index] = PrecoProdutoArray[index + 1]
                AvaliacaoProdutoArray[index] = AvaliacaoProdutoArray[index + 1]

                idProdutoArray[index + 1] = idAux
                NomeProdutoArray[index + 1] = nomeAux
                PrecoProdutoArray[index + 1] = precoAux
                AvaliacaoProdutoArray[index + 1] = avaliacaoAux
            }
        }
        index = 0
    }
    for (index = 0; index < PrecoProdutoArray.length; index++) {
        console.log(idProdutoArray[index] + " - " + NomeProdutoArray[index] + " - " + PrecoProdutoArray[index] + " - " + AvaliacaoProdutoArray[index])
    }
}

function ExibirPelaAvaliacao(){
    console.log("Ordenando pela avaliação:")
    for(contador = 0; contador < AvaliacaoProdutoArray.length; contador++){
        for(index = 0; index < AvaliacaoProdutoArray.length - 1; index++){
            if(AvaliacaoProdutoArray[index] < AvaliacaoProdutoArray[index + 1]){
                idAux = idProdutoArray[index]
                nomeAux = NomeProdutoArray[index]
                precoAux = PrecoProdutoArray[index]
                avaliacaoAux = AvaliacaoProdutoArray[index]
            
                idProdutoArray[index] = idProdutoArray[index + 1]
                NomeProdutoArray[index] = NomeProdutoArray[index + 1]
                PrecoProdutoArray[index] = PrecoProdutoArray[index + 1]
                AvaliacaoProdutoArray[index] = AvaliacaoProdutoArray[index + 1]
            
                idProdutoArray[index + 1] = idAux
                NomeProdutoArray[index + 1] = nomeAux
                PrecoProdutoArray[index + 1] = precoAux
                AvaliacaoProdutoArray[index + 1] = avaliacaoAux
            }
        }
        index = 0
    }
    for (index = 0; index < AvaliacaoProdutoArray.length; index++) {
        console.log(idProdutoArray[index] + " - " + NomeProdutoArray[index] + " - " + PrecoProdutoArray[index] + " - " + AvaliacaoProdutoArray[index])
    }
}
