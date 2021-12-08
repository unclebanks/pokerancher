import React from "react";
import '../styles/banner.css';

export const Banner = (props) => {
    return(
        <div id="bannerContainer">Welcome to PokeRancher {props.playerStatus.playerName} </div>
    )
}