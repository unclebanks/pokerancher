import React, {useState} from "react";
import '../styles/intro.css';
import { IntroPage1 } from "./subcomponents/IntroPage1";
import { IntroPage2 } from "./subcomponents/IntroPage2";
import { IntroPage3 } from "./subcomponents/IntroPage3";

export const Intro = (props) => {

    let userName = props.userName;
    const changePageBypass = (newPage) => {
        changePage(newPage);
    }
    const [returnPage, setPage] = useState(<IntroPage1 userName={userName} changePageBypass={changePageBypass} />)
    const changePage = (newPage) => {
        switch(newPage) {
            case "page1": setPage(<IntroPage1 userName={userName} changePageBypass={changePageBypass}/>)
            break;
            case "page2": setPage(<IntroPage2 changePageBypass={changePageBypass}/>);
            console.log("changed to "+newPage)
            break;
            case "page3": setPage(<IntroPage3 changePageBypass={changePageBypass}/>)
            break;
        }
    }


    let firstPokemon = "None";

    if (JSON.parse(localStorage.getItem("playerGameInfo"))) {
        userName = JSON.parse(localStorage.getItem("playerGameInfo")).playerName;
        if (JSON.parse(localStorage.getItem("playerGameInfo")).pokemon.caught[0] !== undefined) {
            firstPokemon = JSON.parse(localStorage.getItem("playerGameInfo")).pokemon.caught[0].name;
        }
    }
    const finishIntro = () => {
        let player = JSON.parse(localStorage.getItem("playerGameInfo"));
        player.flags.finishedIntro = true;
        console.log(JSON.stringify(player));
        localStorage.setItem("playerGameInfo", JSON.stringify(player));
        window.location.reload();
    }

    return(
        <div id="introContinuedContainer">
            <span id="introContinuedTitle">Prof's Lab</span>
            {returnPage}
        </div>
    )
}