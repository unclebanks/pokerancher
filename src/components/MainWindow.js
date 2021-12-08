import React from "react";
import '../styles/mainWindow.css';
import { Intro } from "./Intro";
import { IntroContainer } from "./IntroComponent";
import { Ranch } from "./Ranch";

export const MainWindow = (props) => {

    const addFirstWorkAround = (pokeName) => {
        props.addFirst(pokeName);
        console.log("MainWindowPokeName "+pokeName);
    }
    let mainToReturn;
    switch(props.gameStatus.mainWindowStatus) {
        case "intro":
            mainToReturn = <IntroContainer addFirstPokemon={addFirstWorkAround} />
        break;
        case "ranch":
            mainToReturn = <Ranch gameStatus={props.gameStatus}/>
        break;
        case "hasPoke":
            mainToReturn = <Intro currentIntroPage={props.gameStatus.introStatus} userName={props.playerStatus.playerName}/>
        break;
    }
    return(
        <div id="mainContainer">
            {mainToReturn}
        </div>
    )
}