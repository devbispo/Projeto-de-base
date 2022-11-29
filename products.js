const entrada = require('prompt-sync')({sigint: true})

const produtos = [
    {
        nome: "Leonardo da vincu",
        categoria: "romance",
        valor: 30
    },
    {
        nome: "Como fazer amigos e influenciar pessoas",
        categoria: "Auto-Ajuda",
        valor: 25
    },
]


function listar() {
    produtos.forEach(teste => {
        console.log(teste)
    })

}


function listarPorCategorias(categorias) {
    produtos.forEach(teste => {
        if(categoria.toLowerCase() == p.categoria.toLowerCase()){
            console.log(teste)
        }
    })
    return categoria;
}
let categoria = entrada("Insira um nome ");

listarPorCategorias(categorias);