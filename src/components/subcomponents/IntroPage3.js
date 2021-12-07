import React from "react"

export const IntroPage3 = (props) => {
    const changePage = (newPage) => {
        props.changePageBypass(newPage);
    }
    return(
        <div id="introPage3">
            <div id="introPage3Body">IntroPage3</div>
            <div id="introPage3Buttons">
                <button id="introContinuedContainerPrevious"onClick={() => {changePage("page2")}}>Previous</button>
                <button id="introContinuedContainerFinish">Finish</button>
            </div>
        </div>
    )
}