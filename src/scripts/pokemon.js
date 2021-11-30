import POKEDEX from "./db.ts";

export const Pokemon = {

    addPokemon: function(pokeName) {
        let playerInfo = JSON.parse(localStorage.getItem("playerGameInfo"));
        let pokemonInformation;
        let i = 0;
        while (i < POKEDEX.length) {
            if (POKEDEX[i].name === pokeName) {
                pokemonInformation = POKEDEX[i];
                i = POKEDEX.length;
            }
            i++;
        }
        if (!playerInfo.Player.pokemon.caught[`${pokemonInformation.id}`]) {
                playerInfo.Player.pokemon.caught[`${pokemonInformation.id}`] = pokemonInformation;
        } else {
            alert("Error somewhere. Sorry about that.");
        }
        localStorage.setItem("playerGameInfo", JSON.stringify(playerInfo));
        alert(JSON.stringify(playerInfo));
    }
}