export const Renders = {

    renderHelpers: function() {
        let playerHelperMons = JSON.parse(localStorage.getItem("playerGameInfo")).Player.pokemon.caught;
        let i = 0;
        const numberOfMons = Object.keys(playerHelperMons);
        while (i < numberOfMons.length) {
            // this.renderIndividual(numberOfMons[i]);
            console.log(numberOfMons[i])
            this.renderIndividual(playerHelperMons[numberOfMons[i]]);
            i++;
        }
    },
    renderIndividual: function(pokemon) {
        console.log("=++++++++"+pokemon.name)
        const div = document.createElement("div");
        const button = document.createElement("button");
        const container = document.getElementById("helpersContainer");
        const pokeName = pokemon.name;
        button.id = pokeName;
        button.style.backgroundImage = `url("./images/${pokeName}.png")`;
        div.appendChild(button);
        container.appendChild(div);
    }
}