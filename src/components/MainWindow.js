import React, { useEffect } from "react";
import '../styles/mainWindow.css';
import { Pokemon } from "../scripts/pokemon";
import { Renders } from "../scripts/render";

export const MainWindow = () => {

    useEffect(() => {
        if(!localStorage.getItem("playerGameInfo")) {
            newPlayer();
        } else { returningPlayer(); }
    })

    const newPlayer = () => {
        let playerName = prompt("Please enter your UserName.");
        let playerInfo = {Player: {"playerName": playerName, pokeCoins: 0, pokemon: {caught: {}}}}
        localStorage.setItem("playerGameInfo", JSON.stringify(playerInfo));
        window.location.reload();
    }

    const returningPlayer = () => {
        document.getElementById("introContainer").style.display = "none";
        document.getElementById("ranchContainer").style.display = "block";
        document.getElementById("helpersContainer").style.display = "grid";
        Renders.renderHelpers();
    }

    // const addPokeAndAlert = (firstPokemon) => {
    //     let playerInfo = JSON.parse(localStorage.getItem("playerGameInfo"));
    //     if (!playerInfo.Player.pokemon.caught[`${firstPokemon}`]) {
    //         playerInfo.Player.pokemon.caught[`${firstPokemon}`] = 1;
    //     } else {
    //         alert("Error somewhere. Sorry about that.");
    //     }
    //     localStorage.setItem("playerGameInfo", JSON.stringify(playerInfo));
    // }



    return(
        <div id="mainContainer">
            <div id="introContainer">
                <div id="introHeader">Prof Rancher</div>
                <div id="introBody">
                    <div id="rancherImage">Prof Image Goes Here</div>
                    <div id="rancherConversation">
                        <span>Welcome to PokeRancher!</span><br/>
                        <span>Believe it or not, I am a Pokemon Professor!</span><br/>
                        <span>Unlike traditional Professors, I specialize in raising Pokemon on farms.</span><br/>
                        <span>Although this is quite fun, it is tough work!</span><br/>
                        <span>You are the third assistant I have hired this week.</span><br/>
                        <span>Well, forget about the minor details for now.</span><br/>
                        <span>Let's get to showing you the ropes around here!</span><br/>
                        <span>First, pick a partner Pokemon to help you start out.</span><br/>
                    </div>
                    <div id="partnerPokemonContainer">
                        <button id="charmanderStarter" name="Charmander" onClick={e => {Pokemon.addPokemon(e.target.name)}}/>
                        <button id="squirtleStarter" name="Squirtle" onClick={e => {Pokemon.addPokemon(e.target.name)}}/>
                        <button id="bulbasaurStarter" name="Bulbasaur" onClick={e => {Pokemon.addPokemon(e.target.name)}}/>
                        <button id="pikachuStarter" name="Pikachu" onClick={e => {Pokemon.addPokemon(e.target.name)}}/>
                    </div>
                </div>
            </div>
            <div id="ranchContainer">
                RANCH HERE
            </div>
        </div>
    )
}