const listarLivros = () =>{
    return fetch("http://localhost:3000/livros")
    .then(resposta => {
        return resposta.json();
    });
}


function criarLivro(capa, titulo, preco) {
    return fetch("http://localhost:3000/livros",{
        method: 'POST', 
        
        headers: {
            'Content-Type': 'application/json'

        }, 
        body: JSON.stringify({
            capa: capa,
            titulo: titulo,
            preco: preco
        })  
    })
    .then(resposta => {
        return resposta.body
    })
}


function deletarLivro(id){
    return fetch(`http://localhost:3000/livros/${id}`, {
        method: 'DELETE'
    });
}





export const livroService = {
    listarLivros,
    criarLivro,
    deletarLivro
}