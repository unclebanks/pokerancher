import React from "react";

export const MainRanch = (props) => {
    console.log(props);
    return(
        <div id="mainRanchContainer">
            <button id="labButton" onClick={() => {props.changePage("profLab");}}>Prof. Lab</button>
            <button id="guildButton" onClick={() => {props.changePage("pokeGuild");}}>Guild</button>
            <button id="dungeonButton" onClick={() => {props.changePage("pokeDungeons");}}>Dungeons</button>
            <button id="farmButton" onClick={() => {props.changePage("pokeFarm");}}>Farm</button>
        </div>
    )
}