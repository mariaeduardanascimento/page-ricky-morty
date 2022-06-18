const imagemP1 = document.getElementById('personagem1');
const imagemP2 = document.getElementById('personagem2');
const imagemP3 = document.getElementById('personagem3');
const imagemP4 = document.getElementById('personagem4');
const carregamento = document.querySelector('button');
const mostrarPrimeiroNome = document.getElementById('primeiroPersonagem');
const mostrarSegundoNome = document.getElementById('segundoPersonagem');
const mostrarTerceiroNome = document.getElementById('terceiroPersonagem');
const mostrarQuartoNome = document.getElementById('quartoPersonagem');

let totalPersonagem = 671;

gerarPersonagem = () => {

    return Math.floor(Math.random()  * totalPersonagem);
    
}

mostrarPersonagem = () => {

    const id = gerarPersonagem();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, 
    { method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }  
    }).then ((response)  => response.json()).then((data) => 
    {
        imagemP1.src = data.image;
        imagemP1.alt = data.name;

        primeiroPersonagem = data.name;

        mostrarPrimeiroNome.innerHTML = primeiroPersonagem;

    });

}

mostrarPersonagem2 = () => {

    const id = gerarPersonagem();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, 
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }  
    }).then ((response)  => response.json()).then((data) => 
    {
        
        imagemP2.src = data.image;
        imagemP2.alt = data.name;
       
        segundoPersonagem = data.name;

        mostrarSegundoNome.innerHTML = segundoPersonagem;

    });

}

mostrarPersonagem3 = () => {

    const id = gerarPersonagem();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, 
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }  
    }).then ((response)  => response.json()).then((data) => 
    {
        
        imagemP3.src = data.image;
        imagemP3.alt = data.name;
       
        terceiroPersonagem = data.name;

        mostrarTerceiroNome.innerHTML = terceiroPersonagem;

    });

}

mostrarPersonagem4 = () => {

    const id = gerarPersonagem();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, 
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }  
    }).then ((response)  => response.json()).then((data) => 
    {
        
        imagemP4.src = data.image;
        imagemP4.alt = data.name;
    
        quartoPersonagem = data.name;

        mostrarQuartoNome.innerHTML = quartoPersonagem;

    });

}

personagem = () => {

    this.mostrarPersonagem()
    this.mostrarPersonagem2()
    this.mostrarPersonagem3()
    this.mostrarPersonagem4()
    
}

carregamento.onclick = personagem();