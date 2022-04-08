import React from "react";
import pokemons from "./data";
import Pokemon from './Pokemon';

const preTypes = pokemons.map((pokemon) => pokemon.type);
const types = [...new Set(preTypes)];
types.unshift('all');
let filter = pokemons.map((pokemon) => pokemon);

class Pokedex extends React.Component {
  constructor(){
    super()

    this.changePokemon = this.changePokemon.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);

    this.state = {
      pokemonId: 0,
    }
  }

  filterPokemons(event) {
    if(event.target.value === 'all'){
      filter = pokemons.map((pokemon) => pokemon);
    } else {
      filter = pokemons.filter((pokemon) => pokemon.type === event.target.value);
    }
    this.setState(() => ({
      pokemonId: 0
    }));
  }

  changePokemon() {
    if(this.state.pokemonId === filter.length - 1){
      this.setState(() => ({
        pokemonId: 0,
      }));
    } else {
      this.setState((lastState) => ({
        pokemonId: lastState.pokemonId + 1,
      }));
    }
  }
    
  render() {
    return(
      <section className="pokedex">
        <Pokemon pokemon={filter[this.state.pokemonId]} />
        <div className="filter">
          <label className="pokemon-type-lbl">Tipo do Pokemon:</label>
          <select className="pokemon-type-select" name="pokemon-type" onChange={this.filterPokemons}>
            {types.map((type) => <option value={type}>{type}</option>)}
          </select>
          <button className="pokemon-type-btn" onClick={this.changePokemon}>Trocar Pokemon</button>
        </div>
      </section>
    )
  }
}

export default Pokedex;