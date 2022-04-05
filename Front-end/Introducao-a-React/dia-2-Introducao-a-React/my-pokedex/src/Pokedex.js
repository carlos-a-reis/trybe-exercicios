import React from "react";
import pokemons from "./data";
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return(
        <section className="pokedex">
            {pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
        </section>
        )
    }
}

export default Pokedex;