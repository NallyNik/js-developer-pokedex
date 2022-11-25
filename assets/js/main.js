const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecord = 300
const limit = 20
let offset = 0

function convertPokemonToLi(pokemon){
    return `
    <a href="details.html?id=${pokemon.id}" id="goToDetail">
            <li id="goToDetail" class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                </div>
            </li>
    </a>
    `
}

function loadPokemonItems(offset,limit){
    pokeAPI.getPokemons(offset, limit)
        .then((pokemons = []) => {
            pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') 
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qntRecordNextPage = offset + limit
    if (qntRecordNextPage >= maxRecord){
        const newLimit = maxRecord - offset
        loadPokemonItems(offset,newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else{
    loadPokemonItems (offset,limit)
    }
})