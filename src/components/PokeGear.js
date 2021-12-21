import React from "react";
import '../styles/pokeGear.css';

export const PokeGear = (props) => {
    const testLog = () => {
        props.addPokeCoins();
    }
    const logCoins = () => {
        console.log(props.playerCoins.currency.pokeCoins);
    }
    return(
        <div id="pokeGearContainer">
            <div id="pokeGearLeftButtons">
                <button onClick={testLog}>PHONE</button>
                <button>QUESTS</button>
            </div>
            <div id="pokeGearDisplay">
                <span>Display stuff here</span>
            </div>
            <div id="pokeGearRightButtons">
                <button onClick={logCoins}>MAP</button>
                <button>FINDER</button>
            </div>
        </div>
    )
}