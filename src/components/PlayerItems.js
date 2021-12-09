import React from "react";
import '../styles/playerItems.css';

export const PlayerItems = (props) => {
    console.log(props);
    return(
        <div id="playerItemsContainer">
            <div id="playerItemsSpan">
                <span>{props.player.playerName} Items</span>
            </div>
            <div id="playersItems">
                <span>PokeCoins: {props.player.currency.pokeCoins}</span><br/>
                <span>Apples: {props.player.currency.apples}</span><br/>
                <span>PKMN Caught: {props.player.pokemon.caught.length}</span><br/>
                <span>PKMN Seen: {props.player.pokemon.seen.length}</span><br/>
            </div>
        </div>
    )
}