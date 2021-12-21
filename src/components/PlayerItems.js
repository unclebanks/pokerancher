import React from "react";
import '../styles/playerItems.css';

export const PlayerItems = (props) => {

    return(
        <div id="playerItemsContainer">
            <div id="playerItemsSpan">
                <span>{props.player.playerName} Items</span>
            </div>
            <div id="playersItems">
                <span>PokeCoins: <span id="pokeCoins">0</span></span><br/>
                <span>Apples: {props.player.currency.apples}</span><br/>
                <span>PKMN Caught: {props.player.pokemon.caught.length}</span><br/>
                <span>PKMN Seen: {props.player.pokemon.seen.length}</span><br/>
                <button onClick={() => console.log(props.player.currency.pokeCoins)}>Click</button>
            </div>
        </div>
    )
}