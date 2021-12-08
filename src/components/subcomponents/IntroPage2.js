import React from "react";

export const IntroPage2 = (props) => {
    return(
        <div id="introPage2" >
            <div id="introPage2Body">IntroPage2</div>
            <div id="introPage2Buttons">
                <button id="introContinuedContainerPrevious"onClick={() => {props.changePageBypass("page1")}}>Previous</button>
                <button id="introContinuedContainerNext"onClick={() => {props.changePageBypass("page3")}}>Next</button>
            </div>
        </div>
    )
}