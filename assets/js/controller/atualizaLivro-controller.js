import { livroService } from "../service/livro-service.js";


//DETALHA

//pega onde estamos na página
const pegaUrlAtual = new URL(window.location);
//console.log("pegaUrlAtual:" + pegaUrlAtual);

//pega o id da URL que tá no template string
const id = pegaUrlAtual.searchParams.get('id');
//console.log("ID: " + id);

const inputCapa = document.querySelector('[data-capa]');
const inputTitulo = document.querySelector('[data-titulo]');
const inputPreco = document.querySelector('[data-preco]');


livroService.detalharLivro(id).then(dados => {
    inputCapa.value = dados.capa;
    inputTitulo.value = dados.titulo;
    inputPreco.value = dados.preco;
})


//ALTERA
const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    livroService.atualizarLivro(id, inputCapa.value, inputTitulo.value, inputPreco.value)
    .then(() => {
        //window.location.href = '../telas/edicao_concluida.html'
        console.log("gg");
    })
})

