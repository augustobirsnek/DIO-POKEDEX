const pokeApi = {}

function convertPokeApiDetailToPokemon(pokemonDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokemonDetail.id;
    pokemon.name = pokemonDetail.name;
    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types 

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;


    pokemon.height = pokemonDetail.height;
    pokemon.weight = pokemonDetail.weight;
    pokemon.abilities = pokemonDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);

    pokemon.hp = pokemonDetail.stats[0].base_stat;
    pokemon.attack = pokemonDetail.stats[1].base_stat;
    pokemon.defense = pokemonDetail.stats[2].base_stat;
    pokemon.specialAttack = pokemonDetail.stats[3].base_stat;
    pokemon.specialDefense = pokemonDetail.stats[4].base_stat;
    pokemon.speed = pokemonDetail.stats[5].base_stat;
    
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody)
    .then((pokemon) => convertPokeApiDetailToPokemon(pokemon))
    .then((detilRequests) => detilRequests)
    .then((pokemonDetails) => pokemonDetails)  
}