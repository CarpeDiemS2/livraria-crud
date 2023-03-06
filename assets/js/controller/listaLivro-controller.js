import { livroService } from "../service/livro-service.js";


//ESQUELETO
const criaLivro = (id, capa, titulo, preco) => {
    const linhaNovoLivro = document.createElement('div');
    linhaNovoLivro.classList.add("livro__card");
    const conteudo = 
    `
    <div class="livro_controles">
        <span class="livro__controles--editar"></span>
        <span class="livro__controles--excluir"></span>
    </div>
    <img class="livro__card--capa" src="${capa}" alt="">
    <h3 class="livro__card--titulo">${titulo}</h3>
    <p class="livro__card--preco">${preco}</p>    
    `;

    linhaNovoLivro.innerHTML = conteudo;
    linhaNovoLivro.dataset.id = id;
    //console.log(linhaNovoLivro);
    return linhaNovoLivro;
}

const containerLivro = document.querySelector('.livro');

//LISTAGEM
livroService.listarLivros().then(data => {
    data.forEach(livroData => {
        containerLivro.appendChild(criaLivro(
            livroData.id,
            livroData.capa,
            livroData.titulo,
            livroData.preco))
    })
});
