const pokemonDetails = document.getElementById('pokemon');


function back() {
    window.history.back();
}

function loadPokemonItens(id) {
    pokeApi.getPokemon(id).then((pokemon) => {
        pokemonDetails.innerHTML += `
            <section id="content" class="content ${pokemon.type}">
                <h3 class="number">${convertPokemonIdtoOrderList(pokemon.number)}</h3>
                <h2 class="name">${pokemon.name}</h2>
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}" srcset="">
                
                <div class="details">
                    <div class="content ${pokemon.type}">
                        <p class="subTitle">About</p>
                        <p>Height: ${pokemon.height}</p>
                        <p>Weight: ${pokemon.weight}</p>
                        <p>Abilities: ${pokemon.abilities.map((ability) => `${ability}`).join(" / ")}</p>
                    </div>

                    <div class="content ${pokemon.type}">
                        <p class="subTitle">Stats</p>
                        <p>HP: ${pokemon.hp}</p>
                        <p>Attack: ${pokemon.attack}</p>
                        <p>Defense: ${pokemon.defense}</p>
                        <p>Special Attack: ${pokemon.specialAttack}</p>
                        <p>Special Defense: ${pokemon.specialDefense}</p>
                        <p>Speed: ${pokemon.speed}</p>
                    </div>
                </div>
                <div class="pagination">
                    <button id="backButton" onclick="back()" type="button">
                        Back
                    </button>
                </div>
            </section>
        `;
    })
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
loadPokemonItens(id);

