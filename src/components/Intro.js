import React from "react";
import '../styles/intro.css';
import { IntroPage1 } from "./subcomponents/IntroPage1";
import { IntroPage2 } from "./subcomponents/IntroPage2";
import { IntroPage3 } from "./subcomponents/IntroPage3";

export const Intro = ({introPageStatus}) => {

    let userName = "Temporary";
    let firstPokemon = "None";
    let returnedPage;
    switch(introPageStatus) {
        // Need to change this to have the username passed from app
        case "page1": returnedPage = <IntroPage1 userName={userName}/>
        break;
        case "page2": returnedPage = <IntroPage2 />
        break;
        case "page3": returnedPage = <IntroPage3 />
        break;
    }
    console.log(introPageStatus);

    if (JSON.parse(localStorage.getItem("playerGameInfo"))) {
        userName = JSON.parse(localStorage.getItem("playerGameInfo")).Player.playerName;
        if (JSON.parse(localStorage.getItem("playerGameInfo")).Player.pokemon.caught[0] !== undefined) {
            firstPokemon = JSON.parse(localStorage.getItem("playerGameInfo")).Player.pokemon.caught[0].name;
        }
    }

    const finishIntro = () => {
        let player = JSON.parse(localStorage.getItem("playerGameInfo"));
        player.Player.flags.finishedIntro = true;
        console.log(JSON.stringify(player));
        localStorage.setItem("playerGameInfo", JSON.stringify(player));
        window.location.reload();
    }

    return(
        <div id="introContinuedContainer">
            <span id="introContinuedTitle">Prof's Lab</span>
            {returnedPage}
        </div>
    )
}