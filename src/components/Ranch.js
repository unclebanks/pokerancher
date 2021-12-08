import React from "react";
import '../styles/ranch.css';
import { PokeDungeons } from "./PokeDungeons";
import { PokeFarm } from "./PokeFarm";
import { PokeGuild } from "./PokeGuild";
import { ProfLab } from "./ProfLab";
import { MainRanch } from "./MainRanch";

export const Ranch = (props) => {
    console.log(props.gameStatus);
    let ranchReturn = props.gameStatus.ranchStatus;
    let returnedComponent;
    switch(ranchReturn) {
        case "main": returnedComponent = <MainRanch />;
        break;
        case "profLab": returnedComponent = <ProfLab />;
        break;
        case "pokeGuild": returnedComponent = <PokeGuild />;
        break;
        case "pokeDungeons": returnedComponent = <PokeDungeons />;
        break;
        case "pokeFarm": returnedComponent = <PokeFarm />;
        break;
        default: returnedComponent = <MainRanch />;
    }
    return(
        <div id="ranchContainer">
            <span id="ranchTitle">Ranch Name Here</span>
            {returnedComponent}
        </div>
    )
}