import React from "react";

export const IntroPage2 = (props) => {
    const changePage = (newPage) => {
        props.changePageBypass(newPage);
    }
    return(
        <div id="introPage2" >
            <div id="introPage2Body">IntroPage2</div>
            <div id="introPage2Buttons">
                <button id="introContinuedContainerPrevious"onClick={() => {changePage("page1")}}>Previous</button>
                <button id="introContinuedContainerNext"onClick={() => {changePage("page3")}}>Next</button>
            </div>
        </div>
    )
}