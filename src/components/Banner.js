import React from "react";
import '../styles/banner.css';
import { PokeGear } from "./PokeGear";

export const Banner = (props) => {
    return(
        <div id="bannerContainer">
            <div id="bannerSpan">
                <span>Welcome to PokeRancher {props.playerStatus.playerName} </span>
            </div>
            <PokeGear />
        </div>
    )
}