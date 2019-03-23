import React, { Component } from 'react';
import Pokemon from '../components/Pokemon';

class PokemonContainer extends Component {
  render() { 
    return ( 
      <div className="ui six column grid">
        <div className="row">
          {this.props.allPokemon.map(p => <Pokemon key={p.name} pokemon={p} handlePokeClick={this.props.handlePokeClick} />)}
        </div>
      </div>
     );
  }
}
 
export default PokemonContainer;