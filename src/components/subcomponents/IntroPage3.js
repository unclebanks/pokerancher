import React from "react"

export const IntroPage3 = (props) => {
    const finishedIntroTutorial = () => {
        let player = JSON.parse(localStorage.getItem("playerGameInfo"));
        player.flags.finishedIntro = true;
        localStorage.setItem("playerGameInfo", JSON.stringify(player));
        window.location.reload();
    }
    return(
        <div id="introPage3">
            <div id="introPage3Body">IntroPage3</div>
            <div id="introPage3Buttons">
                <button id="introContinuedContainerPrevious"onClick={() => {props.changePageBypass("page2")}}>Previous</button>
                <button id="introContinuedContainerFinish"onClick={() => {finishedIntroTutorial()}}>Finish</button>
            </div>
        </div>
    )
}