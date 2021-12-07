import React from "react";

export const IntroPage1 = (props) => {

    const changePage = (newPage) => {
        props.changePageBypass(newPage);
    }
    return(
        <div id="introPage1">
            <div id="introPage1Body">
                <div>
                    <span>Hi Again {props.userName}!</span><br/>
                    <span>That POKEMON fits you perfectly.</span><br/>
                    <span>Now that you have a POKEMON,<br/> let me explain a bit more about what we do here.</span><br/><br/>
                    <span>As you know we are a POKEMON Ranch<br/> that raises POKEMON, and researches them too.</span><br/>
                    <span>With the continuing emergence of<br/> information regarding POKEMON,<br/>our workload has gotten a bit overwhelming.</span><br/>
                    <span>Your particular job in this is to assist us<br/> with our various tasks.</span><br/>
                    <span>Don't worry,<br/> it sounds like a lot but we will start you off slowly.</span>
                </div>
            </div>
            <div id="introPage1Buttons">
                <button id="introContinuedContainerNext" onClick={() => {changePage("page2")}}>Next</button>
            </div>
        </div>
    )
}