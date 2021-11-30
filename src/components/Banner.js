import React from "react";
import '../styles/banner.css';

export const Banner = () => {
    let playerName;
    if (!localStorage.getItem("playerGameInfo")) {
        playerName = 'Player'
    } else { playerName = JSON.parse(localStorage.getItem("playerGameInfo")).Player.playerName; }


    return(
        <div id="bannerContainer">Welcome to PokeRancher {playerName}</div>
    )
}