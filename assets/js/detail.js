const pokemonDetail = document.getElementById('pokemonDetail');
const urlParams = new URLSearchParams(window.location.search);
const pokemonID = urlParams.get("id");
const idDetails = pokemonID - 1

pokeAPI.getPokemons(idDetails, 1)
.then((pokemons = []) => {
    pokemonDetail.innerHTML += pokemons.map(convertDetailToLi)
})

function convertDetailToLi(pokeDetail){
    return `
        <section class="${pokeDetail.type}" id="mainInfo">
            <span class="name">${pokeDetail.name}</span>
            <span class="number">#${pokeDetail.id}</span>
            <div class="detail">
                <img src="${pokeDetail.image}" alt="${pokeDetail.name}">
                <ol class="types">
                    ${pokeDetail.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <ol class="types">
                    <li class="type">HP: ${pokeDetail.hp}</li>
                    <li class="type">Attack: ${pokeDetail.attack}</li>
                    <li class="type">Defense: ${pokeDetail.defense}</li>
                    <li class="type">Speed: ${pokeDetail.speed}</li>
                </ol>
            </div>    
            <div>
                <button onclick="window.location.href='index.html';">Voltar</button>
            </div>
        </section>    
    `
}
