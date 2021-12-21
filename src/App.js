import React from 'react';
import './styles/app.css';
import { Banner } from './components/Banner';
import { PokemonHelpers } from './components/PokemonHelpers';
import { PlayerItems } from './components/PlayerItems';
import { MainWindow } from './components/MainWindow';
import { Pokemon } from './scripts/pokemon';

export const App = () => {

    let player = {
            playerName: "New Player",
            currency: {
                apples: 0,
                pokeCoins: 0
            },
            pokemon: {
                caught:[],
                seen:[]
            },
            flags: {
                finishedIntro: false
            },
            saveLoaded: 0,
            newPlayer: 0
    }
    let game = {
            mainWindowStatus: "intro",
            introStatus: "page1",
            playerItemsStatus: {
                empty: ""
            },
            bannerStatus: {
                bannerContainer: false
            },
            pokemonHelperStatus: {
                empty: ""
            },
            ranchStatus: "main"
    }
    const newPlayer = () => {
        let playerUserName = prompt("Please enter your UserName.");
        player.playerName = playerUserName;
        localStorage.setItem("playerGameInfo", JSON.stringify(player));
        window.location.reload();
    }
    const loadPlayer = () => {
        let savedPlayer = JSON.parse(localStorage.getItem("playerGameInfo"));
        player.playerName = savedPlayer.playerName;
        player.currency.apples = savedPlayer.currency.apples;
        player.currency.pokeCoins = savedPlayer.currency.pokeCoins;
        player.pokemon = savedPlayer.pokemon;
        player.flags = savedPlayer.flags;
        player.saveLoaded = 1;
        if(player.flags.finishedIntro === true) {
            game.mainWindowStatus = "ranch";
        }
        if (player.pokemon.caught.length >= 1 && player.flags.finishedIntro === false) {
            game.mainWindowStatus = "hasPoke";
        }
    }
    const addPokeCoins = () => {
        player.currency.pokeCoins++;
        document.getElementById("pokeCoins").innerHTML = player.currency.pokeCoins;
    }
    const addFirstPokemon = function(pokeName) {
        let pokemonInformation = Pokemon.getPokemonInfo(pokeName);
        player.pokemon.caught[0] = pokemonInformation;
        player.pokemon.seen[0] = pokemonInformation;
        localStorage.setItem("playerGameInfo", JSON.stringify(player));
        window.location.reload();
    }
    const chooseFirstPoke = () => {
        loadPlayer();
    }
    const addPokemon = function(pokeName) {
        let pokemonInformation = Pokemon.getPokemonInfo(pokeName);
        let pokeNumber = 0;
        while (pokeNumber <= player.pokemon.caught.length) {
            if (player.pokemon.caught[pokeNumber].name === pokemonInformation.name) {
                pokeNumber = player.pokemon.caught.length;
            }
            pokeNumber++;
            if (pokeNumber === player.pokemon.caught.length) {
                player.pokemon.caught[pokeNumber++] = pokemonInformation;
                pokeNumber++;
                localStorage.setItem("playerGameInfo", JSON.stringify(player));
            }
        }
    }
    const returningPlayer = () => {
        loadPlayer();
    }
    if(!localStorage.getItem("playerGameInfo")) {
        newPlayer();
    } else if (JSON.parse(localStorage.getItem("playerGameInfo")).pokemon.caught.length < 1) { 
        chooseFirstPoke(); 
    } else { returningPlayer(); }
    return(
        <div id="appContainer">
            <MainWindow addFirst={addFirstPokemon} gameStatus={game} playerStatus={player} />
            <Banner playerStatus={player} addPokeCoins={addPokeCoins}/>
            <PokemonHelpers playersPokemon={player.pokemon} pkHelperDisplay={player.flags.finishedIntro}/>
            <PlayerItems player={player}/>
        </div>
    )
}