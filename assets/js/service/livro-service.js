const listarLivros = () =>{
    return fetch("http://localhost:3000/livros")
    .then(resposta => {
        return resposta.json();
    });
}

export const livroService = {
    listarLivros
}