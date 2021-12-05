import React from "react";
import '../styles/mainWindow.css';
import { IntroContainer } from "./IntroComponent";

export const MainWindow = ({addFirst}) => {

    const addFirstWorkAround = (pokeName) => {
        addFirst(pokeName);
        console.log("MainWindowPokeName "+pokeName);
    }
    return(
        <div id="mainContainer">
            <IntroContainer addFirstPokemon={addFirstWorkAround} />
            <div id="ranchContainer">
                RANCH HERE
            </div>
        </div>
    )
}