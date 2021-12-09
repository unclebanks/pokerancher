import React, {useState} from "react";
import '../styles/ranch.css';
import { PokeDungeons } from "./PokeDungeons";
import { PokeFarm } from "./PokeFarm";
import { PokeGuild } from "./PokeGuild";
import { ProfLab } from "./ProfLab";
import { MainRanch } from "./MainRanch";

export const Ranch = (props) => {
    let ranchReturn = props.gameStatus.ranchStatus;
    const changeRanchPage = (newPage) => {
        ranchSwitch(newPage);
        console.log("Page changed "+ranchReturn);
    }
    const [returnedComponent, setReturnedComponent] = useState(<MainRanch changePage={changeRanchPage}/>)
    
    const ranchSwitch = (ranchReturn) => {
        switch(ranchReturn) {
            case "main": setReturnedComponent(<MainRanch changePage={changeRanchPage}/>);
            break;
            case "profLab": setReturnedComponent(<ProfLab />);
            break;
            case "pokeGuild": setReturnedComponent(<PokeGuild />);
            break;
            case "pokeDungeons": setReturnedComponent(<PokeDungeons />);
            break;
            case "pokeFarm": setReturnedComponent(<PokeFarm />);
            break;
            default: setReturnedComponent(<MainRanch changePage={changeRanchPage}/>);
        }
    }
    return(
        <div id="ranchContainer">
            <span id="ranchTitle">Ranch Name Here</span>
            {returnedComponent}
        </div>
    )
}