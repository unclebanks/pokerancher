import React from "react";
import '../styles/pokeGear.css';

export const PokeGear = () => {
    return(
        <div id="pokeGearContainer">
            <div id="pokeGearLeftButtons">
                <button>PHONE</button>
                <button>QUESTS</button>
            </div>
            <div id="pokeGearDisplay">
                <span>Display stuff here</span>
            </div>
            <div id="pokeGearRightButtons">
                <button>MAP</button>
                <button>FINDER</button>
            </div>
        </div>
    )
}