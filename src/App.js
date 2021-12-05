import React, { useState, useEffect } from 'react';
import './styles/app.css';
import { Banner } from './components/Banner';
import { PokemonHelpers } from './components/PokemonHelpers';
import { Intro } from './components/Intro';
import { PlayerItems } from './components/PlayerItems';
import { MainWindow } from './components/MainWindow';
import { Renders } from './scripts/render';
import { IntroStart } from './scripts/renderIntro';
import { Pokemon } from './scripts/pokemon';

export const App = () => {
    useEffect(() => {
        if(!localStorage.getItem("playerGameInfo")) {
            newPlayer();
        } else if (JSON.parse(localStorage.getItem("playerGameInfo")).Player.pokemon.caught.length < 1) { 
            chooseFirstPoke(); 
        } else if (JSON.parse(localStorage.getItem("playerGameInfo")).Player.pokemon.caught.length >= 1 && JSON.parse(localStorage.getItem("playerGameInfo")).Player.flags.finishedIntro === false) { 
            IntroStart.renderIntro(); 
        } else { returningPlayer(); }
    })

    const [player, setPlayer] = useState({
        Player: {
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
    })
    const [game, setGame] = useState({
        Game: {
            mainWindowStatus: {
                introContainer: true,
                ranchContainer: false
            },
            introStatus: "page1",
            playerItemsStatus: {
                empty: ""
            },
            bannerStatus: {
                bannerContainer: false
            },
            pokemonHelperStatus: {
                empty: ""
            }
        }
    })
    const newPlayer = () => {
        let playerUserName = prompt("Please enter your UserName.");
        player.Player["playerName"] = playerUserName;
        localStorage.setItem("playerGameInfo", JSON.stringify(player));
        console.log(player);
    }
    const loadPlayer = () => {
        let savedPlayer = JSON.parse(localStorage.getItem("playerGameInfo"));
        player.Player.playerName = savedPlayer.Player.playerName;
        player.Player.currency.apples = savedPlayer.Player.apples;
        player.Player.currency.pokeCoins = savedPlayer.Player.pokeCoins;
        player.Player.pokemon = savedPlayer.Player.pokemon;
        player.Player.flags = savedPlayer.Player.flags;
        console.log(player);
        player.Player.saveLoaded = 1;
    }
    const getPlayerName = () => {
        if (player.Player.saveLoaded === 0 && player.Player.newPlayer === 1) {
            let playerName = JSON.parse(localStorage.getItem("playerGameInfo")).Player.playerName;
            return playerName
        } else { return player.Player.playerName; }
    }
    const addFirstPokemon = function(pokeName) {
        let pokemonInformation = Pokemon.getPokemonInfo(pokeName);
        player.Player.pokemon.caught[0] = pokemonInformation;
        console.log("This is player after adding the first POKEMON "+pokeName+"============"+player)
        localStorage.setItem("playerGameInfo", JSON.stringify(player));
        window.location.reload();
    }
    const chooseFirstPoke = () => {
        document.getElementById("introContainer").style.display = "grid";
        loadPlayer();
    }
    const addPokemon = function(pokeName) {
        let pokemonInformation = Pokemon.getPokemonInfo(pokeName);
        let pokeNumber = 0;
        while (pokeNumber <= player.Player.pokemon.caught.length) {
            console.log("Start Looped "+pokeNumber)
            if (player.Player.pokemon.caught[pokeNumber].name === pokemonInformation.name) {
                pokeNumber = player.Player.pokemon.caught.length;
                console.log("Pokemon Found");
                console.log("if statement Looped "+pokeNumber);
            }
            pokeNumber++;
            if (pokeNumber === player.Player.pokemon.caught.length) {
                player.Player.pokemon.caught[pokeNumber++] = pokemonInformation;
                console.log("pokemon added "+pokeNumber);
                pokeNumber++;
                localStorage.setItem("playerGameInfo", JSON.stringify(player));
            }
            console.log("Ended Looped "+pokeNumber)
        }
        console.log("This is player after adding "+pokeName+"============"+player);
    }
    const returningPlayer = () => {
        loadPlayer();
        document.getElementById("introContainer").style.display = "none";
        document.getElementById("ranchContainer").style.display = "block";
        document.getElementById("helpersContainer").style.display = "grid";
        Renders.renderHelpers();
    }
    return(
        <div id="appContainer">
            <MainWindow addFirst={addFirstPokemon} />
            <Banner playerName={getPlayerName()}/>
            <PokemonHelpers />
            <Intro introPageStatus={game.Game.introStatus} />
            <PlayerItems />
        </div>
    )
}