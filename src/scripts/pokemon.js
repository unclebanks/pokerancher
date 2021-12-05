import POKEDEX from "./db.ts";

export const Pokemon = {

    getPokemonInfo: function (pokeName) {
        let pokemonInformation;
        let i = 0;
        while (i < POKEDEX.length) {
            if (POKEDEX[i].name === pokeName) {
                pokemonInformation = POKEDEX[i];
                i = POKEDEX.length;
            }
            i++;
        }
        return pokemonInformation;
    }
}