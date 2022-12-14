idProdutoArray = []
NomeProdutoArray = []
PrecoProdutoArray = []
AvaliacaoProdutoArray = []

idSup = []
nomeSup = []
precoSup = []
avaliacaosup = []

idAux = 0
nomeAux = 0
precoAux = 0
avaliacaoAux = 0

index = 0
continuar = 1

RodarPrograma()
console.log("Programa encerrado.")

function CadastrarProduto() {
    idProdutoArray[index] = parseInt(prompt("Qual o id do produto?"))
    NomeProdutoArray[index] = prompt("Qual o nome do produto?")
    PrecoProdutoArray[index] = parseInt(prompt("Qual o preço do produto?"))
    AvaliacaoProdutoArray[index] = parseInt(prompt("Qual a avaliação do produto?"))
    MostrarProdutos()
    index++
}

function BuscarPeloId() {
    idProduto = prompt("Qual o id do produto que você busca?")
    for (index = 0; index < idProdutoArray.length; index++) {
        if (idProduto == idProdutoArray[index]) {
            MostrarProdutos()
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
                Ordenar()
            }
        }
        index = 0
    }
    for (index = 0; index < idProdutoArray.length; index++) {
        MostrarProdutos()
    }
}

function ExibirPeloPreco() {
    console.log("Ordenando pelo preço:")
    for (contador = 0; contador < PrecoProdutoArray.length; contador++) {
        for (index = 0; index < PrecoProdutoArray.length - 1; index++) {
            if (PrecoProdutoArray[index] < PrecoProdutoArray[index + 1]) {
                Ordenar()
            }
        }
        index = 0
    }
    for (index = 0; index < PrecoProdutoArray.length; index++) {
        MostrarProdutos()
    }
}

function ExibirPelaAvaliacao() {
    console.log("Ordenando pela avaliação:")
    for (contador = 0; contador < AvaliacaoProdutoArray.length; contador++) {
        for (index = 0; index < AvaliacaoProdutoArray.length - 1; index++) {
            if (AvaliacaoProdutoArray[index] < AvaliacaoProdutoArray[index + 1]) {
                Ordenar()
            }
        }
        index = 0
    }
    for (index = 0; index < AvaliacaoProdutoArray.length; index++) {
        MostrarProdutos()
    }
}

function AtualizarPreco() {
    idProduto = prompt("Qual o id do produto?")
    for (index = 0; index < idProdutoArray.length; index++) {
        if (idProduto == idProdutoArray[index]) {
            console.log("Produto " + NomeProdutoArray[index] + ":")
            PrecoProdutoArray[index] = parseFloat(prompt("Insira o novo preço do produto"))
            MostrarProdutos()
        }
    }
}

function DeletarProduto() {
    erro = true
    idProduto = prompt("Insira o id do produto para deleta-lo")
    for (index = 0; index < idProdutoArray.length; index++) {
        if (idProdutoArray[index] == idProduto) {
            console.log("Produto " + idProdutoArray[index] + " - " + NomeProdutoArray[index]+ " deletado com sucesso.")
            idProdutoArray[index] = 0
            NomeProdutoArray[index] = 0
            PrecoProdutoArray[index] = 0
            AvaliacaoProdutoArray[index] = 0
            erro = false
            if (erro == false) {
                for (contador = 0; contador < idProdutoArray.length; contador++) {
                    for (index = 0; index < idProdutoArray.length - 1; index++) {
                        if (idProdutoArray[index] == 0) {
                            Ordenar()
                        }
                    }
                    index = 0
                }
                for (index = 0; index < idProdutoArray.length; index++) {
                    if (idProdutoArray[index] != 0) {
                        idSup[index] = idProdutoArray[index]
                        nomeSup[index] = NomeProdutoArray[index]
                        precoSup[index] = PrecoProdutoArray[index]
                        avaliacaosup[index] = AvaliacaoProdutoArray[index]
                    }
                }
                idProdutoArray = idSup
                NomeProdutoArray = nomeSup
                PrecoProdutoArray = precoSup
                AvaliacaoProdutoArray = avaliacaosup

                idSup = []
                nomeSup = []
                precoSup = []
                avaliacaosup = []
            }
        }else if(erro){
            console.log("Produto não identificado.")
        }
    }

}

function Ordenar() {
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

function MostrarProdutos() {
    console.log(idProdutoArray[index] + " - " + NomeProdutoArray[index] + " - R$" + PrecoProdutoArray[index] + " - " + AvaliacaoProdutoArray[index])
}

function RodarPrograma(){
    while(continuar != 9){
        opcao = prompt("O que deseja fazer? \n1 - Cadastrar Produto \n2 - Buscar Produto pelo Id \n3 - Buscar Produto pelo Nome \n4 - Listar Produtos pela Avaliação \n5 - Listar Produtos pelo Preço \n6 - Listar Produtos pela Avaliação\n7 - Atualizar preço \n8 - Deletar Produto\n9 - Encerrar Programa")
        if(opcao == 1){
            CadastrarProduto()
        }
        if(opcao == 2){
            BuscarPeloId()
        }
        if(opcao == 3){
            BuscarPeloNome()
        }
        if(opcao == 4){
            ExibirPeloId()
        }
        if(opcao == 5){
            ExibirPeloPreco()
        }
        if(opcao == 6){
            ExibirPelaAvaliacao()
        }
        if(opcao == 7){
            AtualizarPreco()
        }
        if(opcao == 8){
            DeletarProduto()
        }
        if(opcao == 9){
            continuar = 9
        }
    }
}