import React from "react";
import '../styles/pokemonHelpers.css';
import '../styles/pokemonBackgrounds.css';

export const PokemonHelpers = (props) => {

    return(
        <div id="helpersContainer">
            <div id="pokemonHelpers">
                {props.playersPokemon.caught.map(
                    pokemon => (
                        <div key={pokemon.name}>
                            <button id={pokemon.name}></button><br/>
                            <span>{pokemon.name}</span><br/>
                            <span>HP: {pokemon.stats.hp}</span>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}