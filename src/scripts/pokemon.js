import POKEDEX from "./db.ts";
import { Renders } from "./render";

export const Pokemon = {

    addPokemon: function(pokeName) {
        let playerInfo = JSON.parse(localStorage.getItem("playerGameInfo"));
        let pokemonInformation = this.getPokemonInfo(pokeName);
        let pokeNumber = 0;
        while (pokeNumber <= playerInfo.Player.pokemon.caught.length) {
            console.log("Start Looped "+pokeNumber)
            if (playerInfo.Player.pokemon.caught[pokeNumber].name === pokemonInformation.name) {
                pokeNumber = playerInfo.Player.pokemon.caught.length;
                console.log("Pokemon Found");
                console.log("if statement Looped "+pokeNumber);
            }
            pokeNumber++;
            if (pokeNumber === playerInfo.Player.pokemon.caught.length) {
                playerInfo.Player.pokemon.caught[pokeNumber++] = pokemonInformation;
                console.log("pokemon added "+pokeNumber);
                pokeNumber++;
                localStorage.setItem("playerGameInfo", JSON.stringify(playerInfo));
            }
            console.log("Ended Looped "+pokeNumber)
        }
        //localStorage.setItem("playerGameInfo", JSON.stringify(playerInfo));
    },
    addFirstPokemon: function(pokeName) {
        let playerInfo = JSON.parse(localStorage.getItem("playerGameInfo"));
        let pokemonInformation = this.getPokemonInfo(pokeName);
        playerInfo.Player.pokemon.caught[0] = pokemonInformation;
        localStorage.setItem("playerGameInfo", JSON.stringify(playerInfo));
        window.location.reload();
    },
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