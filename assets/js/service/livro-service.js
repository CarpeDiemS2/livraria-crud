const listarLivros = () =>{
    return fetch("https://royalsbooks.onrender.com/livros")
    .then(resposta => {
        return resposta.json();
    });
}


function criarLivro(capa, titulo, preco) {
    return fetch("https://royalsbooks.onrender.com/livros",{
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
    return fetch(`https://royalsbooks.onrender.com/livros/${id}`, {
        method: 'DELETE'
    });
}



function detalharLivro(id){
    return fetch(`https://royalsbooks.onrender.com/livros/${id}`)
    .then(resposta => {
        return resposta.json();
    })
}

function atualizarLivro(id, capa, titulo, preco){
    return fetch(`https://royalsbooks.onrender.com/livros/${id}` ,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            capa: capa,
            titulo: titulo,
            preco: preco
        })
    }).then(resposta => {
        return resposta.json();
    })
}


export const livroService = {
    listarLivros,
    criarLivro,
    deletarLivro,
    atualizarLivro,
    detalharLivro
}