import { livroService } from "../service/livro-service.js";


const precoCampoClicado = document.querySelector('[data-preco]')
precoCampoClicado.addEventListener("click", function handleClick(){
    
    precoCampoClicado.value = "R$ ";

    precoCampoClicado.removeEventListener("click", handleClick);
})


const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const capa = evento.target.querySelector('[data-capa]').value;
    const titulo = evento.target.querySelector('[data-titulo]').value;
    const preco = evento.target.querySelector('[data-preco]').value;

    livroService.criarLivro(capa, titulo, preco).then(() => {
        //window.location.reload();
    })
});



