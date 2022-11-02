const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 12;
let offset = 0;
const maxRecords = 151;

function pagePokemonDetails(id){
    window.location.href = "pokemonDetails.html?id="+id;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}" onClick="pagePokemonDetails(${pokemon.number})">
                <span class="number">${convertPokemonIdtoOrderList(pokemon.number)}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}" srcset="">
                </div>
            </li>
        `).join("");
    })
}

loadPokemonItens(offset,limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNextPage = offset + limit;
    if(qtdRecordsWithNextPage >= maxRecords){
        const newList = maxRecords - offset;
        loadPokemonItens(offset, newList);
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
})

