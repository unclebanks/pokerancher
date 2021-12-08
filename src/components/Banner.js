import React from "react";
import '../styles/banner.css';

export const Banner = (props) => {
    return(
        <div id="bannerContainer">
            <div id="bannerSpan">
                <span>Welcome to PokeRancher {props.playerStatus.playerName} </span>
            </div>
            <div id="pokeGearContainer">PokeGear stuff here</div>
        </div>
    )
}