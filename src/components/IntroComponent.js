import React from "react";
import '../styles/introContainer.css';

export const IntroContainer = ({addFirstPokemon}) => {

    const addFirstToPlayer = (pokeName) => {
        addFirstPokemon(pokeName);
        console.log("IntroContainerPokeName "+pokeName);
    }
    return(
        <div id="introContainer">
            <div id="introHeader">Prof Rancher</div>
            <div id="introBody">
                <div id="rancherImage">Prof Image Goes Here</div>
                <div id="rancherConversation">
                    <span>Welcome to PokeRancher!</span><br/>
                    <span>Believe it or not, I am a Pokemon Professor!</span><br/>
                    <span>Unlike traditional Professors, I specialize in raising Pokemon on farms.</span><br/>
                    <span>Although this is quite fun, it is tough work!</span><br/>
                    <span>You are the third assistant I have hired this week.</span><br/>
                    <span>Well, forget about the minor details for now.</span><br/>
                    <span>Let's get to showing you the ropes around here!</span><br/>
                    <span>First, pick a partner Pokemon to help you start out.</span><br/>
                </div>
                <div id="partnerPokemonContainer">
                    <button id="charmanderStarter" name="Charmander" onClick={e => {addFirstToPlayer(e.target.name)}}/>
                    <button id="squirtleStarter" name="Squirtle" onClick={e => {addFirstToPlayer(e.target.name)}}/>
                    <button id="bulbasaurStarter" name="Bulbasaur" onClick={e => {addFirstToPlayer(e.target.name)}}/>
                    <button id="pikachuStarter" name="Pikachu" onClick={e => {addFirstToPlayer(e.target.name)}}/>
                </div>
            </div>
        </div>
    )
}