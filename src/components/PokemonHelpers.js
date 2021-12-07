import React from "react";
import '../styles/pokemonHelpers.css';
import '../styles/pokemonBackgrounds.css';

export const PokemonHelpers = (props) => {

    //Split each pokemon square into its own component and render through while funciton.
    const renderIndividual = (pokemon) => {
        console.log("=++++++++"+pokemon.name)
        let div = document.createElement("div");
        let button = document.createElement("button");
        let container = document.getElementById("helpersContainer");
        let pokeName = pokemon.name;
        button.id = pokeName;
        div.appendChild(button);
        container.appendChild(div);
    }
    console.log(props.playersPokemon.caught.length+" playersPokemon");
    let i = 0;
    while (i < props.playersPokemon.caught.length) {
        console.log(props.playersPokemon.caught[i]);
        i++;
    }
    return(
        <div id="helpersContainer">HELPERS</div>
    )
}