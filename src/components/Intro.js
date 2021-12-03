import React, { useEffect } from "react";
import '../styles/intro.css';

export const Intro = () => {

    let userName = "Temporary";
    let firstPokemon = "None";

    if (JSON.parse(localStorage.getItem("playerGameInfo"))) {
        userName = JSON.parse(localStorage.getItem("playerGameInfo")).Player.playerName;
        if (JSON.parse(localStorage.getItem("playerGameInfo")).Player.pokemon.caught[0] != undefined) {
            firstPokemon = JSON.parse(localStorage.getItem("playerGameInfo")).Player.pokemon.caught[0].name;
        }
    }

    const moveIntroPage = (pageFrom, pageTo) => {
        let currentPage = document.getElementById(pageFrom);
        let nextPage = document.getElementById(pageTo);
        currentPage.style.display = "none";
        nextPage.style.display = "grid";
    }

    return(
        <div id="introContinuedContainer">
            <span id="introContinuedTitle">Prof's Lab</span>
            <div id="introPage1">
                <div id="introPage1Body">
                    <div>
                        <span>Hi Again {userName}!</span><br/>
                        <span>It looks like you have chosen a {firstPokemon}</span><br/>
                        <span>That POKEMON fits you perfectly.</span><br/>
                        <span>Now that you have a POKEMON,<br/> let me explain a bit more about what we do here.</span><br/><br/>
                        <span>As you know we are a POKEMON Ranch<br/> that raises POKEMON, and researches them too.</span><br/>
                        <span>With the continuing emergence of<br/> information regarding POKEMON,<br/>our workload has gotten a bit overwhelming.</span><br/>
                        <span>Your particular job in this is to assist us<br/> with our various tasks.</span><br/>
                        <span>Don't worry,<br/> it sounds like a lot but we will start you off slowly.</span>
                    </div>
                </div>
                <div id="introPage1Buttons">
                    <button id="introContinuedContainerNext" onClick={() => moveIntroPage("introPage1", "introPage2")}>Next</button>
                </div>
            </div>
            <div id="introPage2">
                <div id="introPage2Body">BodyText</div>
                <div id="introPage2Buttons">
                    <button id="introContinuedContainerPrevious" onClick={() => moveIntroPage("introPage2", "introPage1")}>Previous</button>
                    <button id="introContinuedContainerNext"onClick={() => moveIntroPage("introPage2", "introPage3")}>Next</button>
                </div>
            </div>
            <div id="introPage3">
                <div id="introPage3Body">BodyText</div>
                <div id="introPage3Buttons">
                    <button id="introContinuedContainerPrevious" onClick={() => moveIntroPage("introPage3", "introPage2")}>Previous</button>
                </div>
            </div>
        </div>
    )
}