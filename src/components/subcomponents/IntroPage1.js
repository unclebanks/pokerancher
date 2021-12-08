import React from "react";
import '../../styles/introPages/introPage1.css';

export const IntroPage1 = (props) => {

    return(
        <div id="introPage1">
            <div id="tempLabImage">Need an image here or something idk</div>
            <div id="introPage1Body">
                <div id="page1BodyContent">
                    <span>Hi Again {props.userName}!</span><br/>
                    <span>That POKEMON fits you perfectly.</span><br/>
                    <span>Not sure what to put here. :/</span>
                </div>
            </div>
            <div id="introPage1Buttons">
                <button id="introContinuedContainerNext" onClick={() => {props.changePageBypass("page2")}}>Next</button>
            </div>
        </div>
    )
}