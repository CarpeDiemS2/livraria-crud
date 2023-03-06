import { livroService } from "../service/livro-service.js";

//DELETE
const containerLivro = document.querySelector('.livro');
containerLivro.addEventListener('click', (evento) => {

    let btnDeletar = evento.target.className === "livro__controles--excluir";
    
    if(btnDeletar){
        const registroLivro = evento.target.closest('[data-id]');
        
        let id = registroLivro.dataset.id;

        livroService.deletarLivro(id)
        .then(function(){
            registroLivro.remove();
        });
    }
});