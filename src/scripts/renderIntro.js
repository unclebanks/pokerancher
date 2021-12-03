import { Renders } from "./render";
export const IntroStart = {

    renderIntro: function() {
        document.getElementById("introContainer").style.display = "none";
        document.getElementById("introContinuedContainer").style.display = "grid";
        document.getElementById("helpersContainer").style.display = "grid";
        Renders.renderHelpers();
    }
}