import React from "react";
import '../styles/playerItems.css';

export const PlayerItems = (props) => {
    return(
        <div id="playerItemsContainer">
            <div id="playerItemsSpan">
                <span>{props.player.playerName} Items</span>
            </div>
            <div id="playersItems">
                <span>PokeCoins: {props.player.pokeCoins}</span><br/>
                <span>Apples: {props.player.apples}</span><br/>
                <span>PKMN Caught: {props.player.pokemon.caught.length}</span><br/>
                <span>PKMN Seen: {props.player.pokemon.seen.length}</span><br/>
            </div>
        </div>
    )
}