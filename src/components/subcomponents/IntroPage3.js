import React from "react"

export const IntroPage3 = (props) => {
    return(
        <div id="introPage3">
            <div id="introPage3Body">IntroPage3</div>
            <div id="introPage3Buttons">
                <button id="introContinuedContainerPrevious"onClick={() => {props.changePageBypass("page2")}}>Previous</button>
                <button id="introContinuedContainerFinish">Finish</button>
            </div>
        </div>
    )
}