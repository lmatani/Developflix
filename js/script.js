import peliculas from './peliculas.js'
const arrDivGenero = document.querySelectorAll('div.genero');

// incluyo las listas
for (let divGenero of arrDivGenero){
    divGenero.appendChild(document.createElement('ul'));
    for (let pelicula of peliculas){    
        if (checkPeliEnGenero(divGenero, pelicula))
        {
            incluirPeliEnLista(divGenero.id, pelicula);
        }
       
    }
}

function checkPeliEnGenero(divGenero, pelicula){
    let arrGenPeli = pelicula.genre_ids.map((elem) => 'genero-' + elem);
    let checkGen = arrGenPeli.some((elem) => elem === divGenero.id);
    return checkGen;
}

function incluirPeliEnLista(idDiv, pelicula){
    const ulElem = document.querySelector('#' + idDiv + ' ul');
    let liElem = document.createElement('li');
    liElem.innerHTML = `
            <a href="#"><img src="https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}" alt="${pelicula.title}"></a>
            <p>${pelicula.title}</p>`;
    ulElem.appendChild(liElem);
}

